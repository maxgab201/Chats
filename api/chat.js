const { callProvider } = require('./_provider');

const MAX_HISTORY_MESSAGES = 20;

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
        ...(system ? [{ role: 'system', content: system }] : []),
        ...priorMessages,
        { role: 'user', content }
    ];

    try {
        const text = await callProvider({ provider, model, messages });
        return res.status(200).json({ text });
    } catch (e) {
        return res.status(e.status || 500).json({ error: e.message });
    }
};
