/*==================================================
NOCTIS TECHNOLOGIES
MOBILE NAVIGATION SCRIPT
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    // Open / Close Menu
    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

    // Close when a link is clicked
    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

    // Sticky Header
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    // Scroll Progress Bar
    const progress = document.querySelector(".scroll-progress");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollTop / height) * 100;

        progress.style.width = percent + "%";

    });

});
    /*==================================================
    ACTIVE PAGE DETECTION
    ==================================================*/

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document
        .querySelectorAll(".nav-links a, .mobile-menu a")
        .forEach(link => {

            const href = link.getAttribute("href");

            if (href === currentPage) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });


    /*==================================================
    WINDOW RESIZE
    ==================================================*/

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            mobileMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /*==================================================
    ESC KEY CLOSE
    ==================================================*/

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") {

            mobileMenu.classList.remove("active");

            menuToggle.classList.remove("active");

            document.body.classList.remove("menu-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });