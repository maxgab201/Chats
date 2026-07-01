const { callProvider } = require('./_provider');
const { wikiSearch, fetchUrlText } = require('./_tools');

const MAX_STEPS = 4;
const MAX_HISTORY_MESSAGES = 20;
const TIME_BUDGET_MS = 45000;

function buildSystemPrompt(basePrompt) {
    return `${basePrompt}

Tenés acceso a estas herramientas. Para usarlas, respondé ÚNICAMENTE con este formato exacto (sin nada de texto antes ni después):

ACTION: wiki_search
INPUT: <consulta de búsqueda en Wikipedia>

o

ACTION: fetch_url
INPUT: <URL completa a leer>

Cuando ya tengas suficiente información para responder, respondé ÚNICAMENTE con:

FINAL: <tu respuesta completa, clara y verificada en markdown>

Reglas:
- Un solo bloque ACTION o FINAL por respuesta, nunca los dos ni texto libre fuera de ese formato.
- Tenés como máximo ${MAX_STEPS} usos de herramientas en total; si se te acaban, respondé con FINAL usando lo que ya sabés.
- Si una herramienta no devuelve nada útil, probá una búsqueda distinta o respondé con tu propio conocimiento.`;
}

function parseModelOutput(text) {
    const finalMatch = text.match(/FINAL:\s*([\s\S]*)/i);
    if (finalMatch) return { type: 'final', content: finalMatch[1].trim() };

    const actionMatch = text.match(/ACTION:\s*(\w+)/i);
    const inputMatch = text.match(/INPUT:\s*([\s\S]*)/i);
    if (actionMatch && inputMatch) {
        return { type: 'action', action: actionMatch[1].trim().toLowerCase(), input: inputMatch[1].trim() };
    }

    // El modelo no siguió el formato pedido: tratamos su respuesta como final
    // en vez de fallar, para no dejar al usuario sin respuesta.
    return { type: 'final', content: text.trim() };
}

async function runTool(action, input) {
    if (action === 'wiki_search') return wikiSearch(input);
    if (action === 'fetch_url') return fetchUrlText(input);
    return `Herramienta desconocida: "${action}". Las disponibles son wiki_search y fetch_url.`;
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { provider, model, content, system, history } = req.body || {};

    if (!provider || !model || !content) {
        return res.status(400).json({ error: 'Faltan campos: provider, model o content' });
    }

    if (provider !== 'openrouter' && provider !== 'nvidia') {
        return res.status(400).json({ error: `Proveedor desconocido: ${provider}` });
    }

    const priorMessages = Array.isArray(history)
        ? history.filter(m => m && (m.role === 'user' || m.role === 'assistant') && m.content).slice(-MAX_HISTORY_MESSAGES)
        : [];

    const messages = [
        { role: 'system', content: buildSystemPrompt(system || 'Sos un agente autónomo experto que responde de forma metódica y verificada.') },
        ...priorMessages,
        { role: 'user', content }
    ];

    const steps = [];
    const startTime = Date.now();

    try {
        for (let i = 0; i <= MAX_STEPS; i++) {
            const isLastChance = i === MAX_STEPS || (Date.now() - startTime) > TIME_BUDGET_MS;
            if (isLastChance) {
                messages.push({ role: 'user', content: 'Ya usaste el máximo de pasos disponibles. Respondé ahora con FINAL: usando toda la información reunida hasta el momento.' });
            }

            const raw = await callProvider({ provider, model, messages });
            const parsed = parseModelOutput(raw);

            if (parsed.type === 'final' || isLastChance) {
                const finalText = parsed.type === 'final' ? parsed.content : raw.trim();
                return res.status(200).json({ text: finalText, steps });
            }

            messages.push({ role: 'assistant', content: raw });
            const result = await runTool(parsed.action, parsed.input);
            steps.push({ action: parsed.action, input: parsed.input, result });
            messages.push({ role: 'user', content: `Observación de "${parsed.action}":\n${result}` });
        }

        return res.status(200).json({ text: 'No se pudo generar una respuesta final dentro del límite de pasos.', steps });
    } catch (e) {
        return res.status(e.status || 500).json({ error: e.message, steps });
    }
};
