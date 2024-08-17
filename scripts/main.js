let hamburgerOpen = false;
let isHamburgerOnCooldown = false;

createNavbar();
createFooter();

function createNavbar() {
    const navbar = createElement("nav", null, null);
    document.body.prepend(navbar);

    const navLogo = createElement("img", "nav-logo", navbar);
    navLogo.src = "static/images/logo.png";

    const navHamburger = createElement("div", "nav-hamburger", navbar);
    createElement("div", "nav-hamburger-row", navHamburger);
    createElement("div", "nav-hamburger-row", navHamburger);
    createElement("div", "nav-hamburger-row", navHamburger);

    const navLinks = createElement("div", "nav-links", navbar);
    const homeBtn = createElement("a", null, navLinks);
    homeBtn.innerHTML = "Home";
    homeBtn.href = "/";
    if (location.pathname === "/") homeBtn.classList.add("nav-selected");

    createElement("div", "nav-links-separator", navLinks);

    const projectsBtn = createElement("a", null, navLinks);
    projectsBtn.innerHTML = "Projects";
    projectsBtn.href = "projects.html";
    if (location.pathname === "/projects.html") projectsBtn.classList.add("nav-selected");

    createElement("div", "nav-links-separator", navLinks);

    const socialsBtn = createElement("a", null, navLinks);
    socialsBtn.innerHTML = "Socials";
    socialsBtn.href = "socials.html";
    if (location.pathname === "/socials.html") socialsBtn.classList.add("nav-selected");

    navHamburger.addEventListener("click", () => {
        if (isHamburgerOnCooldown) return;

        hamburgerOpen = !hamburgerOpen;
        if (!hamburgerOpen) {
            isHamburgerOnCooldown = true;
            navLinks.classList.add("reset");

            setTimeout(() => {
                navLinks.classList.remove("reset");
                isHamburgerOnCooldown = false;
            }, 250);
        }

        navLinks.classList.toggle("active");
        navHamburger.classList.toggle("open");
    });

    navLogo.addEventListener("click", () => {
        if (location.pathname === "/") return;
        location.href = "/";
    });
}

function createFooter() {
    const footer = createElement("footer", null, null);
    createElement("span", null, footer).innerHTML = "DayMoniakk - 2024";
    document.body.append(footer);
}

function createElement(type, className, parent) {
    const element = document.createElement(type);
    if (className) element.classList.add(className);
    if (parent) parent.appendChild(element);
    return element;
}