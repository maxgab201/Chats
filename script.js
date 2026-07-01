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
    const orModelSelect = document.getElementById('or-model');
    const nvModelSelect = document.getElementById('nv-model');
    const orModel = orModelSelect.value;
    const nvModel = nvModelSelect.value;
    const orModelName = orModelSelect.options[orModelSelect.selectedIndex].text;
    const nvModelName = nvModelSelect.options[nvModelSelect.selectedIndex].text;

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
