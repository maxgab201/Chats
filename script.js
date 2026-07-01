const MODEL_DATA = {
    openrouter: [
        { id: 'openrouter/free', label: 'Elegir mejor gratis automáticamente', vendor: 'Auto-Router', vision: false, top: false },
        { id: 'cohere/north-mini-code:free', label: 'North Mini Code', vendor: 'Cohere', vision: false, top: false },
        { id: 'google/gemma-4-26b-a4b-it:free', label: 'Gemma 4 26B A4B', vendor: 'Google', vision: true, top: false },
        { id: 'google/gemma-4-31b-it:free', label: 'Gemma 4 31B', vendor: 'Google', vision: true, top: false },
        { id: 'liquid/lfm-2.5-1.2b-instruct:free', label: 'LFM2.5-1.2B-Instruct', vendor: 'LiquidAI', vision: false, top: false },
        { id: 'liquid/lfm-2.5-1.2b-thinking:free', label: 'LFM2.5-1.2B-Thinking', vendor: 'LiquidAI', vision: false, top: false },
        { id: 'meta-llama/llama-3.2-3b-instruct:free', label: 'Llama 3.2 3B Instruct', vendor: 'Meta', vision: false, top: false },
        { id: 'meta-llama/llama-3.3-70b-instruct:free', label: 'Llama 3.3 70B Instruct', vendor: 'Meta', vision: false, top: true },
        { id: 'nvidia/nemotron-3-nano-30b-a3b:free', label: 'Nemotron 3 Nano 30B A3B', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free', label: 'Nemotron 3 Nano Omni', vendor: 'NVIDIA', vision: true, top: false },
        { id: 'nvidia/nemotron-3-super-120b-a12b:free', label: 'Nemotron 3 Super', vendor: 'NVIDIA', vision: false, top: true },
        { id: 'nvidia/nemotron-3-ultra-550b-a55b:free', label: 'Nemotron 3 Ultra', vendor: 'NVIDIA', vision: false, top: true },
        { id: 'nvidia/nemotron-nano-12b-v2-vl:free', label: 'Nemotron Nano 12B 2 VL', vendor: 'NVIDIA', vision: true, top: false },
        { id: 'nvidia/nemotron-nano-9b-v2:free', label: 'Nemotron Nano 9B V2', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nousresearch/hermes-3-llama-3.1-405b:free', label: 'Hermes 3 405B Instruct', vendor: 'Nous', vision: false, top: true },
        { id: 'openai/gpt-oss-120b:free', label: 'gpt-oss-120b', vendor: 'OpenAI', vision: false, top: true },
        { id: 'openai/gpt-oss-20b:free', label: 'gpt-oss-20b', vendor: 'OpenAI', vision: false, top: false },
        { id: 'poolside/laguna-m.1:free', label: 'Laguna M.1', vendor: 'Poolside', vision: false, top: true },
        { id: 'poolside/laguna-xs.2:free', label: 'Laguna XS.2', vendor: 'Poolside', vision: false, top: false },
        { id: 'qwen/qwen3-coder:free', label: 'Qwen3 Coder 480B A35B', vendor: 'Qwen', vision: false, top: true },
        { id: 'qwen/qwen3-next-80b-a3b-instruct:free', label: 'Qwen3 Next 80B A3B Instruct', vendor: 'Qwen', vision: false, top: false },
        { id: 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free', label: 'Uncensored', vendor: 'Venice', vision: false, top: false }
    ],
    nvidia: [
        { id: '01-ai/yi-large', label: 'Yi Large', vendor: '01.AI', vision: false, top: false },
        { id: 'aisingapore/sea-lion-7b-instruct', label: 'Sea Lion 7B Instruct', vendor: 'AI Singapore', vision: false, top: false },
        { id: 'ai21labs/jamba-1.5-large-instruct', label: 'Jamba 1.5 Large Instruct', vendor: 'AI21 Labs', vision: false, top: false },
        { id: 'abacusai/dracarys-llama-3.1-70b-instruct', label: 'Dracarys Llama 3.1 70B Instruct', vendor: 'Abacus.AI', vision: false, top: false },
        { id: 'adept/fuyu-8b', label: 'Fuyu 8B', vendor: 'Adept', vision: true, top: false },
        { id: 'bytedance/seed-oss-36b-instruct', label: 'Seed OSS 36B Instruct', vendor: 'ByteDance', vision: false, top: false },
        { id: 'databricks/dbrx-instruct', label: 'DBRX Instruct', vendor: 'Databricks', vision: false, top: false },
        { id: 'deepseek-ai/deepseek-coder-6.7b-instruct', label: 'Deepseek Coder 6.7B Instruct', vendor: 'DeepSeek', vision: false, top: false },
        { id: 'deepseek-ai/deepseek-v4-flash', label: 'Deepseek V4 Flash', vendor: 'DeepSeek', vision: false, top: false },
        { id: 'deepseek-ai/deepseek-v4-pro', label: 'Deepseek V4 Pro', vendor: 'DeepSeek', vision: false, top: true },
        { id: 'google/codegemma-1.1-7b', label: 'Codegemma 1.1 7B', vendor: 'Google', vision: false, top: false },
        { id: 'google/codegemma-7b', label: 'Codegemma 7B', vendor: 'Google', vision: false, top: false },
        { id: 'google/gemma-2-2b-it', label: 'Gemma 2 2B IT', vendor: 'Google', vision: false, top: false },
        { id: 'google/gemma-3-12b-it', label: 'Gemma 3 12B IT', vendor: 'Google', vision: false, top: false },
        { id: 'google/gemma-3-4b-it', label: 'Gemma 3 4B IT', vendor: 'Google', vision: false, top: false },
        { id: 'google/gemma-3n-e2b-it', label: 'Gemma 3n E2b IT', vendor: 'Google', vision: false, top: false },
        { id: 'google/gemma-3n-e4b-it', label: 'Gemma 3n E4b IT', vendor: 'Google', vision: false, top: false },
        { id: 'google/gemma-4-31b-it', label: 'Gemma 4 31B IT', vendor: 'Google', vision: false, top: false },
        { id: 'ibm/granite-3.0-3b-a800m-instruct', label: 'Granite 3.0 3B A800M Instruct', vendor: 'IBM', vision: false, top: false },
        { id: 'ibm/granite-3.0-8b-instruct', label: 'Granite 3.0 8B Instruct', vendor: 'IBM', vision: false, top: false },
        { id: 'ibm/granite-34b-code-instruct', label: 'Granite 34B Code Instruct', vendor: 'IBM', vision: false, top: false },
        { id: 'ibm/granite-8b-code-instruct', label: 'Granite 8B Code Instruct', vendor: 'IBM', vision: false, top: false },
        { id: 'meta/llama-3.1-70b-instruct', label: 'Llama 3.1 70B Instruct', vendor: 'Meta', vision: false, top: false },
        { id: 'meta/llama-3.1-8b-instruct', label: 'Llama 3.1 8B Instruct', vendor: 'Meta', vision: false, top: false },
        { id: 'meta/llama-3.2-11b-vision-instruct', label: 'Llama 3.2 11B Vision Instruct', vendor: 'Meta', vision: true, top: false },
        { id: 'meta/llama-3.2-1b-instruct', label: 'Llama 3.2 1B Instruct', vendor: 'Meta', vision: false, top: false },
        { id: 'meta/llama-3.2-3b-instruct', label: 'Llama 3.2 3B Instruct', vendor: 'Meta', vision: false, top: false },
        { id: 'meta/llama-3.2-90b-vision-instruct', label: 'Llama 3.2 90B Vision Instruct', vendor: 'Meta', vision: true, top: false },
        { id: 'meta/llama-3.3-70b-instruct', label: 'Llama 3.3 70B Instruct', vendor: 'Meta', vision: false, top: true },
        { id: 'meta/llama-4-maverick-17b-128e-instruct', label: 'Llama 4 Maverick 17B 128e Instruct', vendor: 'Meta', vision: false, top: true },
        { id: 'microsoft/phi-3-vision-128k-instruct', label: 'Phi 3 Vision 128K Instruct', vendor: 'Microsoft', vision: true, top: false },
        { id: 'microsoft/phi-3.5-moe-instruct', label: 'Phi 3.5 MoE Instruct', vendor: 'Microsoft', vision: false, top: false },
        { id: 'microsoft/phi-4-mini-instruct', label: 'Phi 4 Mini Instruct', vendor: 'Microsoft', vision: false, top: false },
        { id: 'microsoft/phi-4-multimodal-instruct', label: 'Phi 4 Multimodal Instruct', vendor: 'Microsoft', vision: true, top: false },
        { id: 'minimaxai/minimax-m2.7', label: 'Minimax M2.7', vendor: 'MiniMax', vision: false, top: false },
        { id: 'minimaxai/minimax-m3', label: 'Minimax M3', vendor: 'MiniMax', vision: false, top: true },
        { id: 'mistralai/codestral-22b-instruct-v0.1', label: 'Codestral 22B Instruct V0.1', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/ministral-14b-instruct-2512', label: 'Ministral 14B Instruct 2512', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mistral-7b-instruct-v0.3', label: 'Mistral 7B Instruct V0.3', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mistral-large', label: 'Mistral Large', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mistral-large-2-instruct', label: 'Mistral Large 2 Instruct', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mistral-large-3-675b-instruct-2512', label: 'Mistral Large 3 675B Instruct 2512', vendor: 'Mistral AI', vision: false, top: true },
        { id: 'mistralai/mistral-medium-3.5-128b', label: 'Mistral Medium 3.5 128B', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mistral-nemotron', label: 'Mistral Nemotron', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mistral-small-4-119b-2603', label: 'Mistral Small 4 119B 2603', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'mistralai/mixtral-8x7b-instruct-v0.1', label: 'Mixtral 8x7b Instruct V0.1', vendor: 'Mistral AI', vision: false, top: false },
        { id: 'moonshotai/kimi-k2.6', label: 'Kimi K2.6', vendor: 'Moonshot AI', vision: false, top: true },
        { id: 'nvidia/cosmos-reason2-8b', label: 'Cosmos Reason2 8B', vendor: 'NVIDIA', vision: true, top: false },
        { id: 'nvidia/llama-3.1-nemotron-51b-instruct', label: 'Llama 3.1 Nemotron 51B Instruct', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/llama-3.1-nemotron-70b-instruct', label: 'Llama 3.1 Nemotron 70B Instruct', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/llama-3.1-nemotron-nano-8b-v1', label: 'Llama 3.1 Nemotron Nano 8B V1', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/llama-3.1-nemotron-nano-vl-8b-v1', label: 'Llama 3.1 Nemotron Nano VL 8B V1', vendor: 'NVIDIA', vision: true, top: false },
        { id: 'nvidia/llama-3.1-nemotron-ultra-253b-v1', label: 'Llama 3.1 Nemotron Ultra 253B V1', vendor: 'NVIDIA', vision: false, top: true },
        { id: 'nvidia/llama-3.3-nemotron-super-49b-v1', label: 'Llama 3.3 Nemotron Super 49B V1', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/llama-3.3-nemotron-super-49b-v1.5', label: 'Llama 3.3 Nemotron Super 49B V1.5', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/llama3-chatqa-1.5-70b', label: 'Llama3 ChatQA 1.5 70B', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/mistral-nemo-minitron-8b-8k-instruct', label: 'Mistral Nemo Minitron 8B 8K Instruct', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nvidia-nemotron-nano-9b-v2', label: 'NVIDIA Nemotron Nano 9B V2', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-3-nano-30b-a3b', label: 'Nemotron 3 Nano 30B A3B', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning', label: 'Nemotron 3 Nano Omni 30B A3B Reasoning', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-3-super-120b-a12b', label: 'Nemotron 3 Super 120B A12B', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-3-ultra-550b-a55b', label: 'Nemotron 3 Ultra 550B A55B', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-4-340b-instruct', label: 'Nemotron 4 340B Instruct', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-mini-4b-instruct', label: 'Nemotron Mini 4B Instruct', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-nano-12b-v2-vl', label: 'Nemotron Nano 12B V2 VL', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/nemotron-nano-3-30b-a3b', label: 'Nemotron Nano 3 30B A3B', vendor: 'NVIDIA', vision: false, top: false },
        { id: 'nvidia/neva-22b', label: 'Neva 22B', vendor: 'NVIDIA', vision: true, top: false },
        { id: 'nvidia/vila', label: 'Vila', vendor: 'NVIDIA', vision: true, top: false },
        { id: 'nv-mistralai/mistral-nemo-12b-instruct', label: 'Mistral Nemo 12B Instruct', vendor: 'NVIDIA + Mistral', vision: false, top: false },
        { id: 'openai/gpt-oss-120b', label: 'GPT OSS 120B', vendor: 'OpenAI', vision: false, top: false },
        { id: 'openai/gpt-oss-20b', label: 'GPT OSS 20B', vendor: 'OpenAI', vision: false, top: false },
        { id: 'qwen/qwen3-next-80b-a3b-instruct', label: 'Qwen3 Next 80B A3B Instruct', vendor: 'Qwen', vision: false, top: false },
        { id: 'qwen/qwen3.5-122b-a10b', label: 'Qwen3.5 122B A10B', vendor: 'Qwen', vision: false, top: false },
        { id: 'qwen/qwen3.5-397b-a17b', label: 'Qwen3.5 397B A17B', vendor: 'Qwen', vision: false, top: true },
        { id: 'sarvamai/sarvam-m', label: 'Sarvam M', vendor: 'Sarvam AI', vision: false, top: false },
        { id: 'stepfun-ai/step-3.5-flash', label: 'Step 3.5 Flash', vendor: 'StepFun', vision: false, top: false },
        { id: 'stepfun-ai/step-3.7-flash', label: 'Step 3.7 Flash', vendor: 'StepFun', vision: false, top: false },
        { id: 'stockmark/stockmark-2-100b-instruct', label: 'Stockmark 2 100B Instruct', vendor: 'Stockmark', vision: false, top: false },
        { id: 'upstage/solar-10.7b-instruct', label: 'Solar 10.7B Instruct', vendor: 'Upstage', vision: false, top: false },
        { id: 'writer/palmyra-creative-122b', label: 'Palmyra Creative 122B', vendor: 'Writer', vision: false, top: false },
        { id: 'writer/palmyra-fin-70b-32k', label: 'Palmyra Fin 70B 32K', vendor: 'Writer', vision: false, top: false },
        { id: 'writer/palmyra-med-70b', label: 'Palmyra Med 70B', vendor: 'Writer', vision: false, top: false },
        { id: 'writer/palmyra-med-70b-32k', label: 'Palmyra Med 70B 32K', vendor: 'Writer', vision: false, top: false },
        { id: 'z-ai/glm-5.1', label: 'Glm 5.1', vendor: 'Z.AI', vision: false, top: true },
        { id: 'zyphra/zamba2-7b-instruct', label: 'Zamba2 7B Instruct', vendor: 'Zyphra', vision: false, top: false }
    ]
};

const AGENT_SYSTEM_PROMPT = 'Actuás como un agente autónomo experto. Antes de responder: (1) planificá internamente los pasos necesarios, (2) resolvé el problema de forma metódica, verificando cada paso, (3) si la tarea se puede descomponer en sub-tareas, resolvelas en orden. Presentá al final una respuesta clara, directa y verificada, mostrando el razonamiento clave sin ser repetitivo.';

function createModelPicker({ containerId, buttonId, labelId, models, defaultId, onChange }) {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);
    const labelEl = document.getElementById(labelId);

    const state = { model: null };

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
                const active = m.id === state.model.id ? ' is-active' : '';
                const badges = [m.top ? '⭐' : '', m.vision ? '🖼️' : ''].filter(Boolean).join(' ');
                html += `<button type="button" class="model-picker-option${active}" data-id="${escapeHTML(m.id)}">${escapeHTML(m.label)} ${badges}</button>`;
            }
        }
        optionsEl.innerHTML = html;
    }

    function select(model, silent) {
        state.model = model;
        labelEl.textContent = model.label;
        if (!silent && typeof onChange === 'function') onChange(model);
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
        const model = models.find(m => m.id === btn.dataset.id);
        select(model);
        close();
    });

    document.addEventListener('click', (e) => {
        if (!container.contains(e.target)) close();
    });

    select(models.find(m => m.id === defaultId) || models[0], true);

    return {
        getModel: () => state.model
    };
}

// ---------- Estado global de la app ----------
const appState = {
    mode: 'arena',          // 'arena' | 'single'
    singleProvider: 'openrouter',
    agentMode: false,
    image: null             // { dataUrl, name }
};

const orPicker = createModelPicker({
    containerId: 'or-picker',
    buttonId: 'or-picker-btn',
    labelId: 'or-picker-label',
    models: MODEL_DATA.openrouter,
    defaultId: 'openrouter/free',
    onChange: refreshToggles
});

const nvPicker = createModelPicker({
    containerId: 'nv-picker',
    buttonId: 'nv-picker-btn',
    labelId: 'nv-picker-label',
    models: MODEL_DATA.nvidia,
    defaultId: 'meta/llama-3.1-8b-instruct',
    onChange: refreshToggles
});

function activeSelections() {
    if (appState.mode === 'single') {
        const model = appState.singleProvider === 'openrouter' ? orPicker.getModel() : nvPicker.getModel();
        return [{ provider: appState.singleProvider, model }];
    }
    return [
        { provider: 'openrouter', model: orPicker.getModel() },
        { provider: 'nvidia', model: nvPicker.getModel() }
    ];
}

function refreshToggles() {
    const selections = activeSelections();

    const allTop = selections.every(s => s.model.top);
    const agentCheckbox = document.getElementById('agent-mode-checkbox');
    const agentHint = document.getElementById('agent-mode-hint');
    agentCheckbox.disabled = !allTop;
    if (!allTop) {
        agentCheckbox.checked = false;
        appState.agentMode = false;
        agentHint.textContent = '(elegí un modelo top)';
        agentHint.classList.remove('hidden');
    } else {
        agentHint.classList.add('hidden');
    }

    const allVision = selections.every(s => s.model.vision);
    const attachBtn = document.getElementById('attach-btn');
    attachBtn.disabled = !allVision;
    attachBtn.title = allVision
        ? 'Adjuntar imagen'
        : 'Adjuntar imagen (requiere un modelo con visión 🖼️)';
    if (!allVision && appState.image) {
        clearAttachedImage();
    }
}

// ---------- Toggle de modo (Arena vs 1 sola IA) ----------
const modeArenaBtn = document.getElementById('mode-arena-btn');
const modeSingleBtn = document.getElementById('mode-single-btn');
const singleProviderToggle = document.getElementById('single-provider-toggle');
const singleProviderOrBtn = document.getElementById('single-provider-or-btn');
const singleProviderNvBtn = document.getElementById('single-provider-nv-btn');
const orPickerEl = document.getElementById('or-picker');
const nvPickerEl = document.getElementById('nv-picker');

function applyModeUI() {
    const isSingle = appState.mode === 'single';
    modeArenaBtn.classList.toggle('is-active', !isSingle);
    modeSingleBtn.classList.toggle('is-active', isSingle);
    singleProviderToggle.classList.toggle('hidden', !isSingle);

    if (isSingle) {
        orPickerEl.classList.toggle('hidden', appState.singleProvider !== 'openrouter');
        nvPickerEl.classList.toggle('hidden', appState.singleProvider !== 'nvidia');
        singleProviderOrBtn.classList.toggle('is-active', appState.singleProvider === 'openrouter');
        singleProviderNvBtn.classList.toggle('is-active', appState.singleProvider === 'nvidia');
    } else {
        orPickerEl.classList.remove('hidden');
        nvPickerEl.classList.remove('hidden');
    }
    refreshToggles();
}

modeArenaBtn.addEventListener('click', () => { appState.mode = 'arena'; applyModeUI(); });
modeSingleBtn.addEventListener('click', () => { appState.mode = 'single'; applyModeUI(); });
singleProviderOrBtn.addEventListener('click', () => { appState.singleProvider = 'openrouter'; applyModeUI(); });
singleProviderNvBtn.addEventListener('click', () => { appState.singleProvider = 'nvidia'; applyModeUI(); });

document.getElementById('agent-mode-checkbox').addEventListener('change', (e) => {
    appState.agentMode = e.target.checked;
});

applyModeUI();

// ---------- Adjuntar imagen ----------
const attachBtn = document.getElementById('attach-btn');
const attachInput = document.getElementById('attach-input');
const imagePreviewRow = document.getElementById('image-preview-row');
const imagePreviewThumb = document.getElementById('image-preview-thumb');

attachBtn.addEventListener('click', () => attachInput.click());

attachInput.addEventListener('change', () => {
    const file = attachInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        appState.image = { dataUrl: reader.result, name: file.name };
        imagePreviewThumb.src = reader.result;
        imagePreviewRow.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
});

document.getElementById('image-preview-remove').addEventListener('click', clearAttachedImage);

function clearAttachedImage() {
    appState.image = null;
    attachInput.value = '';
    imagePreviewRow.classList.add('hidden');
}

// ---------- Sistema de chats (persistencia en localStorage + memoria por conversación) ----------
const CHATS_STORAGE_KEY = 'arena-ia-chats-v1';
const ACTIVE_CHAT_STORAGE_KEY = 'arena-ia-active-chat-v1';
const MAX_HISTORY_MESSAGES = 20;

const chatsState = {
    chats: [],
    activeChatId: null
};

function loadChatsFromStorage() {
    try {
        const raw = localStorage.getItem(CHATS_STORAGE_KEY);
        const chats = raw ? JSON.parse(raw) : [];
        return Array.isArray(chats) ? chats : [];
    } catch {
        return [];
    }
}

function persistChats() {
    try {
        localStorage.setItem(CHATS_STORAGE_KEY, JSON.stringify(chatsState.chats));
        localStorage.setItem(ACTIVE_CHAT_STORAGE_KEY, chatsState.activeChatId || '');
    } catch {
        // localStorage puede fallar en modo privado; no es crítico para el uso de la sesión actual
    }
}

function makeChat() {
    return {
        id: `chat-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title: 'Nuevo chat',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        entries: [],
        history: { openrouter: [], nvidia: [] }
    };
}

function getActiveChat() {
    return chatsState.chats.find(c => c.id === chatsState.activeChatId) || null;
}

function createNewChat() {
    const chat = makeChat();
    chatsState.chats.unshift(chat);
    chatsState.activeChatId = chat.id;
    persistChats();
    renderSidebar();
    renderActiveChat();
    closeSidebarOnMobile();
}

function switchToChat(id) {
    if (id === chatsState.activeChatId) return;
    chatsState.activeChatId = id;
    persistChats();
    renderSidebar();
    renderActiveChat();
    closeSidebarOnMobile();
}

function deleteChat(id) {
    if (!confirm('¿Borrar este chat?')) return;
    const wasActive = id === chatsState.activeChatId;
    chatsState.chats = chatsState.chats.filter(c => c.id !== id);
    if (wasActive) {
        if (chatsState.chats.length > 0) {
            chatsState.activeChatId = chatsState.chats[0].id;
        } else {
            const chat = makeChat();
            chatsState.chats.push(chat);
            chatsState.activeChatId = chat.id;
        }
    }
    persistChats();
    renderSidebar();
    renderActiveChat();
}

function renderSidebar() {
    const listEl = document.getElementById('chat-list');
    const sorted = [...chatsState.chats].sort((a, b) => b.updatedAt - a.updatedAt);
    listEl.innerHTML = sorted.map(chat => `
        <div class="chat-list-item${chat.id === chatsState.activeChatId ? ' is-active' : ''}" data-id="${chat.id}">
            <i class="ph ph-chat-circle-text shrink-0"></i>
            <span class="chat-list-title">${escapeHTML(chat.title)}</span>
            <button type="button" class="chat-list-delete" data-id="${chat.id}" title="Borrar chat">
                <i class="ph ph-trash"></i>
            </button>
        </div>
    `).join('');
}

document.getElementById('chat-list').addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.chat-list-delete');
    if (deleteBtn) {
        e.stopPropagation();
        deleteChat(deleteBtn.dataset.id);
        return;
    }
    const item = e.target.closest('.chat-list-item');
    if (item) switchToChat(item.dataset.id);
});

document.getElementById('new-chat-btn').addEventListener('click', createNewChat);

// ---------- Sidebar móvil (drawer) ----------
const chatSidebarEl = document.getElementById('chat-sidebar');
const sidebarOverlayEl = document.getElementById('sidebar-overlay');

function openSidebar() {
    chatSidebarEl.classList.add('is-open');
    sidebarOverlayEl.classList.remove('hidden');
}

function closeSidebar() {
    chatSidebarEl.classList.remove('is-open');
    sidebarOverlayEl.classList.add('hidden');
}

function closeSidebarOnMobile() {
    if (window.innerWidth < 768) closeSidebar();
}

document.getElementById('sidebar-open-btn').addEventListener('click', openSidebar);
document.getElementById('sidebar-close-btn').addEventListener('click', closeSidebar);
sidebarOverlayEl.addEventListener('click', closeSidebar);

// ---------- Render de mensajes ----------
function paneBodyHTML(pane) {
    if (pane.status === 'pending') return '<i class="ph ph-spinner-gap animate-spin"></i> Pensando...';
    if (pane.status === 'error') return `<span class="error-text"><i class="ph ph-warning-circle"></i> ${escapeHTML(pane.error)}</span>`;
    return marked.parse(pane.text || '');
}

function paneCardHTML(entryId, pane, agentBadgeHTML) {
    const isOpenRouter = pane.provider === 'openrouter';
    const providerLabel = isOpenRouter ? 'OpenRouter' : 'Nvidia NIM';
    const providerIcon = isOpenRouter ? 'ph-robot' : 'ph-cpu';
    const borderClass = isOpenRouter ? 'border-indigo-900/40' : 'border-green-900/40';
    const headerBorderClass = isOpenRouter ? 'border-indigo-900/30' : 'border-green-900/30';
    return `
        <div class="bg-gray-900 rounded-xl border ${borderClass} flex flex-col">
            <div class="bg-gray-950/50 border-b ${headerBorderClass} p-2 flex justify-between items-center gap-2">
                <span class="text-xs font-semibold flex items-center gap-1"><i class="ph ${providerIcon}"></i> ${providerLabel} ${agentBadgeHTML}</span>
                <span class="text-[10px] text-gray-400 px-2 bg-gray-800 rounded truncate">${escapeHTML(pane.modelLabel)}</span>
            </div>
            <div id="pane-${entryId}-${pane.provider}" class="p-4 text-sm prose text-gray-300">${paneBodyHTML(pane)}</div>
        </div>
    `;
}

function entryHTML(entry) {
    const imageHTML = entry.image ? `<img src="${entry.image}" class="attached-image-thumb" alt="Imagen adjunta">` : '';
    const agentBadgeHTML = entry.agent ? '<span class="agent-badge"><i class="ph ph-brain"></i> Agente</span>' : '';
    const panesHTML = entry.panes.map(p => paneCardHTML(entry.id, p, agentBadgeHTML)).join('');
    const gridClass = entry.panes.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4 max-w-2xl mx-auto w-full';

    return `
        <div id="entry-${entry.id}" class="space-y-4 mb-8 response-card">
            <div class="flex justify-end">
                <div class="bg-gray-800 px-5 py-3 rounded-2xl rounded-tr-sm max-w-[90%] md:max-w-2xl border border-gray-700 flex flex-col items-end gap-2">
                    <div class="flex items-start gap-3 w-full">
                        <div class="flex-1 text-sm md:text-base whitespace-pre-wrap">${escapeHTML(entry.text)}</div>
                        <i class="ph ph-user text-xl text-gray-400 mt-0.5"></i>
                    </div>
                    ${imageHTML}
                </div>
            </div>
            <div class="${gridClass}">${panesHTML}</div>
        </div>
    `;
}

function renderActiveChat() {
    const chat = getActiveChat();
    const chatHistoryEl = document.getElementById('chat-history');
    if (!chat || chat.entries.length === 0) {
        chatHistoryEl.innerHTML = `
            <div id="welcome-screen" class="flex flex-col items-center justify-center text-center mt-10 md:mt-20 text-gray-500 space-y-4">
                <div class="flex gap-4">
                    <i class="ph ph-robot text-5xl text-indigo-900"></i>
                    <i class="ph ph-cpu text-5xl text-green-900"></i>
                </div>
                <h2 class="text-xl font-bold text-gray-400">Arena Lista y Segura</h2>
                <p class="max-w-md text-xs md:text-sm px-4">
                    Tu app usa el backend serverless de Vercel: sin errores de CORS y con tus claves de API ocultas en las variables de entorno.
                    Probá el modo Agente con un modelo top, o subí una imagen a un modelo con visión.
                </p>
            </div>
        `;
        return;
    }
    chatHistoryEl.innerHTML = chat.entries.map(entryHTML).join('');
    scrollToBottom(true);

    // Reengancha el scroll cuando terminan de cargar imágenes adjuntas (cambian la altura del contenido)
    chatHistoryEl.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', () => scrollToBottom(true), { once: true });
    });
}

// ---------- Chat ----------
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

function buildContent(text, model) {
    if (appState.image && model.vision) {
        return [
            { type: 'text', text },
            { type: 'image_url', image_url: { url: appState.image.dataUrl } }
        ];
    }
    return text;
}

async function handleSend(e) {
    e.preventDefault();
    const text = promptInput.value.trim();
    if (!text) return;

    const chat = getActiveChat();
    const selections = activeSelections();
    const usingImage = Boolean(appState.image);
    const usingAgent = appState.agentMode;
    const attachedImage = appState.image ? appState.image.dataUrl : null;

    promptInput.value = '';

    if (chat.entries.length === 0) {
        chat.title = text.length > 40 ? `${text.slice(0, 40)}…` : text;
    }

    const entry = {
        id: Date.now().toString(),
        text,
        image: attachedImage,
        agent: usingAgent,
        panes: selections.map(sel => ({
            provider: sel.provider,
            modelLabel: sel.model.label,
            status: 'pending'
        }))
    };

    chat.entries.push(entry);
    chat.updatedAt = Date.now();
    persistChats();
    renderSidebar();

    document.getElementById('welcome-screen')?.remove();
    document.getElementById('chat-history').insertAdjacentHTML('beforeend', entryHTML(entry));
    scrollToBottom();

    const imgEl = document.querySelector(`#entry-${entry.id} img.attached-image-thumb`);
    if (imgEl) imgEl.addEventListener('load', () => scrollToBottom(true), { once: true });

    sendBtn.disabled = true;
    await Promise.allSettled(selections.map(sel =>
        callBackend({ text, provider: sel.provider, model: sel.model, agent: usingAgent, chat, entry })
    ));
    sendBtn.disabled = false;
    clearAttachedImage();
}

async function callBackend({ text, provider, model, agent, chat, entry }) {
    const pane = entry.panes.find(p => p.provider === provider);
    const responseDiv = document.getElementById(`pane-${entry.id}-${provider}`);
    const content = buildContent(text, model);

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                provider,
                model: model.id,
                content,
                system: agent ? AGENT_SYSTEM_PROMPT : undefined,
                history: (chat.history[provider] || []).slice(-MAX_HISTORY_MESSAGES)
            })
        });

        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
            const rawText = await res.text();
            throw new Error(`El servidor no devolvió JSON (status ${res.status}). ${rawText.slice(0, 120)}`);
        }

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Error desconocido del backend');

        pane.status = 'done';
        pane.text = data.text;
        responseDiv.innerHTML = marked.parse(data.text);

        chat.history[provider] = chat.history[provider] || [];
        chat.history[provider].push({ role: 'user', content });
        chat.history[provider].push({ role: 'assistant', content: data.text });
    } catch (error) {
        pane.status = 'error';
        pane.error = error.message;
        responseDiv.innerHTML = `<span class="error-text"><i class="ph ph-warning-circle"></i> ${escapeHTML(error.message)}</span>`;
    }
    chat.updatedAt = Date.now();
    persistChats();
    scrollToBottom();
}

function scrollToBottom(instant) {
    const container = document.getElementById('chat-container');
    requestAnimationFrame(() => {
        if (instant) {
            container.scrollTop = container.scrollHeight;
        } else {
            container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
        }
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, t => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[t]));
}

// ---------- Arranque ----------
chatsState.chats = loadChatsFromStorage();
const savedActiveId = localStorage.getItem(ACTIVE_CHAT_STORAGE_KEY);
if (chatsState.chats.length === 0) {
    chatsState.chats.push(makeChat());
}
chatsState.activeChatId = chatsState.chats.some(c => c.id === savedActiveId)
    ? savedActiveId
    : chatsState.chats[0].id;

renderSidebar();
renderActiveChat();
