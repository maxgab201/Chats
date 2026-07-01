# Arena de IAs

Compará en paralelo las respuestas de un modelo gratuito de **OpenRouter** y uno de **NVIDIA NIM** para el mismo prompt, o usá un solo modelo. Frontend estático + una función serverless de Vercel que oculta las API keys.

## Funcionalidad

- **Arena (2 IAs)**: compara OpenRouter vs NVIDIA NIM en paralelo (modo por defecto).
- **1 sola IA**: elegís un proveedor y un modelo, y solo se llama a ese.
- **Modo Agente** (⭐): habilitado únicamente cuando el/los modelo(s) activos son "top" (modelos grandes/flagship). Agrega un system prompt que le pide al modelo planificar paso a paso y verificar su respuesta antes de contestar.
- **Imágenes** (🖼️): el botón de adjuntar se habilita solo si el modelo activo soporta visión. La imagen se envía como `image_url` (base64) junto al texto.

## Estructura

- `index.html` — estructura de la página
- `style.css` — estilos propios (además de Tailwind por CDN)
- `script.js` — lógica del chat (fetch al backend, render de respuestas)
- `api/chat.js` — función serverless de Vercel que reenvía el mensaje al proveedor elegido

## Modelos disponibles

- **OpenRouter**: 21 modelos con sufijo `:free` en OpenRouter (más el router automático `openrouter/free`), agrupados por proveedor. Se excluyó `nemotron-3.5-content-safety` porque es un clasificador de moderación, no un modelo de chat.
- **NVIDIA NIM**: ~85 modelos del catálogo de `build.nvidia.com` que funcionan con el endpoint `/v1/chat/completions`. Se excluyen los de embeddings, reranking, traducción, reward, parseo de documentos, generación de imágenes y los clasificadores de guardrails/seguridad (`*-guard*`, `*-safety*`), además de modelos base sin instruction-tuning (`gemma-2b`, `llama2-70b`, `codellama-70b`, `mixtral-8x22b-v0.1`, `starcoder2-15b`) — todos estos no responden como un asistente de chat normal y son la fuente más probable de errores.

Ambos selectores tienen un buscador (escribí para filtrar por nombre o proveedor) en vez de un `<select>` plano, ya que son demasiadas opciones para una lista simple. Los modelos marcados con ⭐ son "top" (habilitan modo agente) y con 🖼️ soportan imágenes.

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
