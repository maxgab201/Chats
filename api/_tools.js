const PRIVATE_HOST_PATTERNS = [
    /^localhost$/i, /^127\./, /^0\.0\.0\.0$/, /^169\.254\./,
    /^10\./, /^172\.(1[6-9]|2\d|3[01])\./, /^192\.168\./,
    /^::1$/i, /^fc[0-9a-f]{2}:/i, /^fe80:/i
];

function isPrivateHost(hostname) {
    return PRIVATE_HOST_PATTERNS.some(re => re.test(hostname));
}

// Antes de tirar todas las etiquetas, tratamos de ubicar el contenedor de
// contenido principal (evita que el resultado sea puro menú de navegación,
// especialmente en Wikipedia, que es la fuente más común acá).
function extractMainHTML(html) {
    const markers = [/<div[^>]*id="mw-content-text"[^>]*>/i, /<main[^>]*>/i, /<article[^>]*>/i];
    for (const marker of markers) {
        const match = marker.exec(html);
        if (match) return html.slice(match.index, match.index + 30000);
    }
    return html;
}

function stripTags(html) {
    return html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
}

async function fetchWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        return await fetch(url, { ...options, signal: controller.signal });
    } finally {
        clearTimeout(timer);
    }
}

// Búsqueda en Wikipedia (ES y EN). Es la fuente de "web search" más confiable sin
// API key: buscadores como DuckDuckGo bloquean el scraping desde IPs de datacenter
// (incluidas las de las funciones serverless de Vercel), mientras que la API de
// Wikipedia está pensada para consumo programático.
async function wikiSearch(query) {
    const langs = ['es', 'en'];
    for (const lang of langs) {
        const url = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=4&srsearch=${encodeURIComponent(query)}`;
        try {
            const res = await fetchWithTimeout(url, { headers: { 'User-Agent': 'ArenaIA/1.0 (agente educativo, sin fines comerciales)' } }, 8000);
            if (!res.ok) continue;
            const data = await res.json();
            const results = data.query?.search || [];
            if (results.length === 0) continue;
            return results.map((r, i) => {
                const pageUrl = `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(r.title.replace(/ /g, '_'))}`;
                return `${i + 1}. ${r.title} (${pageUrl})\n${stripTags(r.snippet)}`;
            }).join('\n\n');
        } catch {
            continue;
        }
    }
    return 'No se encontraron resultados en Wikipedia para esa búsqueda.';
}

// Para artículos de Wikipedia usamos su API de extractos en texto plano en vez de
// scrapear el HTML: el HTML de Wikipedia trae infoboxes con JSON embebido, menús
// de idiomas, etc. que ensucian mucho el resultado.
async function fetchWikipediaExtract(hostname, pathname) {
    const langMatch = hostname.match(/^([a-z-]+)\.wikipedia\.org$/i);
    if (!langMatch || !pathname.startsWith('/wiki/')) return null;

    const lang = langMatch[1];
    const title = decodeURIComponent(pathname.replace('/wiki/', ''));
    const apiUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&prop=extracts&explaintext=1&format=json&titles=${encodeURIComponent(title)}`;

    try {
        const res = await fetchWithTimeout(apiUrl, { headers: { 'User-Agent': 'ArenaIA/1.0 (agente educativo, sin fines comerciales)' } }, 8000);
        if (!res.ok) return null;
        const data = await res.json();
        const page = Object.values(data.query?.pages || {})[0];
        return page?.extract || null;
    } catch {
        return null;
    }
}

async function fetchUrlText(rawUrl) {
    let parsed;
    try {
        parsed = new URL(rawUrl.trim());
    } catch {
        return 'URL inválida.';
    }
    if (!['http:', 'https:'].includes(parsed.protocol) || isPrivateHost(parsed.hostname)) {
        return 'No se puede acceder a esa URL.';
    }

    const wikiExtract = await fetchWikipediaExtract(parsed.hostname, parsed.pathname);
    if (wikiExtract) return wikiExtract.slice(0, 4000);

    try {
        const res = await fetchWithTimeout(parsed.toString(), { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ArenaIA/1.0)' } }, 8000);
        if (!res.ok) return `No se pudo leer la URL (status ${res.status}).`;
        const html = await res.text();
        return stripTags(extractMainHTML(html)).slice(0, 4000);
    } catch (e) {
        return `No se pudo leer la URL: ${e.message}`;
    }
}

module.exports = { wikiSearch, fetchUrlText };
