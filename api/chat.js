```javascript
module.exports = async (req, res) => {
    // CORS para evitar problemas de conexión
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { provider, model, message } = req.body;
        const apiUrl = provider === 'nvidia' 
            ? 'https://integrate.api.nvidia.com/v1/chat/completions' 
            : 'https://openrouter.ai/api/v1/chat/completions';
        
        const apiKey = provider === 'nvidia' 
            ? (process.env.VITE_NVIDIA_API_KEY || process.env.NVIDIA_API_KEY)
            : (process.env.VITE_OPENROUTER_API_KEY || process.env.OPENROUTER_API_KEY);

        if (!apiKey) {
            return res.status(500).json({ error: `API Key para ${provider} no configurada.` });
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
                model: model,
                messages: [{ role: 'user', content: message }],
                ...(provider === 'nvidia' ? { max_tokens: 1024 } : {})
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            return res.status(500).json({ error: JSON.stringify(data) });
        }

        return res.status(200).json({ text: data.choices[0].message.content });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};

```
