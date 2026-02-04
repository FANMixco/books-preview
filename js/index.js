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
            "🇬🇧 English": "https://a.co/d/0HYJyAp",
            "🇪🇸 Español": "https://a.co/d/9GF2Ug3"
        }
    },
    v1: {
        preview: "volume1",
        links: {
            "🇬🇧 English": "https://a.co/d/1HQh5JM",
            "🇪🇸 Español": "https://a.co/d/5RiXGEZ",
            "🇫🇷 Français": "https://a.co/d/7EyHZZm"
        }
    },
    children: {
        preview: "children",
        links: {
            "🇿🇦 Afrikáans — Español 🇸🇻": "3WD6lQKuilxlSFYUB6Kh",
            "🇩🇪 Alemán — Español 🇸🇻": "f1aF8DNokAVBAQZkRFAU",
            "🇸🇦 Árabe — Español 🇸🇻": "Y1LqND9BGYf54b6k8OrZ",
            "🇧🇬 Búlgaro — Español 🇸🇻": "bZYnslXGNvOnueznybDY",
            "🇨🇿 Checo — Español 🇸🇻": "cfXSdaDBv7RiN3lgxJeB",
            "🇰🇷 Coreano — Español 🇸🇻": "uY6PMfDYv0fqpKFeEW5c",
            "🇩🇰 Danés — Español 🇸🇻": "Nynk2PpW2Srd3ZsIEnsy",
            "🇸🇰 Eslovaco — Español 🇸🇻": "MW7bKr1hDNgya7xuvDNm",
            "🇸🇮 Esloveno — Español 🇸🇻": "dj0VmXcF35oyZWBWvC4K",
            "🇪🇪 Estoniano — Español 🇸🇻": "1xdsCSW0KyFmkElLMAPl",
            "🇫🇮 Finés — Español 🇸🇻": "sZ5XlmFWl5ayuTr7WY8w",
            "🇫🇷 Francés — Español 🇸🇻": "k1IXa0mNdi7IbZjRgyOA/",
            "🇫🇷 Francés — Español 🇸🇻 (mundo árabe 🕌)": "Zuo6lgIMxQ9RU5oZNYl2",
            "🇬🇷 Griego — Español 🇸🇻": "m2sEkecLYzm8EKJFnVt2",
            "🇮🇱 Hebreo — Español 🇸🇻": "dm7HNuAcMtUJAEX5FkgY",
            "🇭🇺 Húngaro — Español 🇸🇻": "pMzExuw0SKgo3LUzgpS6",
            "🇯🇵 Japonés — Español 🇸🇻": "ygATteMETehlTuL45FFl",
            "🇮🇳 Hindi — Español 🇸🇻": "UOk2rg59hfZCToQQswki",
            "🇮🇩 Indonesio — Español 🇸🇻": "XWdBl2ncAVGOFWCi3Xrr",
            "⭐ • 🇬🇧 Inglés — Español 🇸🇻": "3OA2BbhRZgysnB22bzdX",
            "🇮🇹 Italiano — Español 🇸🇻": "j8Rj4RqvEY7k7gFxRyKU",
            "🇱🇻 Letón — Español 🇸🇻": "zgrgHl6OUlEemd4xV01n",
            "🇱🇹 Lituano — Español 🇸🇻": "IoxjUEj1whibCjvLJhYx",
            "🇨🇳 Mandarín — Español 🇸🇻": "8IwA2B6lYhPwonEWAyi9",
            "🇳🇱 Neerlandés — Español 🇸🇻": "bQerdVPWk3U5SW6acdhC",
            "🇳🇴 Noruego — Español 🇸🇻": "Y2tUPDSaXBtjtm9MlY4r",
            "🇮🇷 Persa — Español 🇸🇻": "n0K4Atj9gyyY9GiyY1TZ",
            "🇵🇱 Polaco — Español 🇸🇻": "6OPP09BU4Bl8MmDHJlrg",
            "🇵🇹 Portugués — Español 🇸🇻": "rfxpZcSzaii9XFSVq2tM",
            "🇷🇴 Rumano — Español 🇸🇻": "onhYgaGTY1SYkZjarsH2",
            "🇷🇺 Ruso — Español 🇸🇻": "hAQwsVmXeM7fPEj4ZgWi",
            "🇭🇷 Serbocroata — Español 🇸🇻 (alfabeto latino)": "Zo9CIFblfvnXukVQMQMv",
            "🇹🇿 Suajili — Español 🇸🇻": "pgOO8udibujPhEwiwyIN",
            "🇸🇪 Sueco — Español 🇸🇻": "03wQSTdDdP8tEf2oUJhe",
            "🇹🇷 Turco — Español 🇸🇻": "cCkWWOdOtlkFpiqvjtsz",
            "🇺🇦 Ucraniano — Español 🇸🇻": "WZzaEHSiv8HQmRGL1oFQ",
            "🇻🇳 Vietnamita — Español 🇸🇻": "0JTPN1JHxuIKnS6CFpqJ",
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

function detectLang() {
    const lang = (navigator.language || "en").slice(0, 2);
    return translations[lang] ? lang : "en";
}

function applyTranslations() {
    const lang = detectLang();
    const t = translations[lang];

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

applyTranslations();

function renderVolume(name) {
    const volume = data[name];
    const lang = detectLang();
    const t = translations[lang] || translations.en;
    const linkLabels = t.links || translations.en.links || {};

    linksContainer.innerHTML = "";

    Object.entries(volume.links).forEach(([key, url]) => {
        const row = document.createElement("div");
        row.className = "link-row";

        const a = document.createElement("a");
        a.className = "link-btn";

        const fullUrl =
            name === "children" && !url.startsWith("http")
                ? PREZI_BASE + url
                : url;

        a.href = fullUrl;
        a.target = "_blank";
        a.textContent = linkLabels[key] || key;

        const shareBtn = document.createElement("button");
        shareBtn.className = "share-mini";
        shareBtn.innerHTML = "⋮";
        shareBtn.setAttribute("aria-label", "Share this link");

        shareBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const shareTitle = getShareTitle(t);

            shareInfo(shareTitle, a.textContent, fullUrl, t);
        });

        row.appendChild(a);
        row.appendChild(shareBtn);
        linksContainer.appendChild(row);
    });

    const override = PREVIEW_OVERRIDES[name]?.[lang] || volume.preview;
    previewImage.src = `img/${override}.webp`;

    function getShareTitle(t) {
        const volumeSelect = gID("volumeSelect");
        const volumeText =
            volumeSelect.options[volumeSelect.selectedIndex]?.text || "";

        return `${t.title} — ${volumeText}`;
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

function updateQRVisibility() {
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const isWide = window.innerWidth >= 768;

    if (isLandscape && isWide) {
        qrFloating.style.display = "block";
        qrButton.style.display = "none";
    } else {
        qrFloating.style.display = "none";
        qrButton.style.display = "inline-flex";
    }
}

window.addEventListener("resize", updateQRVisibility);
window.addEventListener("orientationchange", updateQRVisibility);
updateQRVisibility();

function loadVolumes() {
    const lang = detectLang();
    const t = translations[lang] || translations.en;
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

// Load default
loadVolumes();
renderVolume(select.value);

shareButton.addEventListener("click", async () => {
    const url = window.location.href;
    const lang = detectLang();
    const t = translations[lang] || translations.en;

    shareInfo(t.title, t.subtitle, url, t);
});

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

(function () {
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