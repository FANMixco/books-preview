// --- Simple i18n (EN / ES / FR) ---
const translations = {
    en: {
        title: "Timeless Stories",
        sTitle: "Official Book Hub",
        subtitle: "Your quick access to all volumes and languages",
        select: "Choose a Volume",
        qrTitle: "Scan to open this page",
        close: "Close",
        followMe: "Follow me",
        sLang: "Search language…",
        pLang: "+ {0} more languages",
        sLess: "Show less",
        volumes: {
            v1: "Volume 1",
            v2: "Volume 2",
            mirrors: "Spanish Mirrors (Upcoming)",
            children: "Bilingual Children’s Edition"
        },
        links: {
            notify: "Notify me 🔔 ⇛ 🇬🇧 🇪🇸"
        },
        linkCopied: "Link copied",
        sBridges: "Building bridges across cultures."
    },
    es: {
        title: "Historias Eternas",
        sTitle: "Centro oficial de libros",
        subtitle: "Tú acceso rápido a todos los volúmenes e idiomas",
        select: "Selecciona un Volumen",
        qrTitle: "Escanea para abrir esta página",
        close: "Cerrar",
        followMe: "Sígueme",
        sLang: "Buscar idioma…",
        pLang: "+ {0} idiomas más",
        sLess: "Mostrar menos",
        volumes: {
            v1: "Volumen 1",
            v2: "Volumen 2",
            mirrors: "Espejos Españoles (Próximamente)",
            children: "Edición infantil bilingüe"
        },
        links: {
            notify: "Avísame 🔔 ⇛ 🇬🇧 🇪🇸"
        },
        linkCopied: "Enlace copiado",
        sBridges: "Construyendo puentes entre culturas."
    },
    fr: {
        title: "Légendes Éternelles",
        sTitle: "Plateforme officielle des livres",
        subtitle: "Votre accès rapide à tous les tomes et toutes les langues",
        select: "Sélectionnez un Tome",
        qrTitle: "Scannez pour ouvrir cette page",
        close: "Fermer",
        followMe: "Suivez-moi",
        sLang: "Rechercher une langue…",
        pLang: "+ {0} langues supplémentaires",
        sLess: "Afficher moins",
        volumes: {
            v1: "Tome 1",
            v2: "Tome 2",
            mirrors: "Miroirs Espagnols (À venir)",
            children: "Édition bilingue pour enfants"
        },
        links: {
            notify: "Me notifier 🔔 ⇛ 🇬🇧 🇪🇸"
        },
        linkCopied: "Lien copié",
        sBridges: "Construire des ponts entre les cultures."
    }
};

const data = {
    mirrors: {
        preview: "mirrors",
        links: {
            notify: "https://amzn.to/3YXGR5W"
        }
    },
    v2: {
        preview: "volume2",
        links: {
            en: { label: "🇬🇧 English", url: "https://a.co/d/0HYJyAp" },
            es: { label: "🇪🇸 Español", url: "https://a.co/d/9GF2Ug3" }
        }
    },
    v1: {
        preview: "volume1",
        links: {
            en: { label: "🇬🇧 English", url: "https://a.co/d/1HQh5JM" },
            es: { label: "🇪🇸 Español", url: "https://a.co/d/5RiXGEZ" },
            fr: { label: "🇫🇷 Français", url: "https://a.co/d/7EyHZZm" }
        }
    },
    children: {
        preview: "children",
        links: {
            af: { label: "🇿🇦 Afrikáans — Español 🇸🇻", id: "3WD6lQKuilxlSFYUB6Kh" },
            de: { label: "🇩🇪 Alemán — Español 🇸🇻", id: "f1aF8DNokAVBAQZkRFAU" },
            ar: { label: "🇸🇦 Árabe — Español 🇸🇻", id: "Y1LqND9BGYf54b6k8OrZ" },
            bg: { label: "🇧🇬 Búlgaro — Español 🇸🇻", id: "bZYnslXGNvOnueznybDY" },
            cs: { label: "🇨🇿 Checo — Español 🇸🇻", id: "cfXSdaDBv7RiN3lgxJeB" },
            ko: { label: "🇰🇷 Coreano — Español 🇸🇻", id: "uY6PMfDYv0fqpKFeEW5c" },
            da: { label: "🇩🇰 Danés — Español 🇸🇻", id: "Nynk2PpW2Srd3ZsIEnsy" },
            sk: { label: "🇸🇰 Eslovaco — Español 🇸🇻", id: "MW7bKr1hDNgya7xuvDNm" },
            sl: { label: "🇸🇮 Esloveno — Español 🇸🇻", id: "dj0VmXcF35oyZWBWvC4K" },
            et: { label: "🇪🇪 Estoniano — Español 🇸🇻", id: "1xdsCSW0KyFmkElLMAPl" },
            fi: { label: "🇫🇮 Finés — Español 🇸🇻", id: "sZ5XlmFWl5ayuTr7WY8w" },
            fr: { label: "🇫🇷 Francés — Español 🇸🇻", id: "k1IXa0mNdi7IbZjRgyOA" },
            fr_ar: { label: "🇫🇷 Francés — Español 🇸🇻 (mundo árabe 🕌)", id: "Zuo6lgIMxQ9RU5oZNYl2" },
            el: { label: "🇬🇷 Griego — Español 🇸🇻", id: "m2sEkecLYzm8EKJFnVt2" },
            he: { label: "🇮🇱 Hebreo — Español 🇸🇻", id: "dm7HNuAcMtUJAEX5FkgY" },
            hu: { label: "🇭🇺 Húngaro — Español 🇸🇻", id: "pMzExuw0SKgo3LUzgpS6" },
            ja: { label: "🇯🇵 Japonés — Español 🇸🇻", id: "ygATteMETehlTuL45FFl" },
            hi: { label: "🇮🇳 Hindi — Español 🇸🇻", id: "UOk2rg59hfZCToQQswki" },
            id: { label: "🇮🇩 Indonesio — Español 🇸🇻", id: "XWdBl2ncAVGOFWCi3Xrr" },
            en: { label: "🇬🇧 Inglés — Español 🇸🇻", id: "3OA2BbhRZgysnB22bzdX" },
            it: { label: "🇮🇹 Italiano — Español 🇸🇻", id: "j8Rj4RqvEY7k7gFxRyKU" },
            lv: { label: "🇱🇻 Letón — Español 🇸🇻", id: "zgrgHl6OUlEemd4xV01n" },
            lt: { label: "🇱🇹 Lituano — Español 🇸🇻", id: "IoxjUEj1whibCjvLJhYx" },
            zh: { label: "🇨🇳 Mandarín — Español 🇸🇻", id: "8IwA2B6lYhPwonEWAyi9" },
            nl: { label: "🇳🇱 Neerlandés — Español 🇸🇻", id: "bQerdVPWk3U5SW6acdhC" },
            no: { label: "🇳🇴 Noruego — Español 🇸🇻", id: "Y2tUPDSaXBtjtm9MlY4r" },
            fa: { label: "🇮🇷 Persa — Español 🇸🇻", id: "n0K4Atj9gyyY9GiyY1TZ" },
            pl: { label: "🇵🇱 Polaco — Español 🇸🇻", id: "6OPP09BU4Bl8MmDHJlrg" },
            pt: { label: "🇵🇹 Portugués — Español 🇸🇻", id: "rfxpZcSzaii9XFSVq2tM" },
            ro: { label: "🇷🇴 Rumano — Español 🇸🇻", id: "onhYgaGTY1SYkZjarsH2" },
            ru: { label: "🇷🇺 Ruso — Español 🇸🇻", id: "hAQwsVmXeM7fPEj4ZgWi" },
            sh: { label: "🇭🇷 Serbocroata — Español 🇸🇻 (alfabeto latino)", id: "Zo9CIFblfvnXukVQMQMv" },
            sw: { label: "🇹🇿 Suajili — Español 🇸🇻", id: "pgOO8udibujPhEwiwyIN" },
            sv: { label: "🇸🇪 Sueco — Español 🇸🇻", id: "03wQSTdDdP8tEf2oUJhe" },
            tr: { label: "🇹🇷 Turco — Español 🇸🇻", id: "cCkWWOdOtlkFpiqvjtsz" },
            uk: { label: "🇺🇦 Ucraniano — Español 🇸🇻", id: "WZzaEHSiv8HQmRGL1oFQ" },
            vi: { label: "🇻🇳 Vietnamita — Español 🇸🇻", id: "0JTPN1JHxuIKnS6CFpqJ" }
        }
    }
};

const PREVIEW_OVERRIDES = {
    v1: {
        en: "volume1",
        es: "volume1_es",
        fr: "volume1_fr"
    },
    v2: {
        es: "volume2_es"
    },
    mirrors: {
        en: "mirrors",
        es: "mirrors_es"
    },
    children: {
        fr: "children_fr"
        // en + es fall back to "children"
    }
};

const PREZI_BASE = "https://prezi.com/view/";
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

// Optional UI behavior
const MAX_VISIBLE_LINKS = 4;   // collapse after this (optional)
const SEARCH_THRESHOLD = 8;    // future search trigger
//const MAX_VISIBLE_LINKS = Infinity;

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
    let matchedLang = null;

    linksContainer.innerHTML = "";

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

    let items = Object.entries(volume.links).map(([key, raw]) => toLink(key, raw));

    // Reorder: put user's language first if that key exists (en/es/fr/fi/...)
    // Don't try to reorder notify-only lists, or Spanish bilingual "children" on es.
    const userLang = detectLang();
    const hasLanguageKeys = items.some(x => x.key.length <= 5 && x.key !== "notify"); // crude but works for your keys
    const allowReorder = hasLanguageKeys && !(name === "children" && userLang === "es");

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

    const shouldCollapse = items.length > MAX_VISIBLE_LINKS;
    const shouldSearch = items.length >= SEARCH_THRESHOLD;

    let searchInput = null;

    const rows = [];
    let toggleBtn = null;
    let expanded = false;

    if (shouldSearch) {
        searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = t.sLang;
        searchInput.className = "search-box";
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
            ? `⭐ • ${item.label}`
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

    const override = PREVIEW_OVERRIDES[name]?.[detectLang()] || volume.preview;
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
        showToast(trans.linkCopied || "Link copied");
    }
}

select.addEventListener("change", (e) => {
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

shareButton.addEventListener("click", async () => {
    const url = window.location.href;
    //const t = getCLang();

    shareInfo(t.title, t.subtitle, url, getCLang());
});

(function () {
    applyTranslations();

    // Load default
    loadVolumes();
    renderVolume(select.value);

    const btn = gID("shareIcon");
    if (!btn) return;

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
})();