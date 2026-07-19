/*==================================================
NOCTIS TECHNOLOGIES
TEAM PAGE SCRIPT
Part 1A
==================================================*/

"use strict";

/*==================================================
GLOBAL SELECTORS
==================================================*/

const header = document.querySelector(".header");
const progressBar = document.querySelector(".scroll-progress");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

/*==================================================
UTILITIES
==================================================*/

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

/*==================================================
HEADER SHADOW
==================================================*/

function updateHeader(){

    if(!header) return;

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

}

/*==================================================
SCROLL PROGRESS
==================================================*/

function updateScrollProgress(){

    if(!progressBar) return;

    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        clamp(progress,0,100) + "%";

}

/*==================================================
OPTIMIZED SCROLL
==================================================*/

let ticking = false;

function onScroll(){

    if(ticking) return;

    requestAnimationFrame(()=>{

        updateHeader();

        updateScrollProgress();

        ticking = false;

    });

    ticking = true;

}

/*==================================================
INITIAL PAGE SETUP
==================================================*/

function pageSetup(){

    updateHeader();

    updateScrollProgress();

}

/*==================================================
WINDOW EVENTS
==================================================*/

window.addEventListener(
    "scroll",
    onScroll,
    {passive:true}
);

window.addEventListener(
    "resize",
    pageSetup
);

/*==================================================
DOM READY
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    pageSetup();

    console.log(
        "✅ Team.js Part 1A Loaded"
    );

});
/*==================================================
PREMIUM MOBILE MENU
Part 1B
==================================================*/

const mobileLinks = $$(".mobile-menu a");

let menuOpen = false;

/*==================================================
OPEN MENU
==================================================*/

function openMenu(){

    if(!mobileMenu || !menuToggle) return;

    mobileMenu.classList.add("active");

    menuToggle.classList.add("active");

    document.body.style.overflow = "hidden";

    menuOpen = true;

}

/*==================================================
CLOSE MENU
==================================================*/

function closeMenu(){

    if(!mobileMenu || !menuToggle) return;

    mobileMenu.classList.remove("active");

    menuToggle.classList.remove("active");

    document.body.style.overflow = "";

    menuOpen = false;

}

/*==================================================
TOGGLE MENU
==================================================*/

function toggleMenu(){

    if(menuOpen){

        closeMenu();

    }else{

        openMenu();

    }

}

/*==================================================
MENU BUTTON
==================================================*/

if(menuToggle){

    menuToggle.addEventListener("click",toggleMenu);

}

/*==================================================
CLOSE WHEN LINK CLICKED
==================================================*/

mobileLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        closeMenu();

    });

});

/*==================================================
ESC KEY SUPPORT
==================================================*/

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        closeMenu();

    }

});

/*==================================================
CLICK OUTSIDE TO CLOSE
==================================================*/

document.addEventListener("click",(event)=>{

    if(!menuOpen) return;

    const insideMenu =
        mobileMenu.contains(event.target);

    const toggleClicked =
        menuToggle.contains(event.target);

    if(!insideMenu && !toggleClicked){

        closeMenu();

    }

});
/*==================================================
PART 1C
SMOOTH SCROLL + ACTIVE NAVIGATION
==================================================*/

const navLinks = document.querySelectorAll(
".nav-links a, .mobile-menu a"
);

/*==================================================
SMOOTH SCROLL
==================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(!href || !href.startsWith("#")) return;

        e.preventDefault();

        const target=document.querySelector(href);

        if(!target) return;

        window.scrollTo({

            top:
            target.offsetTop-
            (header ? header.offsetHeight : 80),

            behavior:"smooth"

        });

    });

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll("section");

function updateActiveNav(){

    let current="";

    sections.forEach(section=>{

        const top=
        section.offsetTop-140;

        const height=
        section.offsetHeight;

        if(window.scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        const href=
        link.getAttribute("href");

        if(href==="#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener(
"scroll",
updateActiveNav,
{passive:true}
);

/*==================================================
INITIALIZE
==================================================*/

document.addEventListener(
"DOMContentLoaded",
()=>{

    updateHeader();

    updateScrollProgress();

    updateActiveNav();

    console.log(
        "✅ Team.js Part 1 Ready"
    );

});
/*==================================================
PART 2A
PREMIUM REVEAL ANIMATIONS
==================================================*/

const revealItems = document.querySelectorAll(

`
.team-intro-card,
.team-member-card,
.team-workflow-item,
.team-value-card,
.leadership-profile-card,
.backend-profile-card,
.future-team-note,
.team-visual-card
`

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("reveal-active");

            revealObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:0.15,

    rootMargin:"0px 0px -60px 0px"

}

);

revealItems.forEach((item)=>{

    item.classList.add("reveal-init");

    revealObserver.observe(item);

});
/*==================================================
PART 2B
STAGGER REVEAL ANIMATION
==================================================*/

function applyStaggerAnimation(){

    const groups=[

        ".team-members-grid .team-member-card",

        ".team-introduction-grid .team-intro-card",

        ".team-workflow-grid .team-workflow-item",

        ".team-values-grid .team-value-card",

        ".leadership-focus-grid .leadership-focus-item",

        ".backend-focus-grid .backend-focus-item"

    ];

    groups.forEach(selector=>{

        const items=document.querySelectorAll(selector);

        items.forEach((item,index)=>{

            item.style.transitionDelay=
                `${index * 120}ms`;

        });

    });

}

document.addEventListener(
    "DOMContentLoaded",
    applyStaggerAnimation
);
/*==================================================
PART 2C
PREMIUM CARD TILT
==================================================*/

const tiltCards = document.querySelectorAll(

`
.team-member-card,
.team-intro-card,
.team-workflow-item,
.team-value-card,
.team-visual-card,
.leadership-profile-card,
.backend-profile-card
`

);

tiltCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*10;

        const rotateX=((y/rect.height)-0.5)*-10;

        card.style.transform=

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});
/*==================================================
PART 2D
PREMIUM MOUSE GLOW
==================================================*/

const glowCards = document.querySelectorAll(

`
.team-member-card,
.team-intro-card,
.team-workflow-item,
.team-value-card,
.team-visual-card,
.leadership-profile-card,
.backend-profile-card
`

);

if(window.innerWidth > 992){

    glowCards.forEach(card=>{

        const glow=document.createElement("div");

        glow.className="mouse-glow";

        card.appendChild(glow);

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            glow.style.left=x+"px";

            glow.style.top=y+"px";

        });

    });

}
/*==================================================
PART 3A
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");

const desktopLinks = document.querySelectorAll(
".nav-links a"
);

const mobileLinks = document.querySelectorAll(
".mobile-menu a"
);

function updateActiveNav(){

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop=
        section.offsetTop-140;

        const sectionHeight=
        section.offsetHeight;

        if(
            window.scrollY>=sectionTop &&
            window.scrollY<
            sectionTop+sectionHeight
        ){

            currentSection=
            section.getAttribute("id");

        }

    });

    [...desktopLinks,...mobileLinks].forEach(link=>{

        link.classList.remove("active");

        const href=
        link.getAttribute("href");

        if(href===`#${currentSection}`){

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav,
    {passive:true}
);

document.addEventListener(
    "DOMContentLoaded",
    updateActiveNav
);
/*==================================================
PART 3B
SMOOTH SCROLL
==================================================*/

const navItems=document.querySelectorAll(

`
.nav-links a,
.mobile-menu a
`

);

navItems.forEach(link=>{

    link.addEventListener("click",(e)=>{

        const href=link.getAttribute("href");

        if(
            !href ||
            !href.startsWith("#")
        ) return;

        const target=
        document.querySelector(href);

        if(!target) return;

        e.preventDefault();

        const headerHeight=
        header ?
        header.offsetHeight :
        80;

        window.scrollTo({

            top:
            target.offsetTop-headerHeight,

            behavior:"smooth"

        });

        if(menuOpen){

            closeMenu();

        }

    });

});
/*==================================================
PART 3C
KEYBOARD ACCESSIBILITY
==================================================*/

document.addEventListener("keydown",(event)=>{

    switch(event.key){

        case "Escape":

            if(menuOpen){

                closeMenu();

            }

            break;

        case "Home":

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

            break;

        case "End":

            window.scrollTo({

                top:document.documentElement.scrollHeight,

                behavior:"smooth"

            });

            break;

    }

});

navItems.forEach(link=>{

    link.addEventListener("keyup",(event)=>{

        if(event.key==="Enter"){

            link.click();

        }

    });

});
/*==================================================
PART 4A
IMAGE LOADING
==================================================*/

const teamImages=document.querySelectorAll("img");

teamImages.forEach(image=>{

    if(image.complete){

        image.classList.add("loaded");

        return;

    }

    image.addEventListener("load",()=>{

        image.classList.add("loaded");

    });

    image.addEventListener("error",()=>{

        image.classList.add("image-error");

        console.warn(

            "Image failed:",

            image.src

        );

    });

});
/*==================================================
PART 4B
WINDOW RESIZE HANDLER
==================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

    clearTimeout(resizeTimer);

    resizeTimer=setTimeout(()=>{

        updateHeader();

        updateScrollProgress();

        updateActiveNav();

        if(window.innerWidth>992){

            closeMenu();

        }

    },150);

});
/*==================================================
PART 5A
PAGE INITIALIZATION
==================================================*/

function initializeTeamPage(){

    updateHeader();

    updateScrollProgress();

    updateActiveNav();

    applyStaggerAnimation();

}

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        initializeTeamPage();

        console.log(

            "✅ Team Page Initialized"

        );

    }

);
/*==================================================
PART 5B
PAGE VISIBILITY
==================================================*/

document.addEventListener(

    "visibilitychange",

    ()=>{

        if(document.hidden){

            return;

        }

        updateHeader();

        updateScrollProgress();

        updateActiveNav();

    }

);

window.addEventListener(

    "focus",

    ()=>{

        updateHeader();

        updateScrollProgress();

        updateActiveNav();

    }

);
/*==================================================
PART 5C
PERFORMANCE OPTIMIZATION
==================================================*/

let animationFrame=false;

function handlePageScroll(){

    if(animationFrame) return;

    animationFrame=true;

    requestAnimationFrame(()=>{

        updateHeader();

        updateScrollProgress();

        updateActiveNav();

        animationFrame=false;

    });

}

window.removeEventListener(

    "scroll",

    onScroll

);

window.addEventListener(

    "scroll",

    handlePageScroll,

    {

        passive:true

    }

);
/*==================================================
PART 6A
UTILITY FUNCTIONS
==================================================*/

function refreshTeamPage(){

    updateHeader();

    updateScrollProgress();

    updateActiveNav();

}

function closeAllComponents(){

    if(menuOpen){

        closeMenu();

    }

}

window.addEventListener(

    "orientationchange",

    ()=>{

        setTimeout(()=>{

            refreshTeamPage();

        },300);

    }

);

window.addEventListener(

    "beforeunload",

    ()=>{

        closeAllComponents();

    }

);
/*==================================================
PART 6B
FINAL STARTUP
==================================================*/

(function(){

    "use strict";

    function startTeamPage(){

        refreshTeamPage();

        if(typeof applyStaggerAnimation==="function"){

            applyStaggerAnimation();

        }

        console.log(

            "%cNoctis Technologies",

            "color:#6C63FF;font-weight:bold;font-size:14px;"

        );

        console.log(

            "✅ Team.js Loaded Successfully"

        );

    }

    if(document.readyState==="loading"){

        document.addEventListener(

            "DOMContentLoaded",

            startTeamPage

        );

    }else{

        startTeamPage();

    }

}));
/*==================================================
PART 6C
FINAL CLEANUP
==================================================*/

const TEAM_JS_VERSION="2.0.0";

Object.freeze({

    TEAM_JS_VERSION

});

console.info(

    `Team.js v${TEAM_JS_VERSION} Ready`

);

window.addEventListener(

    "load",

    ()=>{

        document.body.classList.add(

            "page-loaded"

        );

    },

    {

        once:true

    }

);
