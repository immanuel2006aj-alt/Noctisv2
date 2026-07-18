/*==================================================
NOCTIS TECHNOLOGIES
SOLUTIONS PAGE SCRIPT
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*==================================================
    ELEMENTS
    ==================================================*/

    const body = document.body;

    const header = document.querySelector(".header");

    const progressBar = document.querySelector(".scroll-progress");

    const menuButton = document.querySelector(".menu-toggle");

    const mobileMenu = document.querySelector(".mobile-menu");

    const mobileLinks = document.querySelectorAll(".mobile-menu a");


    /*==================================================
    CREATE CLOSE BUTTON
    ==================================================*/

    let closeButton = document.querySelector(".menu-close");

    if (!closeButton && mobileMenu) {

        closeButton = document.createElement("button");

        closeButton.className = "menu-close";

        closeButton.setAttribute("aria-label", "Close Menu");

        closeButton.innerHTML = "&times;";

        mobileMenu.prepend(closeButton);

        Object.assign(closeButton.style, {

            position: "absolute",

            top: "20px",

            right: "20px",

            width: "52px",

            height: "52px",

            border: "none",

            borderRadius: "50%",

            background: "#fff",

            color: "#1A1A1A",

            fontSize: "2rem",

            cursor: "pointer",

            zIndex: "10001",

            boxShadow: "0 15px 40px rgba(0,0,0,.08)",

            transition: ".35s ease"

        });

        closeButton.addEventListener("mouseenter", () => {

            closeButton.style.transform = "rotate(90deg) scale(1.05)";

        });

        closeButton.addEventListener("mouseleave", () => {

            closeButton.style.transform = "";

        });

    }


    /*==================================================
    OPEN MENU
    ==================================================*/

    function openMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.add("active");

        body.style.overflow = "hidden";

        menuButton?.classList.add("active");

        menuButton?.setAttribute("aria-expanded", "true");

    }


    /*==================================================
    CLOSE MENU
    ==================================================*/

    function closeMenu() {

        if (!mobileMenu) return;

        mobileMenu.classList.remove("active");

        body.style.overflow = "";

        menuButton?.classList.remove("active");

        menuButton?.setAttribute("aria-expanded", "false");

    }


    /*==================================================
    MENU EVENTS
    ==================================================*/

    menuButton?.addEventListener("click", () => {

        if (mobileMenu.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    });


    closeButton?.addEventListener("click", closeMenu);


    mobileLinks.forEach(link => {

        link.addEventListener("click", closeMenu);

    });


    document.addEventListener("keydown", e => {

        if (e.key === "Escape") {

            closeMenu();

        }

    });


    mobileMenu?.addEventListener("click", e => {

        if (e.target === mobileMenu) {

            closeMenu();

        }

    });


    /*==================================================
    HEADER + SCROLL PROGRESS
    ==================================================*/

    function updateScrollUI() {

        const scrollTop = window.scrollY;

        if (header) {

            if (scrollTop > 40) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }

        if (progressBar) {

            const totalHeight =

                document.documentElement.scrollHeight -

                window.innerHeight;

            const percent =

                (scrollTop / totalHeight) * 100;

            progressBar.style.width = percent + "%";

        }

    }

    updateScrollUI();

    window.addEventListener("scroll", updateScrollUI, {

        passive: true

    });

});
/*==================================================
PART 2
SMOOTH SCROLL + ACTIVE NAV + REVEAL ANIMATIONS
==================================================*/

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        const headerHeight = document.querySelector(".header")?.offsetHeight || 80;

        window.scrollTo({

            top: target.offsetTop - headerHeight,

            behavior:"smooth"

        });

    });

});


/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-links a, .mobile-menu a");

function updateActiveNav(){

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if(window.scrollY >= top && window.scrollY < top + height){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if(href === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav,{passive:true});

updateActiveNav();


/*==================================================
REVEAL ANIMATION
==================================================*/

const revealItems = document.querySelectorAll(

`
section,
.business-solution-card,
.workflow-item,
.solution-flow-item,
.booking-feature-item,
.clinic-feature,
.specialized-card,
.industry-solution-card,
.admin-panel-card,
.custom-feature-item,
.btn-primary,
.btn-secondary
`

);

revealItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="all .8s cubic-bezier(.2,.7,.2,1)";

});

const revealObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

            revealObserver.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

revealItems.forEach(item=>{

    revealObserver.observe(item);

});


/*==================================================
STAGGER GRID ANIMATION
==================================================*/

document.querySelectorAll(

`
.business-solutions-grid,
.industry-solutions-grid,
.specialized-solutions-grid,
.admin-panel-grid,
.solution-workflow,
.booking-features-grid,
.custom-features-grid
`

).forEach(grid=>{

    [...grid.children].forEach((card,index)=>{

        card.style.transitionDelay=(index*0.08)+"s";

    });

});


/*==================================================
PARALLAX HERO
==================================================*/

const hero = document.querySelector(".solutions-hero");

window.addEventListener("scroll",()=>{

    if(!hero) return;

    hero.style.backgroundPositionY =

    window.scrollY * 0.25 + "px";

},{passive:true});


/*==================================================
BUTTON HOVER GLOW
==================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.02)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="";

    });

});
/*==================================================
PART 3
ADVANCED INTERACTIONS
==================================================*/


/*==================================================
COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const el = entry.target;

        const target = parseInt(el.dataset.count);

        let value = 0;

        const speed = Math.max(10, target / 80);

        const update = ()=>{

            value += speed;

            if(value >= target){

                el.textContent = target;

            }else{

                el.textContent = Math.floor(value);

                requestAnimationFrame(update);

            }

        };

        update();

        counterObserver.unobserve(el);

    });

},{
    threshold:.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(button=>{

    button.style.position="relative";

    button.style.overflow="hidden";

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";

        ripple.style.height=size+"px";

        ripple.style.left=e.clientX-rect.left-size/2+"px";

        ripple.style.top=e.clientY-rect.top-size/2+"px";

        ripple.style.position="absolute";

        ripple.style.borderRadius="50%";

        ripple.style.background="rgba(255,255,255,.35)";

        ripple.style.transform="scale(0)";

        ripple.style.pointerEvents="none";

        ripple.style.transition=".6s ease";

        this.appendChild(ripple);

        requestAnimationFrame(()=>{

            ripple.style.transform="scale(3)";

            ripple.style.opacity="0";

        });

        setTimeout(()=>{

            ripple.remove();

        },650);

    });

});


/*==================================================
FAQ ACCORDION
==================================================*/

document.querySelectorAll(".faq-item").forEach(item=>{

    const question=item.querySelector(".faq-question");

    question?.addEventListener("click",()=>{

        document.querySelectorAll(".faq-item").forEach(f=>{

            if(f!==item){

                f.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==================================================
FLOATING CARD EFFECT
==================================================*/

document.querySelectorAll(

".business-solution-card,.industry-solution-card,.specialized-card,.admin-panel-card"

).forEach(card=>{

    let direction=1;

    let y=0;

    setInterval(()=>{

        y+=0.5*direction;

        if(y>6) direction=-1;

        if(y<-6) direction=1;

        card.style.transform=`translateY(${y}px)`;

    },40);

});


/*==================================================
3D MOUSE TILT
==================================================*/

document.querySelectorAll(

".solutions-visual-card,.booking-intro-card,.clinic-solution-card"

).forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rx=((y-rect.height/2)/18);

        const ry=((rect.width/2-x)/18);

        card.style.transform=

        `perspective(1000px)
        rotateX(${rx}deg)
        rotateY(${ry}deg)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


/*==================================================
BACK TO TOP
==================================================*/

const topButton=document.querySelector(".back-to-top");

if(topButton){

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.classList.add("show");

        }else{

            topButton.classList.remove("show");

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*==================================================
PAGE FADE IN
==================================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});
/*==================================================
PART 4
FINAL OPTIMIZATION
==================================================*/


/*==================================================
AUTO ACTIVE PAGE
==================================================*/

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a, .mobile-menu a").forEach(link=>{

    const href = link.getAttribute("href");

    if(!href) return;

    if(href.includes(currentPage)){

        link.classList.add("active");

    }

});


/*==================================================
HIDE / SHOW HEADER
==================================================*/

let lastScroll = 0;

const headerElement = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    const current = window.pageYOffset;

    if(current <= 0){

        headerElement.style.transform="translateY(0)";

        lastScroll=current;

        return;

    }

    if(current > lastScroll && current > 120){

        headerElement.style.transform="translateY(-110%)";

    }else{

        headerElement.style.transform="translateY(0)";

    }

    lastScroll=current;

},{passive:true});


/*==================================================
LAZY IMAGE FADE
==================================================*/

document.querySelectorAll("img").forEach(img=>{

    if(img.complete){

        img.classList.add("loaded");

        return;

    }

    img.style.opacity="0";

    img.style.transition=".5s ease";

    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });

});


/*==================================================
KEYBOARD ACCESSIBILITY
==================================================*/

document.addEventListener("keyup",(e)=>{

    if(e.key==="Tab"){

        document.body.classList.add("using-keyboard");

    }

});

document.addEventListener("mousedown",()=>{

    document.body.classList.remove("using-keyboard");

});


/*==================================================
CARD HOVER SHADOW
==================================================*/

document.querySelectorAll(

".workflow-item,\
.business-solution-card,\
.industry-solution-card,\
.specialized-card,\
.admin-panel-card,\
.booking-feature-item"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 25px 60px rgba(47,102,243,.12)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});


/*==================================================
PERFORMANCE
==================================================*/

window.addEventListener("pageshow",()=>{

    document.body.classList.add("page-ready");

});

window.addEventListener("resize",()=>{

    document.documentElement.style.setProperty(

        "--vh",

        `${window.innerHeight * 0.01}px`

    );

});

window.dispatchEvent(new Event("resize"));


/*==================================================
CONSOLE BRAND
==================================================*/

console.log("%cNoctis Technologies","font-size:18px;font-weight:bold;color:#2F66F3;");
console.log("%cSolutions Page Loaded Successfully","color:#22C55E;font-size:14px;");


/*==================================================
END
==================================================*/
