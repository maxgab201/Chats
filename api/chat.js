```javascript
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    const { provider, model, message } = req.body;
    let apiUrl = '';
    let apiKey = '';

    // Soporta las variables con o sin el prefijo VITE_ que creaste antes
    if (provider === 'openrouter') {
        apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
        apiKey = process.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY;
    } else if (provider === 'nvidia') {
        apiUrl = 'https://integrate.api.nvidia.com/v1/chat/completions';
        apiKey = process.env.VITE_NVIDIA_API_KEY || process.env.NVIDIA_API_KEY;
    } else {
        return res.status(400).json({ error: 'Proveedor inválido' });
    }

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key no configurada en las variables de entorno de Vercel' });
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
                // Nvidia a veces requiere el max_tokens
                ...(provider === 'nvidia' && { max_tokens: 1024, temperature: 0.7 })
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error?.message || `Error del servidor HTTP ${response.status}`);
        }

        res.status(200).json({ text: data.choices[0]?.message?.content || 'Sin respuesta' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

```

