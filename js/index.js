let data = {};
let translations = {};
let PREVIEW_OVERRIDES = {};

async function loadConfigs() {
    const [books, trans, previews] = await Promise.all([
        fetch("js/data/books.min.json").then(r => r.json()),
        fetch("js/data/translations.min.json").then(r => r.json()),
        fetch("js/config/previews.min.json").then(r => r.json())
    ]);

    data = books;
    translations = trans;
    PREVIEW_OVERRIDES = previews;
}

const PREZI_BASE = "https://prezi.com/view/";
const DIRECT_DESTINATIONS = {
    memory: "https://tstories.federiconavarrete.com/memory-game.html"
};
const EMBED_PARAM = "embed=1";
const select = gID("volumeSelect");
const linksContainer = gID("linksContainer");
const previewImage = gID("previewImage");
const qrButton = gID("qrButton");
const qrModal = gID("qrModal");
const closeModal = gID("closeModal");
const qrImage = gID("qrImage");
const shareButton = gID("shareButton");
const qrFloating = gID("qrFloating");
const qrFloatingImage = gID("qrFloatingImage");
const gameModal = gID("gameModal");
const closeGameModal = gID("closeGameModal");
const memoryGameFrame = gID("memoryGameFrame");

// Optional UI behavior
const MAX_VISIBLE_LINKS = 4;   // collapse after this (optional)
const SEARCH_THRESHOLD = 8;    // future search trigger
//const MAX_VISIBLE_LINKS = Infinity;
let currentVolumeId = "";
let volumeBeforeGame = "";

function applyTranslations() {
    const t = getCLang();

    gID("title").innerHTML = `${t.title}<br><small>${t.sTitle}</small>`;
    gID("subtitle").innerHTML = t.subtitle;
    gID("selectLabel").textContent = t.select;
    gID("qrTitle").textContent = t.qrTitle;
    gID("closeModal").textContent = t.close;
    gID("followMe").textContent = t.followMe;
    gID("qrText").textContent = t.qrTitle;
    gID("sBridges").textContent = t.sBridges;
}

function gID(id) {
    return document.getElementById(id);
}

function detectLang() {
    return (navigator.language || "en").slice(0, 2).toLowerCase();
}

function getCLang() {
    const lang = detectLang();
    return translations[lang] || translations.en;
}

function renderVolume(name) {
    const volume = data[name];
    const t = getCLang();
    const linkLabels = t.links || translations.en.links || {};
    // Reorder: put user's language first if that key exists (en/es/fr/fi/...)
    // Don't try to reorder notify-only lists, or Spanish bilingual "children" on es.
    const userLang = detectLang();
    const override = PREVIEW_OVERRIDES[name]?.[detectLang()] || volume.preview;

    const rows = [];

    let matchedLang = null;
    let items = Object.entries(volume.links).map(([key, raw]) => toLink(key, raw));

    let searchInput = null;

    let toggleBtn = null;
    let expanded = false;

    const hasLanguageKeys = items.some(x => x.key.length <= 5 && x.key !== "notify"); // crude but works for your keys
    const allowReorder = hasLanguageKeys && !(name === "children" && userLang === "es");

    const shouldCollapse = items.length > MAX_VISIBLE_LINKS;
    const shouldSearch = items.length >= SEARCH_THRESHOLD;

    linksContainer.innerHTML = "";

    if (allowReorder) {
        const matchIndex = items.findIndex(x => x.key === userLang);

        if (matchIndex >= 0) {
            matchedLang = items[matchIndex].key;

            if (matchIndex > 0) {
                const [match] = items.splice(matchIndex, 1);
                items.unshift(match);
            }
        }
    }

    if (shouldSearch) {
        const sB = "search-box";
        searchInput = document.createElement("input");
        searchInput.id = sB;
        searchInput.type = "text";
        searchInput.placeholder = t.sLang;
        searchInput.className = sB;
        linksContainer.appendChild(searchInput);
    }

    items.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "link-row";
        row.dataset.index = String(index);

        if (shouldCollapse && index >= MAX_VISIBLE_LINKS) {
            row.style.display = "none";
            row.classList.add("extra-link");
        }

        const a = document.createElement("a");
        a.className = "link-btn";
        a.href = item.url;
        a.target = "_blank";

        const isNotify = item.key === "notify";
        const isSuggested =
            matchedLang &&
            item.key === matchedLang &&
            !isNotify;

        a.textContent = isSuggested
            ? `⭐ ${item.label}`
            : item.label;

        const shareBtn = document.createElement("button");
        shareBtn.className = "share-mini";
        shareBtn.innerHTML = "⋮";
        shareBtn.setAttribute("aria-label", "Share this link");

        shareBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const shareTitle = getShareTitle(t);
            shareInfo(shareTitle, a.textContent, item.url, t);
        });

        row.appendChild(a);
        row.appendChild(shareBtn);
        linksContainer.appendChild(row);
        rows.push(row);
    });

    if (shouldCollapse) {
        toggleBtn = document.createElement("button");
        toggleBtn.className = "link-btn show-more";

        const hiddenCount = items.length - MAX_VISIBLE_LINKS;
        toggleBtn.textContent = mLangs(hiddenCount);

        toggleBtn.addEventListener("click", () => {
            expanded = !expanded;
            applyVisibility();
        });

        linksContainer.appendChild(toggleBtn);
    }

    previewImage.src = `img/${override}.webp`;

    if (searchInput) {
        searchInput.addEventListener("input", applyVisibility);
    }

    applyVisibility();

    function getShareTitle(t) {
        const volumeSelect = gID("volumeSelect");
        const volumeText = volumeSelect.options[volumeSelect.selectedIndex]?.text || "";
        return `${t.title} — ${volumeText}`;
    }

    function applyVisibility() {
        const q = (searchInput?.value || "").trim().toLowerCase();
        const searching = q.length > 0;

        if (toggleBtn) toggleBtn.style.display = searching ? "none" : "";

        rows.forEach((row) => {
            const index = Number(row.dataset.index);
            const text = row.textContent.toLowerCase();

            const matches = !searching || text.includes(q);

            if (!matches) {
                row.style.display = "none";
                return;
            }

            if (searching) {
                row.style.display = "";
                return;
            }

            if (shouldCollapse && !expanded && index >= MAX_VISIBLE_LINKS) {
                row.style.display = "none";
            } else {
                row.style.display = "";
            }
        });

        if (toggleBtn && !searching) {
            const hiddenCount = items.length - MAX_VISIBLE_LINKS;
            toggleBtn.textContent = expanded ? t.sLess : mLangs(hiddenCount);
        }
    }

    function mLangs(total) {
        return t.pLang.replace("{0}", total);
    }

    // Normalize ALL link formats into a single list of { key, label, url }
    function toLink(key, raw) {
        // Case A: raw is a string URL (e.g., mirrors.notify)
        if (typeof raw === "string") {
            return {
                key,
                label: linkLabels[key] || key, // notify becomes translated text
                url: raw
            };
        }

        // Case B/C: raw is an object: {label, url} OR {label, id}
        const label = raw.label || linkLabels[key] || key;

        // children uses { id } that needs PREZI_BASE
        const url = raw.url
            ? raw.url
            : raw.id
                ? (PREZI_BASE + raw.id)
                : "";

        return { key, label, url };
    }
}

function loadVolumes() {
    const t = getCLang();
    const titles = t.volumes || translations.en.volumes;

    const previous = select.value;
    select.innerHTML = "";

    Object.keys(data).forEach((id) => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = titles[id] || translations.en.volumes[id] || id;
        select.appendChild(option);
    });

    // keep selection if possible
    select.value = data[previous] ? previous : Object.keys(data)[0];
    currentVolumeId = select.value;
}

async function shareInfo(title, context, url, trans = null) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: context,
                url: url
            });
        } catch {
            // user cancelled
        }
    } else {
        await navigator.clipboard.writeText(fullUrl);
        showToast(trans.linkCopied);
    }

    function showToast(text) {
        let toast = document.querySelector(".toast");

        if (!toast) {
            toast = document.createElement("div");
            toast.className = "toast";
            document.body.appendChild(toast);
        }

        toast.textContent = text;
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 1500);
    }
}

function openGameModal(url) {
    if (!memoryGameFrame.src) {
        memoryGameFrame.src = toEmbedUrl(url);
    }

    gameModal.hidden = false;
    document.body.classList.add("modal-open");
    closeGameModal.focus();
}

function toEmbedUrl(url) {
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}${EMBED_PARAM}`;
}

function closeGameModalView() {
    gameModal.hidden = true;
    document.body.classList.remove("modal-open");

    if (volumeBeforeGame && select.value === "memory") {
        select.value = volumeBeforeGame;
        currentVolumeId = volumeBeforeGame;
    }

    select.focus();
}

select.addEventListener("change", (e) => {
    const destination = DIRECT_DESTINATIONS[e.target.value] || data[e.target.value]?.url;

    if (destination) {
        volumeBeforeGame = currentVolumeId || Object.keys(data)[0];
        currentVolumeId = e.target.value;
        openGameModal(destination);
        return;
    }

    volumeBeforeGame = "";
    currentVolumeId = e.target.value;
    renderVolume(e.target.value);
});

qrButton.addEventListener("click", (e) => {
    e.preventDefault();
    qrModal.style.display = "flex";
});

closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    qrModal.style.display = "none";
});

qrModal.addEventListener("click", (e) => {
    if (e.target === qrModal) {
        qrModal.style.display = "none";
    }
});

closeGameModal.addEventListener("click", closeGameModalView);

gameModal.addEventListener("click", (e) => {
    if (e.target === gameModal) {
        closeGameModalView();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !gameModal.hidden) {
        closeGameModalView();
    }
});

shareButton.addEventListener("click", async () => {
    const t = getCLang();

    shareInfo(t.title, t.subtitle, window.location.href, getCLang());
});

(async function init() {
    await loadConfigs();

    applyTranslations();
    loadVolumes();
    renderVolume(select.value);

    const btn = gID("shareIcon");
    const ua = navigator.userAgent.toLowerCase();
    let iconClass = "icon-share"; // default (desktop / unknown)

    if (/iphone|ipad|ipod|mac os/.test(ua)) {
        iconClass = "icon-share-ios";
    } else if (/android/.test(ua)) {
        iconClass = "icon-share-android";
    }

    // Remove any previous icon classes
    btn.classList.remove("icon-share", "icon-share-ios", "icon-share-android");

    // Add the detected one
    btn.classList.add(iconClass);

    //analytics

    let loaded = false;

    function loadGA() {
        if (loaded) return;
        loaded = true;

        const s = document.createElement('script');
        s.src = "https://www.googletagmanager.com/gtag/js?id=G-Y6F0CLJDS8";
        s.async = true;
        document.head.appendChild(s);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { dataLayer.push(arguments); };
        gtag('js', new Date());
        gtag('config', 'G-Y6F0CLJDS8');
    }

    ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(evt =>
        window.addEventListener(evt, loadGA, { once: true })
    );
})();
