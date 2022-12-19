const homeBtn = document.getElementById("nav-logo");
const hamburgerBtn = document.getElementById("nav-hamburger");
const navButtons = document.getElementById("nav-buttons");

const isHomePage = document.getElementById("is-home-page");

addEventListener('load', (e) => { 
    cleanUrl();
});

homeBtn.addEventListener('click', () => {
    if (isHomePage == null) {
        window.location = "index.html";
        return;
    }

    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox, internet explorer, opera

    cleanUrl();
})

function cleanUrl() {
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
}

function scrollToElement(el) {
    document.documentElement.scrollTop = el.offsetTop - 60;
}

/* BUTTONS */

const aboutBtn = document.getElementById("btn-about");
const sectionAbout = document.getElementById("section-about");

aboutBtn.addEventListener("click", () => {
    if (!checkForMainPage("section-about")) return;

    scrollToElement(sectionAbout);
});

const gamesBtn = document.getElementById("btn-games");
const sectionGames = document.getElementById("section-games");

gamesBtn.addEventListener("click", () => { 
    if (!checkForMainPage("section-games")) return;

    scrollToElement(sectionGames);
});

const linksBtn = document.getElementById("btn-links");

linksBtn.addEventListener("click", () => { 
    window.location = "links.html"
});

hamburgerBtn.addEventListener('click', () => {
    if (navButtons.classList.contains("nav-visible")) {
        navButtons.classList.add("nav-visible-fadeOut");

        setTimeout(() => {
            navButtons.classList.remove("nav-visible-fadeOut");
            navButtons.classList.remove("nav-visible");
        }, 500);
        
    }
    else {
        navButtons.classList.add("nav-visible");
    }
});

function checkForMainPage(idName) {
    if (window.location.pathname.split("/").pop() != "index.html") {
        window.location = "index.html#" + idName;
        return false;
    }
    else return true;
}