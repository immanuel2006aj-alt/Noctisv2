/*==================================================
NOCTIS TECHNOLOGIES
ABOUT.JS
PART 1
Hero + Scroll Reveal + Floating Card
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /*==============================================
    HERO ELEMENTS
    ==============================================*/

    const hero = document.querySelector(".about-hero");

    const heroContent = document.querySelector(
        ".about-hero-content"
    );

    const heroVisual = document.querySelector(
        ".about-hero-visual"
    );

    const mainCard = document.querySelector(
        ".about-main-card"
    );

    const heroBadge = document.querySelector(
        ".about-hero-badge"
    );

    const heroButtons = document.querySelector(
        ".about-hero-buttons"
    );

    /*==============================================
    HERO ENTRANCE
    ==============================================*/

    if (!reduceMotion && hero) {

        hero.style.opacity = "1";

        if (heroContent) {

            heroContent.animate([
                {
                    opacity:0,
                    transform:"translateY(45px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],{
                duration:900,
                easing:"ease",
                fill:"forwards"
            });

        }

        if (heroVisual) {

            heroVisual.animate([
                {
                    opacity:0,
                    transform:"translateX(60px)"
                },
                {
                    opacity:1,
                    transform:"translateX(0)"
                }
            ],{
                duration:950,
                delay:150,
                easing:"ease",
                fill:"forwards"
            });

        }

    }

    /*==============================================
    FLOATING CARD
    ==============================================*/

    if (!reduceMotion && mainCard) {

        let direction = 1;

        setInterval(() => {

            direction *= -1;

            mainCard.animate([
                {
                    transform:`translateY(${direction*8}px)`
                },
                {
                    transform:`translateY(${direction*-8}px)`
                }
            ],{

                duration:4000,
                fill:"forwards",
                easing:"ease-in-out"

            });

        },4000);

    }

    /*==============================================
    HERO BADGE GLOW
    ==============================================*/

    if(heroBadge){

        setInterval(()=>{

            heroBadge.classList.toggle("active-glow");

        },2200);

    }

    /*==============================================
    HERO BUTTON RIPPLE
    ==============================================*/

    if(heroButtons){

        heroButtons.querySelectorAll("a").forEach(button=>{

            button.addEventListener("mousemove",(e)=>{

                const rect = button.getBoundingClientRect();

                button.style.setProperty(
                    "--x",
                    `${e.clientX-rect.left}px`
                );

                button.style.setProperty(
                    "--y",
                    `${e.clientY-rect.top}px`
                );

            });

        });

    }

    /*==============================================
    GLOBAL SCROLL REVEAL
    ==============================================*/

    const revealItems = document.querySelectorAll(

        ".section-heading,\
         .overview-card,\
         .purpose-card,\
         .value-card,\
         .journey-card,\
         .journey-item,\
         .why-card,\
         .expertise-card,\
         .team-culture-item,\
         .stat-card,\
         .about-cta-box"

    );

    const revealObserver = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold:.15
        }

    );

    revealItems.forEach(item=>{

        item.classList.add("reveal");

        revealObserver.observe(item);

    });

});
/*==================================================
NOCTIS TECHNOLOGIES
ABOUT.JS
PART 2
Overview + Cards + Tilt Effects
==================================================*/

/*==================================================
3D CARD TILT
==================================================*/

initialiseCardTilt();

function initialiseCardTilt(){

    if(reduceMotion) return;

    const cards=document.querySelectorAll(

        ".meta-card,\
         .purpose-card,\
         .value-card,\
         .why-card,\
         .expertise-card,\
         .stat-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(event)=>{

            const rect=card.getBoundingClientRect();

            const x=event.clientX-rect.left;

            const y=event.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*12;

            const rotateX=((y/rect.height)-0.5)*-12;

            card.style.transform=

                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}

/*==================================================
META CARD STAGGER
==================================================*/

initialiseMetaCards();

function initialiseMetaCards(){

    const cards=document.querySelectorAll(".meta-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                card.animate([

                    {
                        opacity:0,
                        transform:"translateY(45px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],{

                    duration:650,

                    delay:index*120,

                    easing:"ease",

                    fill:"forwards"

                });

            });

            observer.disconnect();

        });

    },{

        threshold:.25

    });

    observer.observe(cards[0]);

}

/*==================================================
OVERVIEW ITEMS
==================================================*/

initialiseOverviewItems();

function initialiseOverviewItems(){

    const items=document.querySelectorAll(".overview-item");

    if(!items.length) return;

    items.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            item.style.transform="translateX(10px)";

        });

        item.addEventListener("mouseleave",()=>{

            item.style.transform="";

        });

    });

}

/*==================================================
PURPOSE CARDS
==================================================*/

initialisePurposeCards();

function initialisePurposeCards(){

    const cards=document.querySelectorAll(".purpose-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate([

                {

                    opacity:0,

                    transform:"translateY(60px) scale(.96)"

                },

                {

                    opacity:1,

                    transform:"translateY(0) scale(1)"

                }

            ],{

                duration:850,

                easing:"ease",

                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>{

        observer.observe(card);

    });

}

/*==================================================
VALUE CARDS
==================================================*/

initialiseValueCards();

function initialiseValueCards(){

    const cards=document.querySelectorAll(".value-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                card.animate([

                    {

                        opacity:0,

                        transform:"translateY(35px)"

                    },

                    {

                        opacity:1,

                        transform:"translateY(0)"

                    }

                ],{

                    duration:550,

                    delay:index*90,

                    easing:"ease",

                    fill:"forwards"

                });

            });

            observer.disconnect();

        });

    },{

        threshold:.25

    });

    observer.observe(cards[0]);

}
/*==================================================
NOCTIS TECHNOLOGIES
ABOUT.JS
PART 3
Journey + Why Noctis + Expertise
==================================================*/

/*==================================================
COMPANY JOURNEY TIMELINE
==================================================*/

initialiseJourney();

function initialiseJourney(){

    const items=document.querySelectorAll(".journey-item");

    if(!items.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateX(-60px)"
                },

                {
                    opacity:1,
                    transform:"translateX(0)"
                }

            ],{

                duration:750,
                easing:"ease",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.2

    });

    items.forEach(item=>{

        observer.observe(item);

    });

}

/*==================================================
JOURNEY CARD HOVER
==================================================*/

document.querySelectorAll(".journey-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
WHY NOCTIS CARDS
==================================================*/

initialiseWhyCards();

function initialiseWhyCards(){

    const cards=document.querySelectorAll(".why-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                card.animate([

                    {
                        opacity:0,
                        transform:"translateY(50px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],{

                    duration:650,
                    delay:index*90,
                    easing:"ease",
                    fill:"forwards"

                });

            });

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    observer.observe(cards[0]);

}

/*==================================================
WHY HIGHLIGHT
==================================================*/

const whyHighlight=document.querySelector(".why-highlight");

if(whyHighlight){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            whyHighlight.animate([

                {
                    opacity:0,
                    transform:"scale(.95)"
                },

                {
                    opacity:1,
                    transform:"scale(1)"
                }

            ],{

                duration:800,
                easing:"ease",
                fill:"forwards"

            });

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    observer.observe(whyHighlight);

}

/*==================================================
EXPERTISE CARDS
==================================================*/

initialiseExpertiseCards();

function initialiseExpertiseCards(){

    const cards=document.querySelectorAll(".expertise-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                card.animate([

                    {
                        opacity:0,
                        transform:"translateY(60px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],{

                    duration:700,
                    delay:index*120,
                    easing:"ease",
                    fill:"forwards"

                });

            });

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    observer.observe(cards[0]);

}

/*==================================================
EXPERTISE CTA
==================================================*/

const expertiseCTA=document.querySelector(".expertise-cta");

if(expertiseCTA){

    expertiseCTA.addEventListener("mouseenter",()=>{

        expertiseCTA.style.transform="translateY(-6px)";

    });

    expertiseCTA.addEventListener("mouseleave",()=>{

        expertiseCTA.style.transform="";

    });

}
/*==================================================
NOCTIS TECHNOLOGIES
ABOUT.JS
PART 4
Team + Stats + CTA + Performance
==================================================*/

/*==================================================
ABOUT TEAM
==================================================*/

initialiseTeamSection();

function initialiseTeamSection(){

    const features=document.querySelectorAll(
        ".about-team-feature"
    );

    const culture=document.querySelectorAll(
        ".team-culture-item"
    );

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(40px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:650,
                easing:"ease",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.18

    });

    features.forEach(item=>observer.observe(item));

    culture.forEach(item=>observer.observe(item));

}

/*==================================================
COMPANY STATS COUNTERS
==================================================*/

initialiseStats();

function initialiseStats(){

    const stats=document.querySelectorAll(
        ".stat-number span"
    );

    if(!stats.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateStat(entry.target);

            observer.unobserve(entry.target);

        });

    },{

        threshold:.35

    });

    stats.forEach(stat=>observer.observe(stat));

}

function animateStat(element){

    const text=element.textContent.trim();

    const target=parseInt(text.replace(/\D/g,""));

    if(isNaN(target)) return;

    const suffix=text.replace(/[0-9]/g,"");

    let current=0;

    const duration=1800;

    const start=performance.now();

    function update(now){

        const progress=Math.min(
            (now-start)/duration,
            1
        );

        current=Math.floor(
            progress*target
        );

        element.textContent=current+suffix;

        if(progress<1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

/*==================================================
FINAL CTA
==================================================*/

const aboutCTA=document.querySelector(
    ".about-cta-box"
);

if(aboutCTA){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            aboutCTA.animate([

                {
                    opacity:0,
                    transform:"translateY(60px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:850,
                easing:"ease",
                fill:"forwards"

            });

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    observer.observe(aboutCTA);

}

/*==================================================
MOUSE PARALLAX
==================================================*/

if(!reduceMotion){

    document.addEventListener("mousemove",event=>{

        const x=(event.clientX/window.innerWidth)-0.5;

        const y=(event.clientY/window.innerHeight)-0.5;

        document.querySelectorAll(

            ".about-main-card,\
             .overview-panel,\
             .about-team-panel"

        ).forEach(card=>{

            card.style.transform=

                `translate(${x*8}px,${y*8}px)`;

        });

    });

}

/*==================================================
LAZY IMAGES
==================================================*/

document.querySelectorAll("img[data-src]")

.forEach(image=>{

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            image.src=image.dataset.src;

            image.removeAttribute("data-src");

            observer.unobserve(image);

        });

    });

    observer.observe(image);

});

/*==================================================
REDUCED MOTION
==================================================*/

if(reduceMotion){

    document.documentElement.classList.add(
        "reduced-motion"
    );

}

/*==================================================
PAGE READY
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("page-loaded");

});

/*==================================================
ABOUT.JS COMPLETED
==================================================*/