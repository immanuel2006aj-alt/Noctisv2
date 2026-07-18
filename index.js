document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("navMenuBtn");
    const closeBtn = document.getElementById("navCloseBtn");
    const overlay = document.getElementById("navMenuOverlay");
    const links = document.querySelectorAll(".nav-menu-links a");

    if (!menuBtn || !closeBtn || !overlay) return;

    function openMenu() {
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
        menuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
        menuBtn.setAttribute("aria-expanded", "false");
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

});
