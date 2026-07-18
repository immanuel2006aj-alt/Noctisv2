document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const progress = document.querySelector(".scroll-progress");

    const menuBtn = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    // Create close button if not present
    let closeBtn = document.querySelector(".menu-close");

    if (!closeBtn && mobileMenu) {
        closeBtn = document.createElement("button");
        closeBtn.className = "menu-close";
        closeBtn.innerHTML = "&times;";
        mobileMenu.prepend(closeBtn);

        Object.assign(closeBtn.style, {
            position: "absolute",
            top: "20px",
            right: "24px",
            width: "52px",
            height: "52px",
            border: "none",
            borderRadius: "50%",
            background: "#ffffff",
            color: "#111827",
            fontSize: "2rem",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            zIndex: "10001"
        });
    }

    function openMenu() {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
        if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", openMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeMenu);
    }

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeMenu();
    });

    // Header + Scroll Progress
    function updateScroll() {

        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 30);
        }

        if (progress) {
            const scroll =
                window.scrollY /
                (document.documentElement.scrollHeight - window.innerHeight);

            progress.style.width = (scroll * 100) + "%";
        }
    }

    updateScroll();
    window.addEventListener("scroll", updateScroll);

});
