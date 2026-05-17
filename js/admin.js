(function () {
    const DATA_PATH = "js/data";
    const DEFAULT_FILES = ["books.json", "translations.json"];
    const state = {
        files: new Map(),
        currentFile: "",
        currentLanguage: "",
        folderHandle: null,
        rawMode: false,
        dirty: false
    };

    const el = {
        openFolderButton: document.getElementById("openFolderButton"),
        folderStatus: document.getElementById("folderStatus"),
        refreshButton: document.getElementById("refreshButton"),
        deleteLanguageButton: document.getElementById("deleteLanguageButton"),
        languageList: document.getElementById("languageList"),
        addLanguageForm: document.getElementById("addLanguageForm"),
        newLanguageInput: document.getElementById("newLanguageInput"),
        fileCount: document.getElementById("fileCount"),
        fileList: document.getElementById("fileList"),
        fileTitle: document.getElementById("fileTitle"),
        filePath: document.getElementById("filePath"),
        rawButton: document.getElementById("rawButton"),
        validateButton: document.getElementById("validateButton"),
        minifyFileButton: document.getElementById("minifyFileButton"),
        minifyAllButton: document.getElementById("minifyAllButton"),
        saveButton: document.getElementById("saveButton"),
        notice: document.getElementById("notice"),
        formEditor: document.getElementById("formEditor"),
        rawEditor: document.getElementById("rawEditor"),
        rawTextarea: document.getElementById("rawTextarea"),
        scopeTitle: document.getElementById("scopeTitle"),
        scopeMeta: document.getElementById("scopeMeta"),
        addFieldButton: document.getElementById("addFieldButton"),
        fieldList: document.getElementById("fieldList"),
        fieldDialog: document.getElementById("fieldDialog"),
        fieldForm: document.getElementById("fieldForm"),
        fieldPathInput: document.getElementById("fieldPathInput"),
        fieldValueInput: document.getElementById("fieldValueInput"),
        cancelFieldButton: document.getElementById("cancelFieldButton")
    };

    init();

    async function init() {
        wireEvents();
        await loadBundledFiles();
        selectFile("translations.json");
    }

    function wireEvents() {
        el.openFolderButton.addEventListener("click", openDataFolder);
        el.refreshButton.addEventListener("click", reloadFiles);
        el.deleteLanguageButton.addEventListener("click", deleteSelectedLanguage);
        el.addLanguageForm.addEventListener("submit", addLanguage);
        el.rawButton.addEventListener("click", toggleRawMode);
        el.validateButton.addEventListener("click", validateCurrentFile);
        el.minifyFileButton.addEventListener("click", () => minifyFile(state.currentFile, true));
        el.minifyAllButton.addEventListener("click", minifyAll);
        el.saveButton.addEventListener("click", saveAll);
        el.addFieldButton.addEventListener("click", openFieldDialog);
        el.cancelFieldButton.addEventListener("click", () => el.fieldDialog.close());
        el.fieldForm.addEventListener("submit", addField);
        el.rawTextarea.addEventListener("input", () => {
            state.dirty = true;
            setNotice("Raw JSON changed. Validate before saving.", "");
        });
    }

    async function loadBundledFiles() {
        const loaded = await Promise.all(DEFAULT_FILES.map(async (name) => {
            const response = await fetch(`${DATA_PATH}/${name}`, { cache: "no-store" });
            if (!response.ok) throw new Error(`Could not load ${name}`);
            return [name, await response.json()];
        }));

        state.files = new Map(loaded);
        renderAll();
        setNotice("Loaded bundled source JSON files.", "good");
    }

    async function openDataFolder() {
        if (!window.showDirectoryPicker) {
            setNotice("This browser cannot save to a folder directly. Use the download fallback after minifying.", "bad");
            return;
        }

        state.folderHandle = await window.showDirectoryPicker({ mode: "readwrite" });
        await reloadFiles();
        el.folderStatus.textContent = "Connected. Saves will write source and minified files to the selected folder.";
    }

    async function reloadFiles() {
        if (!state.folderHandle) {
            await loadBundledFiles();
            return;
        }

        const next = new Map();
        for await (const [name, handle] of state.folderHandle.entries()) {
            if (!name.endsWith(".json") || name.endsWith(".min.json") || handle.kind !== "file") continue;
            const file = await handle.getFile();
            next.set(name, JSON.parse(await file.text()));
        }

        state.files = next;
        state.currentFile = next.has(state.currentFile) ? state.currentFile : Array.from(next.keys())[0] || "";
        renderAll();
        setNotice("Reloaded files from selected folder.", "good");
    }

    function renderAll() {
        renderFiles();
        renderLanguages();
        renderEditor();
    }

    function renderFiles() {
        const names = Array.from(state.files.keys()).sort();
        el.fileCount.textContent = `${names.length} JSON`;
        el.fileList.innerHTML = "";

        names.forEach((name) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `list-button${name === state.currentFile ? " active" : ""}`;
            button.innerHTML = `<span>${escapeHtml(name)}</span><span class="list-count">${countLeafValues(state.files.get(name))}</span>`;
            button.addEventListener("click", () => selectFile(name));
            el.fileList.appendChild(button);
        });
    }

    function renderLanguages() {
        const translations = state.files.get("translations.json");
        const languages = isPlainObject(translations) ? Object.keys(translations).sort() : [];
        el.languageList.innerHTML = "";

        languages.forEach((language) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `list-button${state.currentFile === "translations.json" && state.currentLanguage === language ? " active" : ""}`;
            button.innerHTML = `<span>${escapeHtml(language)}</span><span class="list-count">${countLeafValues(translations[language])}</span>`;
            button.addEventListener("click", () => {
                state.currentFile = "translations.json";
                state.currentLanguage = language;
                state.rawMode = false;
                renderAll();
            });
            el.languageList.appendChild(button);
        });
    }

    function selectFile(name) {
        state.currentFile = name;
        if (name === "translations.json") {
            const translations = state.files.get(name) || {};
            state.currentLanguage = state.currentLanguage && translations[state.currentLanguage]
                ? state.currentLanguage
                : Object.keys(translations).sort()[0] || "";
        }
        state.rawMode = false;
        renderAll();
    }

    function renderEditor() {
        const data = state.files.get(state.currentFile);
        el.fileTitle.textContent = state.currentFile || "Select a file";
        el.filePath.textContent = state.currentFile ? `${DATA_PATH}/${state.currentFile}` : DATA_PATH;
        el.rawEditor.classList.toggle("hidden", !state.rawMode);
        el.formEditor.classList.toggle("hidden", state.rawMode);
        el.rawButton.textContent = state.rawMode ? "Form editor" : "Raw JSON";

        if (!state.currentFile) {
            el.fieldList.innerHTML = "";
            return;
        }

        if (state.rawMode) {
            el.rawTextarea.value = stringifyPretty(data);
            return;
        }

        const scope = getCurrentScope();
        const paths = flatten(scope);
        el.scopeTitle.textContent = state.currentFile === "translations.json"
            ? state.currentLanguage || "Translations"
            : "Root";
        el.scopeMeta.textContent = `${describe(scope)} - ${paths.length} editable values`;
        el.fieldList.innerHTML = "";

        paths.forEach(({ path, value }) => {
            const row = document.createElement("div");
            row.className = "field-row";

            const key = document.createElement("div");
            key.className = "field-key";
            key.innerHTML = `<strong>${escapeHtml(lastPathPart(path))}</strong><span>${escapeHtml(path)}</span>`;

            const textarea = document.createElement("textarea");
            textarea.value = value == null ? "" : String(value);
            textarea.dataset.path = path;
            textarea.addEventListener("input", () => {
                setByPath(scope, path, textarea.value);
                markDirty();
            });

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "icon-button button-danger";
            remove.title = "Remove field";
            remove.textContent = "x";
            remove.addEventListener("click", () => {
                deleteByPath(scope, path);
                markDirty();
                renderEditor();
            });

            row.append(key, textarea, remove);
            el.fieldList.appendChild(row);
        });
    }

    function getCurrentScope() {
        const data = state.files.get(state.currentFile);
        if (state.currentFile === "translations.json" && state.currentLanguage && data[state.currentLanguage]) {
            return data[state.currentLanguage];
        }
        return data;
    }

    function addLanguage(event) {
        event.preventDefault();
        const language = el.newLanguageInput.value.trim().toLowerCase();
        if (!language) return;

        const translations = state.files.get("translations.json");
        if (!isPlainObject(translations)) {
            setNotice("translations.json must be an object before adding languages.", "bad");
            return;
        }

        if (translations[language]) {
            state.currentLanguage = language;
            state.currentFile = "translations.json";
            renderAll();
            return;
        }

        const source = translations.en || Object.values(translations)[0] || {};
        translations[language] = cloneWithEmptyStrings(source);
        state.currentFile = "translations.json";
        state.currentLanguage = language;
        el.newLanguageInput.value = "";
        markDirty();
        renderAll();
    }

    function deleteSelectedLanguage() {
        const translations = state.files.get("translations.json");
        if (!state.currentLanguage || !isPlainObject(translations) || !translations[state.currentLanguage]) return;

        const language = state.currentLanguage;
        if (!window.confirm(`Delete language "${language}" from translations.json?`)) return;

        delete translations[language];
        state.currentLanguage = Object.keys(translations).sort()[0] || "";
        state.currentFile = "translations.json";
        state.rawMode = false;
        markDirty();
        renderAll();
    }

    function openFieldDialog() {
        el.fieldPathInput.value = "";
        el.fieldValueInput.value = "";
        el.fieldDialog.showModal();
        el.fieldPathInput.focus();
    }

    function addField(event) {
        event.preventDefault();
        const path = el.fieldPathInput.value.trim();
        if (!path) return;

        setByPath(getCurrentScope(), path, el.fieldValueInput.value);
        el.fieldDialog.close();
        markDirty();
        renderEditor();
    }

    function toggleRawMode() {
        if (state.rawMode && !applyRawJson()) return;
        state.rawMode = !state.rawMode;
        renderEditor();
    }

    function validateCurrentFile() {
        if (state.rawMode && !applyRawJson()) return;
        try {
            JSON.stringify(state.files.get(state.currentFile));
            setNotice(`${state.currentFile} is valid JSON.`, "good");
        } catch (error) {
            setNotice(error.message, "bad");
        }
    }

    function applyRawJson() {
        try {
            state.files.set(state.currentFile, JSON.parse(el.rawTextarea.value));
            markDirty();
            setNotice("Raw JSON applied.", "good");
            return true;
        } catch (error) {
            setNotice(`Raw JSON is invalid: ${error.message}`, "bad");
            return false;
        }
    }

    async function minifyFile(name, announce) {
        if (!name) return;
        if (state.rawMode && name === state.currentFile && !applyRawJson()) return;

        const minName = name.replace(/\.json$/, ".min.json");
        const minified = JSON.stringify(state.files.get(name));

        if (state.folderHandle) {
            await writeFile(minName, minified);
            if (announce) setNotice(`Generated ${minName}.`, "good");
        } else {
            download(minName, minified);
            if (announce) setNotice(`Downloaded ${minName}. Open the folder picker to save directly.`, "good");
        }
    }

    async function minifyAll() {
        for (const name of state.files.keys()) {
            await minifyFile(name, false);
        }
        setNotice("Generated minified files for every source JSON.", "good");
    }

    async function saveAll() {
        if (state.rawMode && !applyRawJson()) return;

        if (!state.folderHandle) {
            for (const [name, data] of state.files.entries()) {
                download(name, stringifyPretty(data));
                download(name.replace(/\.json$/, ".min.json"), JSON.stringify(data));
            }
            setNotice("Downloaded source and minified files. Open the folder picker to save directly next time.", "good");
            state.dirty = false;
            return;
        }

        for (const [name, data] of state.files.entries()) {
            await writeFile(name, stringifyPretty(data));
            await writeFile(name.replace(/\.json$/, ".min.json"), JSON.stringify(data));
        }

        state.dirty = false;
        setNotice("Saved source JSON and generated minified files.", "good");
    }

    async function writeFile(name, content) {
        const handle = await state.folderHandle.getFileHandle(name, { create: true });
        const writable = await handle.createWritable();
        await writable.write(content);
        await writable.close();
    }

    function markDirty() {
        state.dirty = true;
        setNotice("Unsaved changes.", "");
    }

    function setNotice(message, tone) {
        el.notice.textContent = message;
        el.notice.className = `notice ${tone || ""}`.trim();
    }

    function flatten(value, prefix = "") {
        if (!isPlainObject(value)) return [];

        return Object.entries(value).flatMap(([key, child]) => {
            const path = prefix ? `${prefix}.${key}` : key;
            return isPlainObject(child)
                ? flatten(child, path)
                : [{ path, value: Array.isArray(child) ? JSON.stringify(child) : child }];
        });
    }

    function setByPath(target, path, value) {
        const parts = path.split(".").filter(Boolean);
        let node = target;

        parts.slice(0, -1).forEach((part) => {
            if (!isPlainObject(node[part])) node[part] = {};
            node = node[part];
        });

        node[parts[parts.length - 1]] = parseFieldValue(value);
    }

    function deleteByPath(target, path) {
        const parts = path.split(".").filter(Boolean);
        let node = target;

        parts.slice(0, -1).forEach((part) => {
            node = node && node[part];
        });

        if (isPlainObject(node)) delete node[parts[parts.length - 1]];
    }

    function parseFieldValue(value) {
        const trimmed = value.trim();
        if (!trimmed) return "";
        if (!/^[\[{]|^(true|false|null|-?\d+(\.\d+)?)$/.test(trimmed)) return value;

        try {
            return JSON.parse(trimmed);
        } catch {
            return value;
        }
    }

    function cloneWithEmptyStrings(value) {
        if (Array.isArray(value)) return [];
        if (isPlainObject(value)) {
            return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, cloneWithEmptyStrings(child)]));
        }
        return "";
    }

    function countLeafValues(value) {
        if (Array.isArray(value)) return value.length;
        if (!isPlainObject(value)) return value == null ? 0 : 1;
        return Object.values(value).reduce((total, child) => total + countLeafValues(child), 0);
    }

    function describe(value) {
        if (Array.isArray(value)) return `Array - ${value.length} items`;
        if (isPlainObject(value)) return `Object - ${Object.keys(value).length} items`;
        return typeof value;
    }

    function isPlainObject(value) {
        return value !== null && typeof value === "object" && !Array.isArray(value);
    }

    function lastPathPart(path) {
        const parts = path.split(".");
        return parts[parts.length - 1];
    }

    function stringifyPretty(value) {
        return `${JSON.stringify(value, null, 4)}\n`;
    }

    function download(name, content) {
        const blob = new Blob([content], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }
}());
