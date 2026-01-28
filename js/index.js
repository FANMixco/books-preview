// --- Simple i18n (EN / ES / FR) ---
const translations = {
    en: {
        title: "Timeless Stories",
        sTitle: "Official Book Hub",
        subtitle: "Quick access to all volumes and languages",
        select: "Choose a Volume ⧨",
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
            notify: "Notify me 🔔 ⇛ 🇬🇧 🇪🇸 🇫🇷"
        },
        linkCopied: "Link copied"
    },
    es: {
        title: "Historias Eternas",
        sTitle: "Centro oficial de libros",
        subtitle: "Acceso rápido a todos los volúmenes e idiomas",
        select: "Selecciona un Volumen ⧨",
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
            notify: "Avísame 🔔 ⇛ 🇬🇧 🇪🇸 🇫🇷"
        },
        linkCopied: "Enlace copiado"
    },
    fr: {
        title: "Légendes Éternelles",
        sTitle: "Plateforme officielle des livres",
        subtitle: "Accès rapide à tous les tomes et langues",
        select: "Sélectionnez un Tome ⛛",
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
            notify: "Me notifier 🔔 ⇛ 🇬🇧 🇪🇸 🇫🇷"
        },
        linkCopied: "Lien copié"
    }
};

const data = {
    v1: {
        preview: "img/volume1.png",
        links: {
            "🇬🇧 English": "https://a.co/d/1HQh5JM",
            "🇪🇸 Español": "https://a.co/d/5RiXGEZ",
            "🇫🇷 Français": "https://a.co/d/7EyHZZm"
        }
    },
    v2: {
        preview: "img/volume2.png",
        links: {
            "🇬🇧 English": "https://a.co/d/0HYJyAp",
            "🇪🇸 Español": "https://a.co/d/9GF2Ug3"
        }
    },
    mirrors: {
        preview: "img/mirrors.png",
        links: {
            notify: "https://amzn.to/3YXGR5W"
        }
    },
    children: {
        preview: "img/children.png",
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
            "🇵🇹 Polaco — Español 🇸🇻": "6OPP09BU4Bl8MmDHJlrg",
            "🇵🇹 Portugués — Español 🇸🇻": "rfxpZcSzaii9XFSVq2tM",
            "🇷🇴 Rumano — Español 🇸🇻": "onhYgaGTY1SYkZjarsH2",
            "🇷🇺 Ruso — Español 🇸🇻": "hAQwsVmXeM7fPEj4ZgWi",
            "🇭🇷 Serbocroata — Español 🇸🇻 (alfabeto latino)": "Zo9CIFblfvnXukVQMQMv",
            "🇸🇪 Sueco — Español 🇸🇻": "03wQSTdDdP8tEf2oUJhe",
            "🇹🇷 Turco — Español 🇸🇻": "cCkWWOdOtlkFpiqvjtsz",
            "🇹🇿 Suajili — Español 🇸🇻": "pgOO8udibujPhEwiwyIN",
            "🇺🇦 Ucraniano — Español 🇸🇻": "WZzaEHSiv8HQmRGL1oFQ",
            "🇻🇳 Vietnamita	— Español 🇸🇻": "0JTPN1JHxuIKnS6CFpqJ",
        }
    }
};

const PREZI_BASE = "https://prezi.com/view/";
const select = document.getElementById("volumeSelect");
const linksContainer = document.getElementById("linksContainer");
const previewImage = document.getElementById("previewImage");
const qrButton = document.getElementById("qrButton");
const qrModal = document.getElementById("qrModal");
const closeModal = document.getElementById("closeModal");
const qrImage = document.getElementById("qrImage");
const shareButton = document.getElementById("shareButton");

function detectLang() {
    const lang = (navigator.language || "en").slice(0, 2);
    return translations[lang] ? lang : "en";
}

function applyTranslations() {
    const lang = detectLang();
    const t = translations[lang];


    document.getElementById("title").innerHTML = `${t.title}<br><small>${t.sTitle}</small>`;
    document.getElementById("subtitle").innerHTML = t.subtitle;
    document.getElementById("selectLabel").textContent = t.select;
    document.getElementById("qrTitle").textContent = t.qrTitle;
    document.getElementById("closeModal").textContent = t.close;
    document.getElementById("followMe").textContent = t.followMe;
}

applyTranslations();

function renderVolume(name) {
  const volume = data[name];

  const lang = detectLang();
  const t = translations[lang] || translations.en;
  const linkLabels = t.links || translations.en.links || {};

  linksContainer.innerHTML = "";

  Object.entries(volume.links).forEach(([key, url]) => {
    const a = document.createElement("a");
    a.className = "link-btn";
    const fullUrl = name === "children" && !url.startsWith("http")
        ? PREZI_BASE + url
        : url;

    a.href = fullUrl;
    a.target = "_blank";

    // Use translated label instead of raw key
    a.textContent = linkLabels[key] || key;

    linksContainer.appendChild(a);
  });

  previewImage.src = volume.preview;
}

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

function generateQR() {
    const url = window.location.href;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
}

qrButton.addEventListener("click", (e) => {
    e.preventDefault();
    generateQR();
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

  // Mobile native share
  if (navigator.share) {
    try {
      await navigator.share({
        title: t.title,
        text: t.subtitle,
        url
      });
    } catch (e) {
      // user cancelled — do nothing
    }
  } else {
    // Desktop fallback: copy to clipboard
    await navigator.clipboard.writeText(url);
    alert(
      t.linkCopied
    );
  }
});