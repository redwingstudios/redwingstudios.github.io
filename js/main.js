// =========================
// MENÚ MÓVIL REDWING
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

    const closeRedWingMenu = () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            closeRedWingMenu();
        });

    });

}


// =========================
// MENÚ MÓVIL GRIMORIO
// =========================

const grimorioMenuButton =
    document.getElementById("grimorioMenuButton");

const grimorioNavLinks =
    document.querySelector(".grimorio-nav-links");

if (grimorioMenuButton && grimorioNavLinks) {

    const closeGrimorioMenu = () => {
        grimorioNavLinks.classList.remove("active");
        grimorioMenuButton.setAttribute("aria-expanded", "false");
    };

    grimorioMenuButton.addEventListener("click", () => {

        const isOpen =
            grimorioNavLinks.classList.toggle("active");

        grimorioMenuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

    grimorioNavLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            closeGrimorioMenu();
        });

    });

}


// =========================
// CERRAR MENÚ AL HACER CLICK FUERA
// =========================

document.addEventListener("click", event => {

    if (
        menuButton &&
        navLinks &&
        !menuButton.contains(event.target) &&
        !navLinks.contains(event.target)
    ) {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    }

    if (
        grimorioMenuButton &&
        grimorioNavLinks &&
        !grimorioMenuButton.contains(event.target) &&
        !grimorioNavLinks.contains(event.target)
    ) {
        grimorioNavLinks.classList.remove("active");
        grimorioMenuButton.setAttribute("aria-expanded", "false");
    }

});


// =========================
// CERRAR MENÚ CON ESCAPE
// =========================

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") {
        return;
    }

    if (menuButton && navLinks) {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    }

    if (grimorioMenuButton && grimorioNavLinks) {
        grimorioNavLinks.classList.remove("active");
        grimorioMenuButton.setAttribute("aria-expanded", "false");
    }

});


// =========================
// RESETEAR MENÚ AL VOLVER A ESCRITORIO
// =========================

window.addEventListener("resize", () => {

    if (window.innerWidth > 950) {

        if (navLinks && menuButton) {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        }

        if (grimorioNavLinks && grimorioMenuButton) {
            grimorioNavLinks.classList.remove("active");
            grimorioMenuButton.setAttribute("aria-expanded", "false");
        }

    }

});