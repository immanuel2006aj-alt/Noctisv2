/*==================================================
NOCTIS TECHNOLOGIES
SERVICES PAGE
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /*==================================================
    REDUCED MOTION
    ==================================================*/

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    /*==================================================
    HERO ELEMENTS
    ==================================================*/

    const hero = document.querySelector(".services-hero");
    const heroContent = document.querySelector(".services-content");
    const visualCard = document.querySelector(".visual-card");
    const highlightCards = document.querySelectorAll(".highlight-card");
    const heroButtons = document.querySelectorAll(".hero-buttons a");

    /*==================================================
    INITIAL STATE
    ==================================================*/

    if (!reduceMotion) {

        if (heroContent) {
            heroContent.style.opacity = "0";
            heroContent.style.transform = "translateY(40px)";
        }

        if (visualCard) {
            visualCard.style.opacity = "0";
            visualCard.style.transform =
                "translateY(40px) scale(.95)";
        }

        highlightCards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(25px)";
        });

    }

    /*==================================================
    HERO ENTRANCE
    ==================================================*/

    window.addEventListener("load", () => {

        if (reduceMotion) return;

        if (heroContent) {

            heroContent.style.transition =
                "all .8s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform =
                "translateY(0)";
        }

        if (visualCard) {

            setTimeout(() => {

                visualCard.style.transition =
                    "all .8s ease";

                visualCard.style.opacity = "1";
                visualCard.style.transform =
                    "translateY(0) scale(1)";

            }, 250);

        }

        highlightCards.forEach((card, index) => {

            setTimeout(() => {

                card.style.transition =
                    "all .6s ease";

                card.style.opacity = "1";
                card.style.transform =
                    "translateY(0)";

            }, 450 + (index * 120));

        });

    });

    /*==================================================
    HERO BUTTON RIPPLE
    ==================================================*/

    heroButtons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect = button.getBoundingClientRect();

            button.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
            );

            button.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
            );

        });

    });

    /*==================================================
    SCROLL REVEAL
    ==================================================*/

    const revealItems = document.querySelectorAll(
        ".service-card, .tech-card, .process-card, .consultation-card, .why-card, .faq-item, .cta-box"
    );

    if (!reduceMotion) {

        revealItems.forEach(item => {

            item.style.opacity = "0";
            item.style.transform =
                "translateY(50px)";
            item.style.transition =
                "all .75s ease";

        });

    }

    const revealObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            });

        }, {
            threshold: .15
        });

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });

});
/*==================================================
NOCTIS TECHNOLOGIES
SERVICES.JS
PART 2
Service Cards + Technology + Process
==================================================*/

/*==================================================
SERVICE CARD INTERACTION
==================================================*/

initialiseServiceCards();

function initialiseServiceCards(){

    const cards=document.querySelectorAll(".service-card");

    if(!cards.length) return;

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-12px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}

/*==================================================
3D TILT EFFECT
==================================================*/

initialiseCardTilt();

function initialiseCardTilt(){

    if(reduceMotion) return;

    const cards=document.querySelectorAll(

        ".service-card,\
         .tech-card,\
         .process-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",event=>{

            const rect=card.getBoundingClientRect();

            const x=event.clientX-rect.left;

            const y=event.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*10;

            const rotateX=((y/rect.height)-0.5)*-10;

            card.style.transform=

            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}

/*==================================================
TECH TAGS
==================================================*/

initialiseTechTags();

function initialiseTechTags(){

    const tags=document.querySelectorAll(".tech-list span");

    if(!tags.length) return;

    tags.forEach(tag=>{

        tag.addEventListener("mouseenter",()=>{

            tag.animate([

                {
                    transform:"translateY(0)"
                },

                {
                    transform:"translateY(-4px)"
                }

            ],{

                duration:220,
                fill:"forwards"

            });

        });

        tag.addEventListener("mouseleave",()=>{

            tag.style.transform="";

        });

    });

}

/*==================================================
TECH CARD STAGGER
==================================================*/

initialiseTechnology();

function initialiseTechnology(){

    const cards=document.querySelectorAll(".tech-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                card.animate([

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
                    delay:index*100,
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
PROCESS CARDS
==================================================*/

initialiseProcessCards();

function initialiseProcessCards(){

    const cards=document.querySelectorAll(".process-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate([

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
PROCESS NUMBER PULSE
==================================================*/

document.querySelectorAll(".process-number")

.forEach(number=>{

    setInterval(()=>{

        number.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.08)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:1200

        });

    },4000);

});

/*==================================================
PART 2 COMPLETED
==================================================*/
/*==================================================
NOCTIS TECHNOLOGIES
SERVICES.JS
PART 3
Consultation + Why Noctis + FAQ + CTA
==================================================*/

/*==================================================
CONSULTATION CARDS
==================================================*/

initialiseConsultationCards();

function initialiseConsultationCards(){

    const cards=document.querySelectorAll(".consultation-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver(entries=>{

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

                duration:800,
                easing:"ease",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>observer.observe(card));

}

/*==================================================
WHY NOCTIS CARDS
==================================================*/

initialiseWhyCards();

function initialiseWhyCards(){

    const cards=document.querySelectorAll(".why-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver(entries=>{

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
FAQ ACCORDION
==================================================*/

initialiseFAQ();

function initialiseFAQ(){

    const items=document.querySelectorAll(".faq-item");

    if(!items.length) return;

    items.forEach(item=>{

        const button=item.querySelector(".faq-question");

        button.addEventListener("click",()=>{

            const active=item.classList.contains("active");

            items.forEach(faq=>{

                faq.classList.remove("active");

            });

            if(!active){

                item.classList.add("active");

            }

        });

    });

}

/*==================================================
CTA ANIMATION
==================================================*/

const cta=document.querySelector(".cta-box");

if(cta){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cta.animate([

                {
                    opacity:0,
                    transform:"translateY(70px)"
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

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    observer.observe(cta);

}

/*==================================================
BUTTON RIPPLE
==================================================*/

document.querySelectorAll(

".btn-primary,.btn-secondary"

).forEach(button=>{

    button.addEventListener("mousemove",e=>{

        const rect=button.getBoundingClientRect();

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

/*==================================================
PART 3 COMPLETED
==================================================*/
/*==================================================
NOCTIS TECHNOLOGIES
SERVICES.JS
PART 4
Page Effects + Lazy Loading + Accessibility
==================================================*/

/*==================================================
ACTIVE NAVIGATION
==================================================*/

initialiseActiveSection();

function initialiseActiveSection(){

    const sections=document.querySelectorAll("section[id]");
    const navLinks=document.querySelectorAll(
        ".nav-links a,.mobile-menu a"
    );

    if(!sections.length) return;

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-140;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            const href=link.getAttribute("href");

            if(href===`#${current}`){

                link.classList.add("active");

            }

        });

    });

}

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(link=>{

    link.addEventListener("click",event=>{

        const target=document.querySelector(

            link.getAttribute("href")

        );

        if(!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior:"smooth",
            block:"start"

        });

    });

});

/*==================================================
FLOATING PARALLAX
==================================================*/

if(!reduceMotion){

    window.addEventListener("mousemove",event=>{

        const x=(event.clientX/window.innerWidth-.5)*12;

        const y=(event.clientY/window.innerHeight-.5)*12;

        document.querySelectorAll(

            ".visual-card,.highlight-card"

        ).forEach(card=>{

            card.style.transform=

            `translate(${x}px,${y}px)`;

        });

    });

}

/*==================================================
LAZY LOAD IMAGES
==================================================*/

const lazyImages=document.querySelectorAll(

    "img[data-src]"

);

if(lazyImages.length){

    const imageObserver=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const image=entry.target;

            image.src=image.dataset.src;

            image.removeAttribute("data-src");

            imageObserver.unobserve(image);

        });

    });

    lazyImages.forEach(image=>{

        imageObserver.observe(image);

    });

}

/*==================================================
PAGE LOADED
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("page-loaded");

});

/*==================================================
REDUCED MOTION SUPPORT
==================================================*/

if(reduceMotion){

    document.querySelectorAll("*").forEach(element=>{

        element.style.animation="none";
        element.style.transition="none";

    });

}

/*==================================================
CONSOLE MESSAGE
==================================================*/

console.log(

"%cNoctis Technologies • Services",

"color:#2F66F3;font-size:15px;font-weight:bold;"

);

console.log(

"services.js loaded successfully."

);

/*==================================================
SERVICES.JS COMPLETED
==================================================*/
