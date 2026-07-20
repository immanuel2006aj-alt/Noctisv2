/*==================================================
NOCTIS TECHNOLOGIES
PORTFOLIO.JS
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

"use strict";

/*==================================================
REDUCED MOTION
==================================================*/

const reduceMotion=window.matchMedia(
"(prefers-reduced-motion: reduce)"
).matches;

/*==================================================
HERO ELEMENTS
==================================================*/

const heroContent=document.querySelector(
".portfolio-hero-content"
);

const heroCard=document.querySelector(
".portfolio-overview-card"
);

const projectTypes=document.querySelectorAll(
".portfolio-project-type"
);

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

    projectTypes.forEach(item=>{

        item.style.opacity="0";
        item.style.transform="translateX(25px)";

    });

}

/*==================================================
PAGE LOAD
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

    projectTypes.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.transition=".55s ease";
            item.style.opacity="1";
            item.style.transform="translateX(0)";

        },420+(index*90));

    });

});

/*==================================================
SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

".project-card,\
 .impact-card,\
 .portfolio-cta-box"

);

if(!reduceMotion){

    revealItems.forEach(item=>{

        item.style.opacity="0";
        item.style.transform="translateY(50px)";
        item.style.transition=".75s ease";

    });

}

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        entry.target.style.opacity="1";
        entry.target.style.transform=
        "translateY(0)";

        observer.unobserve(entry.target);

    });

},{

    threshold:.18

});

revealItems.forEach(item=>{

    observer.observe(item);

});

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
NOCTIS TECHNOLOGIES
PORTFOLIO.JS
PART 2
Project Cards + Browser Preview + Tilt
==================================================*/

/*==================================================
PROJECT CARD HOVER
==================================================*/

initialiseProjectCards();

function initialiseProjectCards(){

    const cards=document.querySelectorAll(
        ".project-card"
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
3D TILT EFFECT
==================================================*/

initialiseProjectTilt();

function initialiseProjectTilt(){

    if(reduceMotion) return;

    const cards=document.querySelectorAll(
        ".project-card"
    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",event=>{

            const rect=card.getBoundingClientRect();

            const x=event.clientX-rect.left;
            const y=event.clientY-rect.top;

            const rotateY=((x/rect.width)-.5)*10;
            const rotateX=((rect.height/2-y)/rect.height)*10;

            card.style.transform=`
            perspective(900px)
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
BROWSER MOCKUP FLOAT
==================================================*/

document.querySelectorAll(
".project-browser"
).forEach(browser=>{

    if(reduceMotion) return;

    browser.animate(

    [

        {
            transform:"translateY(0px)"
        },

        {
            transform:"translateY(-8px)"
        },

        {
            transform:"translateY(0px)"
        }

    ],

    {

        duration:3500,
        iterations:Infinity,
        easing:"ease-in-out"

    });

});

/*==================================================
PROJECT TAGS
==================================================*/

document.querySelectorAll(
".project-tags span"
).forEach(tag=>{

    tag.addEventListener("mouseenter",()=>{

        tag.style.transform="translateY(-3px)";

    });

    tag.addEventListener("mouseleave",()=>{

        tag.style.transform="";

    });

});

/*==================================================
PREVIEW IMAGE EFFECT
==================================================*/

document.querySelectorAll(
".project-thumbnail"
).forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});

/*==================================================
CATEGORY BADGE
==================================================*/

document.querySelectorAll(

".project-category"

).forEach(badge=>{

    badge.addEventListener("mouseenter",()=>{

        badge.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.08)"},
            {transform:"scale(1)"}

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
PORTFOLIO.JS
PART 3
Impact Cards + CTA + Scroll Effects
==================================================*/

/*==================================================
IMPACT CARDS
==================================================*/

initialiseImpactCards();

function initialiseImpactCards(){

    const cards=document.querySelectorAll(
        ".impact-card"
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

                duration:700,
                easing:"ease",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.18

    });

    cards.forEach(card=>{

        observer.observe(card);

    });

}

/*==================================================
IMPACT ICONS
==================================================*/

document.querySelectorAll(

".impact-icon"

).forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"rotate(0deg) scale(1)"},
            {transform:"rotate(10deg) scale(1.08)"},
            {transform:"rotate(0deg) scale(1)"}

        ],{

            duration:450

        });

    });

});

/*==================================================
CTA BOX
==================================================*/

const ctaBox=document.querySelector(
".portfolio-cta-box"
);

if(ctaBox && !reduceMotion){

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

                duration:800,
                easing:"ease",
                fill:"forwards"

            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.2

    });

    observer.observe(ctaBox);

}

/*==================================================
CTA FEATURES
==================================================*/

document.querySelectorAll(

".portfolio-cta-feature"

).forEach(feature=>{

    feature.addEventListener("mouseenter",()=>{

        feature.style.transform="translateY(-6px)";

    });

    feature.addEventListener("mouseleave",()=>{

        feature.style.transform="";

    });

});

/*==================================================
CHECK ICON
==================================================*/

document.querySelectorAll(

".portfolio-cta-check"

).forEach(check=>{

    check.addEventListener("mouseenter",()=>{

        check.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.2)"},
            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});

/*==================================================
SECTION BADGES
==================================================*/

document.querySelectorAll(

".section-badge"

).forEach(badge=>{

    badge.addEventListener("mouseenter",()=>{

        badge.style.transform="scale(1.05)";

    });

    badge.addEventListener("mouseleave",()=>{

        badge.style.transform="";

    });

});

/*==================================================
PART 3 COMPLETE
==================================================*/
  