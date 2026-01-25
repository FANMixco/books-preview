// --- Simple i18n (EN / ES / FR) ---
const translations = {
    en: {
        title: "Timeless Stories<br><small>Official Book Hub</small>",
        subtitle: "Quick access to all volumes and languages",
        select: "Select volume",
        qr: "Show QR Code",
        qrTitle: "Scan to open this page",
        close: "Close",
        followMe: "Follow me",
        volumes: {
            v1: "Volume 1",
            v2: "Volume 2",
            mirrors: "Spanish Mirrors (Upcoming)"
        }
    },
    es: {
        title: "Historias Eternas<br><small>Centro oficial de libros</small>",
        subtitle: "Acceso rápido a todos los volúmenes e idiomas",
        select: "Seleccionar volumen",
        qr: "Mostrar código QR",
        qrTitle: "Escanea para abrir esta página",
        close: "Cerrar",
        followMe: "Sígueme",
        volumes: {
            v1: "Volumen 1",
            v2: "Volumen 2",
            mirrors: "Espejos Españoles (Próximamente)"
        }
    },
    fr: {
        title: "Légendes Éternelles<br><small>Plateforme officielle des livres</small>",
        subtitle: "Accès rapide à tous les tomes et langues",
        select: "Sélectionner le tome",
        qr: "Afficher le code QR",
        qrTitle: "Scannez pour ouvrir cette page",
        close: "Fermer",
        followMe: "Suivez-moi",
        volumes: {
            v1: "Tome 1",
            v2: "Tome 2",
            mirrors: "Miroirs Espagnols (À venir)"
        }
    }
};


function detectLang() {
    const lang = (navigator.language || "en").slice(0, 2);
    return translations[lang] ? lang : "en";
}


function applyTranslations() {
    const lang = detectLang();
    const t = translations[lang];


    document.getElementById("title").innerHTML = t.title;
    document.getElementById("subtitle").innerHTML = t.subtitle;
    document.getElementById("selectLabel").textContent = t.select;
    document.getElementById("qrButton").textContent = t.qr;
    document.getElementById("qrTitle").textContent = t.qrTitle;
    document.getElementById("closeModal").textContent = t.close;
    document.getElementById("followMe").textContent = t.followMe;
}

applyTranslations();

const data = {
    v1: {
        preview: "img/volume1.png",
        links: {
            "English": "https://a.co/d/1HQh5JM",
            "Español": "https://a.co/d/5RiXGEZ",
            "Français": "https://a.co/d/7EyHZZm"
        }
    },
    v2: {
        preview: "img/volume2.png",
        links: {
            "English": "https://a.co/d/0HYJyAp",
            "Español": "https://a.co/d/9GF2Ug3"
        }
    },
    mirrors: {
        preview: "img/mirrors.png",
        links: {
            "Notify me": "https://amzn.to/3YXGR5W"
        }
    }
};

const select = document.getElementById("volumeSelect");
const linksContainer = document.getElementById("linksContainer");
const previewImage = document.getElementById("previewImage");

function renderVolume(name) {
    const volume = data[name];

    linksContainer.innerHTML = "";

    Object.entries(volume.links).forEach(([label, url]) => {
        const a = document.createElement("a");
        a.className = "link-btn";
        a.href = url;
        a.target = "_blank";
        a.textContent = label;
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

const qrButton = document.getElementById("qrButton");
const qrModal = document.getElementById("qrModal");
const closeModal = document.getElementById("closeModal");
const qrImage = document.getElementById("qrImage");

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