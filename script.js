const MODEL_DATA = {
    openrouter: [
        { id: 'openrouter/free', label: 'Elegir mejor gratis automáticamente', vendor: 'Auto-Router' },
        { id: 'cohere/north-mini-code:free', label: 'North Mini Code', vendor: 'Cohere' },
        { id: 'google/gemma-4-26b-a4b-it:free', label: 'Gemma 4 26B A4B', vendor: 'Google' },
        { id: 'google/gemma-4-31b-it:free', label: 'Gemma 4 31B', vendor: 'Google' },
        { id: 'liquid/lfm-2.5-1.2b-instruct:free', label: 'LFM2.5-1.2B-Instruct', vendor: 'LiquidAI' },
        { id: 'liquid/lfm-2.5-1.2b-thinking:free', label: 'LFM2.5-1.2B-Thinking', vendor: 'LiquidAI' },
        { id: 'meta-llama/llama-3.2-3b-instruct:free', label: 'Llama 3.2 3B Instruct', vendor: 'Meta' },
        { id: 'meta-llama/llama-3.3-70b-instruct:free', label: 'Llama 3.3 70B Instruct', vendor: 'Meta' },
        { id: 'nvidia/nemotron-3-nano-30b-a3b:free', label: 'Nemotron 3 Nano 30B A3B', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free', label: 'Nemotron 3 Nano Omni', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-super-120b-a12b:free', label: 'Nemotron 3 Super', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-ultra-550b-a55b:free', label: 'Nemotron 3 Ultra', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3.5-content-safety:free', label: 'Nemotron 3.5 Content Safety', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-nano-12b-v2-vl:free', label: 'Nemotron Nano 12B 2 VL', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-nano-9b-v2:free', label: 'Nemotron Nano 9B V2', vendor: 'NVIDIA' },
        { id: 'nousresearch/hermes-3-llama-3.1-405b:free', label: 'Hermes 3 405B Instruct', vendor: 'Nous' },
        { id: 'openai/gpt-oss-120b:free', label: 'gpt-oss-120b', vendor: 'OpenAI' },
        { id: 'openai/gpt-oss-20b:free', label: 'gpt-oss-20b', vendor: 'OpenAI' },
        { id: 'poolside/laguna-m.1:free', label: 'Laguna M.1', vendor: 'Poolside' },
        { id: 'poolside/laguna-xs.2:free', label: 'Laguna XS.2', vendor: 'Poolside' },
        { id: 'qwen/qwen3-coder:free', label: 'Qwen3 Coder 480B A35B', vendor: 'Qwen' },
        { id: 'qwen/qwen3-next-80b-a3b-instruct:free', label: 'Qwen3 Next 80B A3B Instruct', vendor: 'Qwen' },
        { id: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free', label: 'Uncensored', vendor: 'Venice' }
    ],
    nvidia: [
        { id: '01-ai/yi-large', label: 'Yi Large', vendor: '01.AI' },
        { id: 'aisingapore/sea-lion-7b-instruct', label: 'Sea Lion 7B Instruct', vendor: 'AI Singapore' },
        { id: 'ai21labs/jamba-1.5-large-instruct', label: 'Jamba 1.5 Large Instruct', vendor: 'AI21 Labs' },
        { id: 'abacusai/dracarys-llama-3.1-70b-instruct', label: 'Dracarys Llama 3.1 70B Instruct', vendor: 'Abacus.AI' },
        { id: 'adept/fuyu-8b', label: 'Fuyu 8B', vendor: 'Adept' },
        { id: 'bigcode/starcoder2-15b', label: 'Starcoder2 15B', vendor: 'BigCode' },
        { id: 'bytedance/seed-oss-36b-instruct', label: 'Seed OSS 36B Instruct', vendor: 'ByteDance' },
        { id: 'databricks/dbrx-instruct', label: 'DBRX Instruct', vendor: 'Databricks' },
        { id: 'deepseek-ai/deepseek-coder-6.7b-instruct', label: 'Deepseek Coder 6.7B Instruct', vendor: 'DeepSeek' },
        { id: 'deepseek-ai/deepseek-v4-flash', label: 'Deepseek V4 Flash', vendor: 'DeepSeek' },
        { id: 'deepseek-ai/deepseek-v4-pro', label: 'Deepseek V4 Pro', vendor: 'DeepSeek' },
        { id: 'google/codegemma-1.1-7b', label: 'Codegemma 1.1 7B', vendor: 'Google' },
        { id: 'google/codegemma-7b', label: 'Codegemma 7B', vendor: 'Google' },
        { id: 'google/diffusiongemma-26b-a4b-it', label: 'Diffusiongemma 26B A4B IT', vendor: 'Google' },
        { id: 'google/gemma-2-2b-it', label: 'Gemma 2 2B IT', vendor: 'Google' },
        { id: 'google/gemma-2b', label: 'Gemma 2B', vendor: 'Google' },
        { id: 'google/gemma-3-12b-it', label: 'Gemma 3 12B IT', vendor: 'Google' },
        { id: 'google/gemma-3-4b-it', label: 'Gemma 3 4B IT', vendor: 'Google' },
        { id: 'google/gemma-3n-e2b-it', label: 'Gemma 3n E2b IT', vendor: 'Google' },
        { id: 'google/gemma-3n-e4b-it', label: 'Gemma 3n E4b IT', vendor: 'Google' },
        { id: 'google/gemma-4-31b-it', label: 'Gemma 4 31B IT', vendor: 'Google' },
        { id: 'google/recurrentgemma-2b', label: 'Recurrentgemma 2B', vendor: 'Google' },
        { id: 'ibm/granite-3.0-3b-a800m-instruct', label: 'Granite 3.0 3B A800M Instruct', vendor: 'IBM' },
        { id: 'ibm/granite-3.0-8b-instruct', label: 'Granite 3.0 8B Instruct', vendor: 'IBM' },
        { id: 'ibm/granite-34b-code-instruct', label: 'Granite 34B Code Instruct', vendor: 'IBM' },
        { id: 'ibm/granite-8b-code-instruct', label: 'Granite 8B Code Instruct', vendor: 'IBM' },
        { id: 'meta/codellama-70b', label: 'Codellama 70B', vendor: 'Meta' },
        { id: 'meta/llama-3.1-70b-instruct', label: 'Llama 3.1 70B Instruct', vendor: 'Meta' },
        { id: 'meta/llama-3.1-8b-instruct', label: 'Llama 3.1 8B Instruct', vendor: 'Meta' },
        { id: 'meta/llama-3.2-11b-vision-instruct', label: 'Llama 3.2 11B Vision Instruct', vendor: 'Meta' },
        { id: 'meta/llama-3.2-1b-instruct', label: 'Llama 3.2 1B Instruct', vendor: 'Meta' },
        { id: 'meta/llama-3.2-3b-instruct', label: 'Llama 3.2 3B Instruct', vendor: 'Meta' },
        { id: 'meta/llama-3.2-90b-vision-instruct', label: 'Llama 3.2 90B Vision Instruct', vendor: 'Meta' },
        { id: 'meta/llama-3.3-70b-instruct', label: 'Llama 3.3 70B Instruct', vendor: 'Meta' },
        { id: 'meta/llama-4-maverick-17b-128e-instruct', label: 'Llama 4 Maverick 17B 128e Instruct', vendor: 'Meta' },
        { id: 'meta/llama-guard-4-12b', label: 'Llama Guard 4 12B', vendor: 'Meta' },
        { id: 'meta/llama2-70b', label: 'Llama2 70B', vendor: 'Meta' },
        { id: 'microsoft/phi-3-vision-128k-instruct', label: 'Phi 3 Vision 128K Instruct', vendor: 'Microsoft' },
        { id: 'microsoft/phi-3.5-moe-instruct', label: 'Phi 3.5 MoE Instruct', vendor: 'Microsoft' },
        { id: 'microsoft/phi-4-mini-instruct', label: 'Phi 4 Mini Instruct', vendor: 'Microsoft' },
        { id: 'microsoft/phi-4-multimodal-instruct', label: 'Phi 4 Multimodal Instruct', vendor: 'Microsoft' },
        { id: 'minimaxai/minimax-m2.7', label: 'Minimax M2.7', vendor: 'MiniMax' },
        { id: 'minimaxai/minimax-m3', label: 'Minimax M3', vendor: 'MiniMax' },
        { id: 'mistralai/codestral-22b-instruct-v0.1', label: 'Codestral 22B Instruct V0.1', vendor: 'Mistral AI' },
        { id: 'mistralai/ministral-14b-instruct-2512', label: 'Ministral 14B Instruct 2512', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-7b-instruct-v0.3', label: 'Mistral 7B Instruct V0.3', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-large', label: 'Mistral Large', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-large-2-instruct', label: 'Mistral Large 2 Instruct', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-large-3-675b-instruct-2512', label: 'Mistral Large 3 675B Instruct 2512', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-medium-3.5-128b', label: 'Mistral Medium 3.5 128B', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-nemotron', label: 'Mistral Nemotron', vendor: 'Mistral AI' },
        { id: 'mistralai/mistral-small-4-119b-2603', label: 'Mistral Small 4 119B 2603', vendor: 'Mistral AI' },
        { id: 'mistralai/mixtral-8x22b-v0.1', label: 'Mixtral 8x22b V0.1', vendor: 'Mistral AI' },
        { id: 'mistralai/mixtral-8x7b-instruct-v0.1', label: 'Mixtral 8x7b Instruct V0.1', vendor: 'Mistral AI' },
        { id: 'moonshotai/kimi-k2.6', label: 'Kimi K2.6', vendor: 'Moonshot AI' },
        { id: 'nvidia/cosmos-reason2-8b', label: 'Cosmos Reason2 8B', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemoguard-8b-content-safety', label: 'Llama 3.1 Nemoguard 8B Content Safety', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemoguard-8b-topic-control', label: 'Llama 3.1 Nemoguard 8B Topic Control', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemotron-51b-instruct', label: 'Llama 3.1 Nemotron 51B Instruct', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemotron-70b-instruct', label: 'Llama 3.1 Nemotron 70B Instruct', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemotron-nano-8b-v1', label: 'Llama 3.1 Nemotron Nano 8B V1', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemotron-nano-vl-8b-v1', label: 'Llama 3.1 Nemotron Nano VL 8B V1', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemotron-safety-guard-8b-v3', label: 'Llama 3.1 Nemotron Safety Guard 8B V3', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.1-nemotron-ultra-253b-v1', label: 'Llama 3.1 Nemotron Ultra 253B V1', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.3-nemotron-super-49b-v1', label: 'Llama 3.3 Nemotron Super 49B V1', vendor: 'NVIDIA' },
        { id: 'nvidia/llama-3.3-nemotron-super-49b-v1.5', label: 'Llama 3.3 Nemotron Super 49B V1.5', vendor: 'NVIDIA' },
        { id: 'nvidia/llama3-chatqa-1.5-70b', label: 'Llama3 ChatQA 1.5 70B', vendor: 'NVIDIA' },
        { id: 'nvidia/mistral-nemo-minitron-8b-8k-instruct', label: 'Mistral Nemo Minitron 8B 8K Instruct', vendor: 'NVIDIA' },
        { id: 'nvidia/nvidia-nemotron-nano-9b-v2', label: 'NVIDIA Nemotron Nano 9B V2', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-content-safety', label: 'Nemotron 3 Content Safety', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-nano-30b-a3b', label: 'Nemotron 3 Nano 30B A3B', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', label: 'Nemotron 3 Nano Omni 30B A3B Reasoning', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-super-120b-a12b', label: 'Nemotron 3 Super 120B A12B', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3-ultra-550b-a55b', label: 'Nemotron 3 Ultra 550B A55B', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-3.5-content-safety', label: 'Nemotron 3.5 Content Safety', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-4-340b-instruct', label: 'Nemotron 4 340B Instruct', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-content-safety-reasoning-4b', label: 'Nemotron Content Safety Reasoning 4B', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-mini-4b-instruct', label: 'Nemotron Mini 4B Instruct', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-nano-12b-v2-vl', label: 'Nemotron Nano 12B V2 VL', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-nano-3-30b-a3b', label: 'Nemotron Nano 3 30B A3B', vendor: 'NVIDIA' },
        { id: 'nvidia/nemotron-parse', label: 'Nemotron Parse', vendor: 'NVIDIA' },
        { id: 'nvidia/neva-22b', label: 'Neva 22B', vendor: 'NVIDIA' },
        { id: 'nvidia/vila', label: 'Vila', vendor: 'NVIDIA' },
        { id: 'nv-mistralai/mistral-nemo-12b-instruct', label: 'Mistral Nemo 12B Instruct', vendor: 'NVIDIA + Mistral' },
        { id: 'openai/gpt-oss-120b', label: 'GPT OSS 120B', vendor: 'OpenAI' },
        { id: 'openai/gpt-oss-20b', label: 'GPT OSS 20B', vendor: 'OpenAI' },
        { id: 'qwen/qwen3-next-80b-a3b-instruct', label: 'Qwen3 Next 80B A3B Instruct', vendor: 'Qwen' },
        { id: 'qwen/qwen3.5-122b-a10b', label: 'Qwen3.5 122B A10B', vendor: 'Qwen' },
        { id: 'qwen/qwen3.5-397b-a17b', label: 'Qwen3.5 397B A17B', vendor: 'Qwen' },
        { id: 'sarvamai/sarvam-m', label: 'Sarvam M', vendor: 'Sarvam AI' },
        { id: 'stepfun-ai/step-3.5-flash', label: 'Step 3.5 Flash', vendor: 'StepFun' },
        { id: 'stepfun-ai/step-3.7-flash', label: 'Step 3.7 Flash', vendor: 'StepFun' },
        { id: 'stockmark/stockmark-2-100b-instruct', label: 'Stockmark 2 100B Instruct', vendor: 'Stockmark' },
        { id: 'upstage/solar-10.7b-instruct', label: 'Solar 10.7B Instruct', vendor: 'Upstage' },
        { id: 'writer/palmyra-creative-122b', label: 'Palmyra Creative 122B', vendor: 'Writer' },
        { id: 'writer/palmyra-fin-70b-32k', label: 'Palmyra Fin 70B 32K', vendor: 'Writer' },
        { id: 'writer/palmyra-med-70b', label: 'Palmyra Med 70B', vendor: 'Writer' },
        { id: 'writer/palmyra-med-70b-32k', label: 'Palmyra Med 70B 32K', vendor: 'Writer' },
        { id: 'z-ai/glm-5.1', label: 'Glm 5.1', vendor: 'Z.AI' },
        { id: 'zyphra/zamba2-7b-instruct', label: 'Zamba2 7B Instruct', vendor: 'Zyphra' }
    ]
};

function createModelPicker({ containerId, buttonId, labelId, models, defaultId }) {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);
    const labelEl = document.getElementById(labelId);

    const state = { value: null, name: '' };

    const panel = document.createElement('div');
    panel.className = 'model-picker-panel hidden';
    panel.innerHTML = `
        <div class="model-picker-search-wrap">
            <input type="text" class="model-picker-search" placeholder="Buscar modelo...">
        </div>
        <div class="model-picker-options"></div>
    `;
    container.appendChild(panel);

    const searchInput = panel.querySelector('.model-picker-search');
    const optionsEl = panel.querySelector('.model-picker-options');

    function render(filter) {
        const q = (filter || '').trim().toLowerCase();
        const filtered = q
            ? models.filter(m => m.label.toLowerCase().includes(q) || m.vendor.toLowerCase().includes(q) || m.id.toLowerCase().includes(q))
            : models;

        if (filtered.length === 0) {
            optionsEl.innerHTML = '<div class="model-picker-empty">Sin resultados</div>';
            return;
        }

        const groups = new Map();
        filtered.forEach(m => {
            if (!groups.has(m.vendor)) groups.set(m.vendor, []);
            groups.get(m.vendor).push(m);
        });

        let html = '';
        for (const [vendor, items] of groups) {
            html += `<div class="model-picker-group-label">${escapeHTML(vendor)}</div>`;
            for (const m of items) {
                const active = m.id === state.value ? ' is-active' : '';
                html += `<button type="button" class="model-picker-option${active}" data-id="${escapeHTML(m.id)}" data-label="${escapeHTML(m.label)}">${escapeHTML(m.label)}</button>`;
            }
        }
        optionsEl.innerHTML = html;
    }

    function select(id, label) {
        state.value = id;
        state.name = label;
        labelEl.textContent = label;
    }

    function open() {
        panel.classList.remove('hidden');
        searchInput.value = '';
        render('');
        searchInput.focus();
    }

    function close() {
        panel.classList.add('hidden');
    }

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !panel.classList.contains('hidden');
        document.querySelectorAll('.model-picker-panel').forEach(p => p.classList.add('hidden'));
        if (!isOpen) open();
    });

    searchInput.addEventListener('input', () => render(searchInput.value));

    optionsEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.model-picker-option');
        if (!btn) return;
        select(btn.dataset.id, btn.dataset.label);
        close();
    });

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) close();
    });

    const initial = models.find(m => m.id === defaultId) || models[0];
    select(initial.id, initial.label);

    return {
        getValue: () => state.value,
        getName: () => state.name
    };
}

const orPicker = createModelPicker({
    containerId: 'or-picker',
    buttonId: 'or-picker-btn',
    labelId: 'or-picker-label',
    models: MODEL_DATA.openrouter,
    defaultId: 'openrouter/free'
});

const nvPicker = createModelPicker({
    containerId: 'nv-picker',
    buttonId: 'nv-picker-btn',
    labelId: 'nv-picker-label',
    models: MODEL_DATA.nvidia,
    defaultId: 'meta/llama-3.1-8b-instruct'
});

const chatForm = document.getElementById('chat-form');
const promptInput = document.getElementById('prompt-input');
const sendBtn = document.getElementById('send-btn');

chatForm.addEventListener('submit', handleSend);

promptInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSend(event);
    }
});

async function handleSend(e) {
    e.preventDefault();
    const text = promptInput.value.trim();
    if (!text) return;

    promptInput.value = '';
    document.getElementById('welcome-screen')?.remove();

    const entryId = Date.now().toString();
    const orModel = orPicker.getValue();
    const nvModel = nvPicker.getValue();
    const orModelName = orPicker.getName();
    const nvModelName = nvPicker.getName();

    const chatHistory = document.getElementById('chat-history');
    const messageHTML = `
        <div id="entry-${entryId}" class="space-y-4 mb-8 response-card">
            <div class="flex justify-end">
                <div class="bg-gray-800 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[90%] md:max-w-2xl border border-gray-700 flex items-start gap-3">
                    <div class="flex-1 text-sm md:text-base whitespace-pre-wrap">${escapeHTML(text)}</div>
                    <i class="ph ph-user text-xl text-gray-400 mt-0.5"></i>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gray-900 rounded-xl border border-indigo-900/40 flex flex-col">
                    <div class="bg-gray-950/50 border-b border-indigo-900/30 p-2 flex justify-between items-center">
                        <span class="text-xs text-indigo-300 font-semibold"><i class="ph ph-robot"></i> OpenRouter</span>
                        <span class="text-[10px] text-gray-400 px-2 bg-gray-800 rounded truncate">${escapeHTML(orModelName)}</span>
                    </div>
                    <div id="or-response-${entryId}" class="p-4 text-sm prose text-gray-300">
                        <i class="ph ph-spinner-gap animate-spin"></i> Pensando...
                    </div>
                </div>
                <div class="bg-gray-900 rounded-xl border border-green-900/40 flex flex-col">
                    <div class="bg-gray-950/50 border-b border-green-900/30 p-2 flex justify-between items-center">
                        <span class="text-xs text-green-300 font-semibold"><i class="ph ph-cpu"></i> Nvidia NIM</span>
                        <span class="text-[10px] text-gray-400 px-2 bg-gray-800 rounded truncate">${escapeHTML(nvModelName)}</span>
                    </div>
                    <div id="nv-response-${entryId}" class="p-4 text-sm prose text-gray-300">
                        <i class="ph ph-spinner-gap animate-spin"></i> Procesando...
                    </div>
                </div>
            </div>
        </div>
    `;

    chatHistory.insertAdjacentHTML('beforeend', messageHTML);
    scrollToBottom();

    sendBtn.disabled = true;
    await Promise.allSettled([
        callBackend(text, 'openrouter', orModel, `or-response-${entryId}`),
        callBackend(text, 'nvidia', nvModel, `nv-response-${entryId}`)
    ]);
    sendBtn.disabled = false;
}

async function callBackend(message, provider, model, elementId) {
    const responseDiv = document.getElementById(elementId);
    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, provider, model })
        });

        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            const rawText = await res.text();
            throw new Error(`El servidor no devolvió JSON (status ${res.status}). ${rawText.slice(0, 120)}`);
        }

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error desconocido del backend');

        responseDiv.innerHTML = marked.parse(data.text);
    } catch (error) {
        responseDiv.innerHTML = `<span class="error-text"><i class="ph ph-warning-circle"></i> ${escapeHTML(error.message)}</span>`;
    }
    scrollToBottom();
}

function scrollToBottom() {
    const container = document.getElementById('chat-container');
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t]));
}
