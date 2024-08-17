const projectContainer = document.querySelector(".project-container");
let lightboxImage;
const screenshots = document.querySelectorAll("#screenshot");

createLightbox();

function createLightbox() {
    const lightbox = createElement("div", "project-lightbox", projectContainer);
    lightboxImage = createElement("img", null, lightbox);
    lightboxImage.src = "static/images/placeholder.png";
    createElement("span", null, lightbox).innerHTML = "Click outside of the image to close or press escape.";

    screenshots.forEach((screenshot) => {
        screenshot.addEventListener("click", () => {
            lightboxImage.src = screenshot.src;
            lightbox.classList.add("active");
        });
    });

    lightbox.addEventListener("click", () => {
        resetLightbox(lightbox);
    });

    document.body.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            resetLightbox(lightbox);
        }
    });
}

function resetLightbox(lightbox) {
    lightbox.classList.remove("active");
    lightbox.classList.add("reset");

    setTimeout(() => {
        lightbox.classList.remove("reset");
    }, 250);
}