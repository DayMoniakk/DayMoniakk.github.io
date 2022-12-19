const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("#screenshot");
images.forEach(image => { 
    image.addEventListener("click", e => { 
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }

        const helpText = document.createElement("span");
        helpText.innerText = "Click outside to close...";
        lightbox.appendChild(helpText);

        lightbox.classList.add("active");
        const img = document.createElement("img");
        img.src = image.src;
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", e => {
    if (e.target != e.currentTarget) return;

    lightbox.classList.add("disabled");

    setTimeout(() => {
        lightbox.classList.remove("active");
        lightbox.classList.remove("disabled");
    }, 200);
});