/*==================================================
NOCTIS TECHNOLOGIES
SOLUTIONS.JS
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

    const heroContent =
        document.querySelector(".solutions-hero-content");

    const heroCard =
        document.querySelector(".solutions-visual-card");

    const flowItems =
        document.querySelectorAll(".solution-flow-item");

    /*==================================================
    INITIAL STATE
    ==================================================*/

    if(!reduceMotion){

        if(heroContent){

            heroContent.style.opacity="0";
            heroContent.style.transform="translateY(40px)";

        }

        if(heroCard){

            heroCard.style.opacity="0";
            heroCard.style.transform=
            "translateY(40px) scale(.96)";

        }

        flowItems.forEach(item=>{

            item.style.opacity="0";
            item.style.transform="translateX(30px)";

        });

    }

    /*==================================================
    HERO LOAD
    ==================================================*/

    window.addEventListener("load",()=>{

        if(reduceMotion) return;

        if(heroContent){

            heroContent.style.transition="all .8s ease";
            heroContent.style.opacity="1";
            heroContent.style.transform="translateY(0)";

        }

        if(heroCard){

            setTimeout(()=>{

                heroCard.style.transition="all .8s ease";
                heroCard.style.opacity="1";
                heroCard.style.transform=
                "translateY(0) scale(1)";

            },250);

        }

        flowItems.forEach((item,index)=>{

            setTimeout(()=>{

                item.style.transition="all .6s ease";
                item.style.opacity="1";
                item.style.transform="translateX(0)";

            },450+(index*90));

        });

    });

    /*==================================================
    BUTTON RIPPLE
    ==================================================*/

    document.querySelectorAll(
        ".btn-primary,.btn-secondary"
    ).forEach(button=>{

        button.addEventListener("mousemove",event=>{

            const rect=
            button.getBoundingClientRect();

            button.style.setProperty(
                "--x",
                `${event.clientX-rect.left}px`
            );

            button.style.setProperty(
                "--y",
                `${event.clientY-rect.top}px`
            );

        });

    });

    /*==================================================
    SCROLL REVEAL
    ==================================================*/

    const revealItems=document.querySelectorAll(

        ".workflow-item,\
        .business-solution-card,\
        .booking-intro-card,\
        .booking-features-card,\
        .clinic-solution-card,\
        .industry-solution-card,\
        .specialized-card,\
        .custom-solution-card,\
        .admin-panel-card,\
        .cta-box"

    );

    if(!reduceMotion){

        revealItems.forEach(item=>{

            item.style.opacity="0";
            item.style.transform="translateY(50px)";
            item.style.transition="all .75s ease";

        });

    }

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

            observer.unobserve(entry.target);

        });

    },{

        threshold:.15

    });

    revealItems.forEach(item=>{

        observer.observe(item);

    });

});
/*==================================================
NOCTIS TECHNOLOGIES
SOLUTIONS.JS
PART 2
Workflow + Cards + Tilt Effects
==================================================*/

/*==================================================
WORKFLOW ANIMATION
==================================================*/

initialiseWorkflow();

function initialiseWorkflow(){

    const items=document.querySelectorAll(".workflow-item");

    if(!items.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            items.forEach((item,index)=>{

                item.animate([

                    {
                        opacity:0,
                        transform:"translateY(40px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],{

                    duration:700,
                    delay:index*80,
                    easing:"ease",
                    fill:"forwards"

                });

            });

            observer.disconnect();

        });

    },{

        threshold:.18

    });

    observer.observe(items[0]);

}

/*==================================================
BUSINESS SOLUTION CARDS
==================================================*/

initialiseBusinessCards();

function initialiseBusinessCards(){

    const cards=document.querySelectorAll(

        ".business-solution-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.zIndex="2";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.zIndex="1";
            card.style.transform="";

        });

    });

}

/*==================================================
3D CARD TILT
==================================================*/

initialiseTilt();

function initialiseTilt(){

    if(reduceMotion) return;

    const cards=document.querySelectorAll(

        ".business-solution-card,\
         .industry-solution-card,\
         .specialized-card,\
         .admin-panel-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",event=>{

            const rect=card.getBoundingClientRect();

            const x=
            event.clientX-rect.left;

            const y=
            event.clientY-rect.top;

            const rotateY=
            ((x/rect.width)-.5)*12;

            const rotateX=
            ((rect.height/2-y)/rect.height)*12;

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
FEATURE LIST ANIMATION
==================================================*/

document.querySelectorAll(

".solution-feature,\
 .industry-feature,\
 .specialized-feature,\
 .admin-panel-feature,\
 .booking-feature-item,\
 .clinic-feature,\
 .custom-feature-item"

).forEach((item,index)=>{

    if(reduceMotion) return;

    item.style.opacity="0";
    item.style.transform="translateX(-20px)";

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            setTimeout(()=>{

                item.style.transition=
                ".45s ease";

                item.style.opacity="1";
                item.style.transform=
                "translateX(0)";

            },index*35);

            observer.unobserve(item);

        });

    });

    observer.observe(item);

});

/*==================================================
SECTION BADGES
==================================================*/

document.querySelectorAll(

".section-badge"

).forEach(badge=>{

    badge.addEventListener("mouseenter",()=>{

        badge.animate([

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.06)"
            },

            {
                transform:"scale(1)"
            }

        ],{

            duration:350

        });

    });

});

/*==================================================
PART 2 COMPLETE
==================================================*/
/*==================================================
NOCTIS TECHNOLOGIES
SOLUTIONS.JS
PART 3
Booking + Industry + Specialized Solutions
==================================================*/

/*==================================================
BOOKING SECTION
==================================================*/

initialiseBookingCards();

function initialiseBookingCards(){

    const cards=document.querySelectorAll(

        ".booking-intro-card,\
         .booking-features-card,\
         .clinic-solution-card"

    );

    if(!cards.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate([

                {
                    opacity:0,
                    transform:"translateY(50px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:750,
                easing:"ease",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.18

    });

    cards.forEach(card=>observer.observe(card));

}

/*==================================================
INDUSTRY CARDS
==================================================*/

initialiseIndustryCards();

function initialiseIndustryCards(){

    const cards=document.querySelectorAll(

        ".industry-solution-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.animate([

                {
                    transform:"translateY(0)"
                },

                {
                    transform:"translateY(-8px)"
                }

            ],{

                duration:250,
                fill:"forwards"

            });

        });

    });

}

/*==================================================
SPECIALIZED SOLUTIONS
==================================================*/

initialiseSpecializedCards();

function initialiseSpecializedCards(){

    const cards=document.querySelectorAll(

        ".specialized-card"

    );

    if(!cards.length) return;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate([

                {
                    opacity:0,
                    transform:"scale(.96)"
                },

                {
                    opacity:1,
                    transform:"scale(1)"
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
BUTTON HOVER GLOW
==================================================*/

document.querySelectorAll(

".btn-primary"

).forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.boxShadow=

        "0 18px 40px rgba(47,102,243,.28)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.boxShadow="";

    });

});

/*==================================================
COUNTER BADGES
==================================================*/

document.querySelectorAll(

".solution-type-badge,\
 .industry-card-badge,\
 .clinic-solution-badge,\
 .custom-solution-badge"

).forEach(badge=>{

    badge.addEventListener("mouseenter",()=>{

        badge.style.transform="scale(1.06)";

    });

    badge.addEventListener("mouseleave",()=>{

        badge.style.transform="";

    });

});

/*==================================================
PART 3 COMPLETE
==================================================*/
/*==================================================
NOCTIS TECHNOLOGIES
SOLUTIONS.JS
PART 4
Final Utilities + Navigation + Performance
==================================================*/

/*==================================================
ACTIVE NAVIGATION
==================================================*/

initialiseActiveNavigation();

function initialiseActiveNavigation(){

    const sections=document.querySelectorAll("section[id]");
    const links=document.querySelectorAll(
        ".nav-links a,.mobile-menu a"
    );

    if(!sections.length) return;

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-140;

            if(window.scrollY>=top){

                current=section.id;

            }

        });

        links.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

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
LAZY IMAGE LOADING
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
PARALLAX HERO
==================================================*/

if(!reduceMotion){

    window.addEventListener("mousemove",event=>{

        const x=(event.clientX/window.innerWidth-.5)*14;

        const y=(event.clientY/window.innerHeight-.5)*14;

        document.querySelectorAll(

            ".solutions-visual-card"

        ).forEach(card=>{

            card.style.transform=

            `translate(${x}px,${y}px)`;

        });

    });

}

/*==================================================
PAGE READY
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add(

        "page-loaded"

    );

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

"%cNoctis Technologies • Solutions",

"color:#2F66F3;font-size:15px;font-weight:bold;"

);

console.log(

"solutions.js loaded successfully."

);

/*==================================================
END DOMContentLoaded
==================================================*/

});

/*==================================================
SOLUTIONS.JS COMPLETED
==================================================*/