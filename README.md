# Arena de IAs

Compará en paralelo las respuestas de un modelo gratuito de **OpenRouter** y uno de **NVIDIA NIM** para el mismo prompt, o usá un solo modelo. Frontend estático + una función serverless de Vercel que oculta las API keys.

## Funcionalidad

- **Arena (2 IAs)**: compara OpenRouter vs NVIDIA NIM en paralelo (modo por defecto).
- **1 sola IA**: elegís un proveedor y un modelo, y solo se llama a ese.
- **Modo Agente** (⭐): habilitado únicamente cuando el/los modelo(s) activos son "top" (modelos grandes/flagship). No es solo un prompt: es un agente [ReAct](https://arxiv.org/abs/2210.03629) real con herramientas (ver sección abajo) que corre en `api/agent.js`, con hasta 4 pasos de herramientas antes de responder. La respuesta muestra un desplegable "Ver pasos del agente" con cada búsqueda/lectura que hizo.
- **Imágenes** (🖼️): el botón de adjuntar se habilita solo si el modelo activo soporta visión. La imagen se envía como `image_url` (base64) junto al texto.
- **Sistema de chats**: sidebar con múltiples conversaciones guardadas en `localStorage` (persisten entre recargas). Cada chat tiene memoria propia por proveedor (las últimas 20 respuestas se reenvían como contexto en cada mensaje nuevo). "Nuevo chat", cambiar entre chats y borrar chats desde la barra lateral; en mobile se abre como drawer con botón hamburguesa.

## Estructura

- `index.html` — estructura de la página
- `style.css` — estilos propios (además de Tailwind por CDN)
- `script.js` — lógica del chat (fetch al backend, render de respuestas, sidebar de chats)
- `api/chat.js` — función serverless de Vercel para un turno normal (sin herramientas)
- `api/agent.js` — función serverless para el Modo Agente: loop ReAct con herramientas
- `api/_provider.js` — llamada compartida a OpenRouter/NVIDIA NIM (usada por `chat.js` y `agent.js`)
- `api/_tools.js` — implementación de las herramientas del agente (`wiki_search`, `fetch_url`)
- `vercel.json` — le da 60s de `maxDuration` a `api/agent.js` (necesita varias vueltas de ida y vuelta al modelo)

## Cómo funciona el Modo Agente

Es un agente [ReAct](https://arxiv.org/abs/2210.03629) (razonar → actuar → observar → repetir), no una automatización de navegador tipo [browser-use/web-ui](https://github.com/browser-use/web-ui): esa clase de proyecto controla un Chromium real paso a paso con visión, lo cual necesita un navegador corriendo permanentemente y no entra en una función serverless gratuita con timeouts de 10-60s. En cambio, el modelo elige entre dos herramientas escribiendo un formato de texto fijo (`ACTION: ...` / `INPUT: ...`) que el backend interpreta y ejecuta:

- **`wiki_search`**: busca en la API oficial de Wikipedia (español, con fallback a inglés). Se usa Wikipedia en vez de scrapear un buscador como DuckDuckGo porque los buscadores bloquean el scraping desde IPs de datacenter (las de las funciones serverless de Vercel incluidas), mientras que la API de Wikipedia está pensada para consumo programático y no se corta.
- **`fetch_url`**: lee el contenido de una URL específica (por ejemplo, un resultado de `wiki_search`). Para artículos de Wikipedia usa su API de extractos en texto plano (mucho más limpia que el HTML); para cualquier otra URL hace un scraping genérico best-effort. Bloquea URLs que no sean `http(s)` o que apunten a IPs privadas/locales (protección básica contra SSRF).

El loop permite hasta 4 usos de herramientas por mensaje; al llegar al límite (o a ~45s transcurridos) se fuerza una respuesta final con lo que se haya reunido. Cada paso queda guardado junto al mensaje y se puede ver expandiendo "Ver pasos del agente" en la respuesta.

Como cada mensaje en modo agente puede disparar varias llamadas al modelo (una por paso), consume más cupo del límite gratuito por minuto que un mensaje normal — tenelo en cuenta si usás Arena con dos modelos top en modo agente al mismo tiempo.

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
