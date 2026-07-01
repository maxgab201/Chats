```javascript
module.exports = async function (req, res) {
    // Solo permitimos peticiones POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { provider, model, message } = req.body;
    let apiUrl = '';
    let apiKey = '';

    // Buscamos las variables de entorno
    if (provider === 'openrouter') {
        apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
        apiKey = process.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;
    } else if (provider === 'nvidia') {
        apiUrl = 'https://integrate.api.nvidia.com/v1/chat/completions';
        apiKey = process.env.VITE_NVIDIA_API_KEY || process.env.NVIDIA_API_KEY;
    } else {
        return res.status(400).json({ error: 'Proveedor inválido' });
    }

    // Si falta la key, avisamos
    if (!apiKey) {
        return res.status(500).json({ error: `API Key de ${provider} no configurada en Vercel.` });
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': 'https://github.com/maxgab201/Chats',
                'X-Title': 'Arena IA'
            },
            body: JSON.stringify({
                model: model,
                messages: [{ role: 'user', content: message }],
                // Nvidia necesita max_tokens a veces, OpenRouter no.
                ...(provider === 'nvidia' ? { max_tokens: 1024, temperature: 0.7 } : {})
            })
        });

        // Intentamos leer la respuesta de la IA
        const data = await response.json();
        
        if (!response.ok) {
            return res.status(500).json({ error: data.error?.message || `Error del servidor HTTP ${response.status}` });
        }

        // Enviamos el texto de vuelta al frontend
        return res.status(200).json({ text: data.choices[0]?.message?.content || 'Sin respuesta' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


```
