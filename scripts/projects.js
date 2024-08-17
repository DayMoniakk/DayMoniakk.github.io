const projectCards = document.querySelectorAll(".project");

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        window.location.href = card.dataset.page + ".html";
    });
})