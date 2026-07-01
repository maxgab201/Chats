const FRIENDLY_STATUS_MESSAGES = {
    401: 'La API key no es válida o no tiene acceso a este modelo.',
    403: 'Acceso denegado a este modelo (puede requerir aceptar términos en el panel del proveedor).',
    404: 'El modelo no existe o ya no está disponible en este proveedor.',
    429: 'Límite de uso gratuito alcanzado para este modelo. Esperá unos segundos o probá otro modelo.'
};

function apiKeyFor(provider) {
    return provider === 'nvidia'
        ? (process.env.VITE_NVIDIA_API_KEY || process.env.NVIDIA_API_KEY)
        : (process.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY);
}

function httpError(message, status) {
    const err = new Error(message);
    err.status = status;
    return err;
}

async function callProvider({ provider, model, messages, maxTokens }) {
    const apiUrl = provider === 'nvidia'
        ? 'https://integrate.api.nvidia.com/v1/chat/completions'
        : 'https://openrouter.ai/api/v1/chat/completions';

    const apiKey = apiKeyFor(provider);
    if (!apiKey) {
        throw httpError(`API Key para ${provider} no configurada en las variables de entorno de Vercel.`, 500);
    }

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
            ...(provider === 'nvidia' ? { max_tokens: maxTokens || 1024, temperature: 0.7 } : {})
        })
    });

    const rawText = await response.text();
    let data;
    try {
        data = JSON.parse(rawText);
    } catch {
        throw httpError(`Respuesta no válida de ${provider} (status ${response.status}): ${rawText.slice(0, 200)}`, 502);
    }

    if (!response.ok) {
        const friendly = FRIENDLY_STATUS_MESSAGES[response.status];
        const providerError = data.error?.message || data.error || JSON.stringify(data);
        const message = friendly ? `${friendly} (${providerError})` : providerError;
        throw httpError(`${provider}: ${message}`, response.status);
    }

    const text = data.choices?.[0]?.message?.content;
    if (!text) {
        throw httpError(`${provider} no devolvió contenido válido.`, 502);
    }

    return text;
}

module.exports = { callProvider };
