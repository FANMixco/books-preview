const data = {
    "Volume 1": {
    preview: "img/volume1.png",
    links: {
        "English": "https://a.co/d/1HQh5JM",
        "Español": "https://a.co/d/c2MDHld",
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
