document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    if (!menuBtn || !mobileMenu) return;

    // Create close button if not present
    let closeBtn = mobileMenu.querySelector(".menu-close");

    if (!closeBtn) {
        closeBtn = document.createElement("button");
        closeBtn.className = "menu-close";
        closeBtn.innerHTML = "&times;";

        Object.assign(closeBtn.style, {
            position: "fixed",
            top: "20px",
            right: "20px",
            width: "48px",
            height: "48px",
            border: "none",
            borderRadius: "50%",
            background: "#fff",
            color: "#111",
            fontSize: "30px",
            cursor: "pointer",
            zIndex: "10001",
            boxShadow: "0 10px 25px rgba(0,0,0,.15)"
        });

        mobileMenu.prepend(closeBtn);
    }

    function openMenu() {
        mobileMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
    }

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    menuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

});
