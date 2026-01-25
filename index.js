// --- Simple i18n (EN / ES / FR) ---
const translations = {
    en: {
        title: "Timeless Stories<br><small>Official Book Hub</small>",
        subtitle: "Quick access to all volumes and languages",
        select: "Select volume",
        qr: "Show QR Code",
        qrTitle: "Scan to open this page",
        close: "Close",
        followMe: "Follow me"
    },
    es: {
        title: "Historias Eternas<br><small>Centro oficial de libros</small>",
        subtitle: "Acceso rápido a todos los volúmenes e idiomas",
        select: "Seleccionar volumen",
        qr: "Mostrar código QR",
        qrTitle: "Escanea para abrir esta página",
        close: "Cerrar",
        followMe: "Sígueme"
    },
    fr: {
        title: "Légendes Éternelles<br><small>Plateforme officielle des livres</small>",
        subtitle: "Accès rapide à tous les volumes et langues",
        select: "Sélectionner le volume",
        qr: "Afficher le code QR",
        qrTitle: "Scannez pour ouvrir cette page",
        close: "Fermer",
        followMe: "Suivez-moi"
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
    "Volume 1": {
        preview: "img/volume1.png",
        links: {
            "English": "https://a.co/d/1HQh5JM",
            "Español": "https://a.co/d/5RiXGEZ",
            "Français": "https://a.co/d/7EyHZZm"
        }
    },
    "Volume 2": {
        preview: "img/volume2.png",
        links: {
            "English": "https://a.co/d/0HYJyAp",
            "Español": "https://a.co/d/9GF2Ug3"
        }
    },
    "Spanish Mirrors (Upcoming)": {
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

Object.keys(data).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    select.appendChild(option);
});

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
const firstKey = Object.keys(data)[0];
select.value = firstKey;
renderVolume(firstKey);
