const FRIENDLY_STATUS_MESSAGES = {
    401: 'La API key no es válida o no tiene acceso a este modelo.',
    403: 'Acceso denegado a este modelo (puede requerir aceptar términos en el panel del proveedor).',
    404: 'El modelo no existe o ya no está disponible en este proveedor.',
    429: 'Límite de uso gratuito alcanzado para este modelo. Esperá unos segundos o probá otro modelo.'
};

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

    const { provider, model, content, system } = req.body || {};

    if (!provider || !model || !content) {
        return res.status(400).json({ error: 'Faltan campos: provider, model o content' });
    }

    if (provider !== 'openrouter' && provider !== 'nvidia') {
        return res.status(400).json({ error: `Proveedor desconocido: ${provider}` });
    }

    const apiUrl = provider === 'nvidia'
        ? 'https://integrate.api.nvidia.com/v1/chat/completions'
        : 'https://openrouter.ai/api/v1/chat/completions';

    const apiKey = provider === 'nvidia'
        ? (process.env.VITE_NVIDIA_API_KEY || process.env.NVIDIA_API_KEY)
        : (process.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY);

    if (!apiKey) {
        return res.status(500).json({ error: `API Key para ${provider} no configurada en las variables de entorno de Vercel.` });
    }

    const messages = [
        ...(system ? [{ role: 'system', content: system }] : []),
        { role: 'user', content }
    ];

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://github.com/',
                'X-Title': 'Arena IA'
            },
            body: JSON.stringify({
                model,
                messages,
                ...(provider === 'nvidia' ? { max_tokens: 1024, temperature: 0.7 } : {})
            })
        });

        const rawText = await response.text();
        let data;
        try {
            data = JSON.parse(rawText);
        } catch {
            return res.status(502).json({ error: `Respuesta no válida de ${provider} (status ${response.status}): ${rawText.slice(0, 200)}` });
        }

        if (!response.ok) {
            const friendly = FRIENDLY_STATUS_MESSAGES[response.status];
            const providerError = data.error?.message || data.error || JSON.stringify(data);
            const message = friendly ? `${friendly} (${providerError})` : providerError;
            return res.status(response.status).json({ error: `${provider}: ${message}` });
        }

        const text = data.choices?.[0]?.message?.content;
        if (!text) {
            return res.status(502).json({ error: `${provider} no devolvió contenido válido.` });
        }

        return res.status(200).json({ text });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};
