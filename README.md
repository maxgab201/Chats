# Arena de IAs

Compará en paralelo las respuestas de un modelo gratuito de **OpenRouter** y uno de **NVIDIA NIM** para el mismo prompt. Frontend estático + una función serverless de Vercel que oculta las API keys.

## Estructura

- `index.html` — estructura de la página
- `style.css` — estilos propios (además de Tailwind por CDN)
- `script.js` — lógica del chat (fetch al backend, render de respuestas)
- `api/chat.js` — función serverless de Vercel que reenvía el mensaje al proveedor elegido

## Modelos disponibles

- **OpenRouter**: los 22 modelos que hoy tienen sufijo `:free` en OpenRouter (más el router automático `openrouter/free`), agrupados por proveedor.
- **NVIDIA NIM**: los ~100 modelos del catálogo de `build.nvidia.com` que funcionan con el endpoint `/v1/chat/completions` (se excluyen los de embeddings, reranking, traducción y reward, que usan otro formato de API).

Ambos selectores tienen un buscador (escribí para filtrar por nombre o proveedor) en vez de un `<select>` plano, ya que son demasiadas opciones para una lista simple.

## Cómo conseguir las API keys gratis

1. **OpenRouter**: creá una cuenta en [openrouter.ai](https://openrouter.ai), generá una API key en Settings → Keys. Los modelos con sufijo `:free` (y el router `openrouter/free`) no cobran créditos.
2. **NVIDIA NIM**: creá una cuenta en [build.nvidia.com](https://build.nvidia.com), generá una API key desde cualquier modelo (botón "Get API Key"). El tier gratis del NVIDIA Developer Program alcanza ~40 requests/minuto sin tarjeta de crédito.

## Configuración en Vercel

En el proyecto de Vercel, agregá estas variables de entorno (Settings → Environment Variables). Acepta cualquiera de los dos nombres por variable (por compatibilidad con configuraciones previas):

| Variable | Alternativa | Valor |
|---|---|---|
| `OPENROUTER_API_KEY` | `VITE_OPENROUTER_API_KEY` | tu API key de OpenRouter |
| `NVIDIA_API_KEY` | `VITE_NVIDIA_API_KEY` | tu API key de NVIDIA NIM |

Sin estas variables, el backend responde con un error claro indicando cuál falta (en vez de romperse).

## Desarrollo local

Con la CLI de Vercel:

```bash
npm i -g vercel
vercel dev
```

Esto sirve `index.html` y ejecuta `api/chat.js` como función serverless en local.
