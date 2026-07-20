/*==================================================
NOCTIS TECHNOLOGIES
INDEX.JS
PART 1
Core Initialisation
==================================================*/

'use strict';

/*==================================================
DOM READY
==================================================*/

document.addEventListener('DOMContentLoaded', () => {

    initialiseHome();

});

/*==================================================
INITIALISE
==================================================*/

function initialiseHome(){

    detectReducedMotion();

    setupRevealAnimations();

    setupResizeHandler();

    setupScrollState();

}

/*==================================================
REDUCED MOTION
==================================================*/

let reducedMotion = false;

function detectReducedMotion(){

    reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

}

/*==================================================
SCROLL REVEAL
==================================================*/

function setupRevealAnimations(){

    const elements = document.querySelectorAll(`

        .hero-content,
        .hero-visual,
        .section-heading,
        .ecosystem-info-card,
        .about-preview-card,
        .about-highlight,
        .service-card,
        .why-card,
        .portfolio-card,
        .pricing-card,
        .testimonial-card,
        .cta-card

    `);

    if(reducedMotion){

        elements.forEach(el=>{
            el.classList.add('revealed');
        });

        return;

    }

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.classList.add('revealed');

            observer.unobserve(entry.target);

        });

    },{

        threshold:0.15,
        rootMargin:"0px 0px -60px 0px"

    });

    elements.forEach((el,index)=>{

        el.style.transitionDelay =
            `${index * 60}ms`;

        observer.observe(el);

    });

}

/*==================================================
SCROLL STATE
==================================================*/

let scrollYPosition = 0;

function setupScrollState(){

    window.addEventListener(

        'scroll',

        ()=>{

            scrollYPosition = window.scrollY;

        },

        { passive:true }

    );

}

/*==================================================
WINDOW RESIZE
==================================================*/

function setupResizeHandler(){

    let timer;

    window.addEventListener(

        'resize',

        ()=>{

            clearTimeout(timer);

            timer = setTimeout(()=>{

                document.documentElement.style.setProperty(

                    '--window-width',

                    `${window.innerWidth}px`

                );

            },150);

        }

    );

}

/*==================================================
HELPERS
==================================================*/

function clamp(value,min,max){

    return Math.min(
        Math.max(value,min),
        max
    );

}

function lerp(start,end,t){

    return start + (end-start)*t;

}

function easeOutCubic(t){

    return 1 - Math.pow(1-t,3);

}
/*==================================================
NOCTIS TECHNOLOGIES
INDEX.JS
PART 2
Hero Animations
==================================================*/

/*==================================================
INITIALISE HERO
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initialiseHero();

});

function initialiseHero(){

    heroEntrance();

    heroFloatingCards();

    heroParallax();

    heroButtonEffects();

}

/*==================================================
HERO ENTRANCE
==================================================*/

function heroEntrance(){

    if(reducedMotion) return;

    const hero = document.querySelector(".hero");

    if(!hero) return;

    const items = hero.querySelectorAll(

        ".hero-badge, h1, p, .hero-buttons, .hero-info"

    );

    items.forEach((item,index)=>{

        item.animate(

            [

                {
                    opacity:0,
                    transform:"translateY(35px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],

            {

                duration:800,

                delay:index*150,

                easing:"cubic-bezier(.22,.61,.36,1)",

                fill:"forwards"

            }

        );

    });

}

/*==================================================
FLOATING HERO CARDS
==================================================*/

function heroFloatingCards(){

    if(reducedMotion) return;

    const cards=document.querySelectorAll(".hero-card");

    cards.forEach((card,index)=>{

        let direction=index%2===0?1:-1;

        let distance=12+(index*4);

        let duration=3200+(index*500);

        card.animate(

            [

                {

                    transform:`translateY(0px)`

                },

                {

                    transform:`translateY(${distance*direction}px)`

                },

                {

                    transform:`translateY(0px)`

                }

            ],

            {

                duration,

                iterations:Infinity,

                easing:"ease-in-out"

            }

        );

    });

}

/*==================================================
HERO PARALLAX
==================================================*/

function heroParallax(){

    if(reducedMotion) return;

    const illustration=document.querySelector(".hero-illustration");

    const glowOne=document.querySelector(".hero-circle-one");

    const glowTwo=document.querySelector(".hero-circle-two");

    if(!illustration) return;

    window.addEventListener(

        "mousemove",

        e=>{

            const x=(e.clientX/window.innerWidth)-0.5;

            const y=(e.clientY/window.innerHeight)-0.5;

            illustration.style.transform=

                `rotateY(${x*10}deg)
                 rotateX(${-y*8}deg)
                 translateZ(0)`;

            if(glowOne){

                glowOne.style.transform=

                `translate(${x*25}px,${y*25}px)`;

            }

            if(glowTwo){

                glowTwo.style.transform=

                `translate(${-x*20}px,${-y*20}px)`;

            }

        },

        {passive:true}

    );

}

/*==================================================
BUTTON MICRO INTERACTION
==================================================*/

function heroButtonEffects(){

    const buttons=document.querySelectorAll(

        ".hero-buttons .btn-primary,.hero-buttons .btn-secondary"

    );

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.animate(

                [

                    {

                        transform:"scale(1)"

                    },

                    {

                        transform:"scale(1.05)"

                    },

                    {

                        transform:"scale(1)"

                    }

                ],

                {

                    duration:300,

                    easing:"ease"

                }

            );

        });

    });

}
/*==================================================
NOCTIS TECHNOLOGIES
INDEX.JS
PART 3
Counters
==================================================*/

/*==================================================
INITIALISE COUNTERS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initialiseCounters();

});

function initialiseCounters(){

    const counters = document.querySelectorAll("[data-counter]");

    if(counters.length){

        const observer = new IntersectionObserver((entries)=>{

            entries.forEach(entry=>{

                if(!entry.isIntersecting) return;

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            });

        },{

            threshold:0.45

        });

        counters.forEach(counter=>{

            observer.observe(counter);

        });

    }

    initialiseStartingPrice();

}

/*==================================================
COUNTER ANIMATION
==================================================*/

function animateCounter(element){

    if(element.dataset.started==="true") return;

    element.dataset.started="true";

    const target = Number(element.dataset.counter) || 0;

    const prefix = element.dataset.prefix || "";

    const suffix = element.dataset.suffix || "";

    const duration = 2200;

    const start = performance.now();

    function update(now){

        const progress = Math.min((now-start)/duration,1);

        const eased = easeOutCubic(progress);

        const value = Math.floor(target*eased);

        element.textContent =
            prefix +
            value.toLocaleString("en-IN") +
            suffix;

        if(progress<1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

/*==================================================
STARTING PRICE COUNTER
₹0 → ₹1,999
==================================================*/

function initialiseStartingPrice(){

    const price = document.getElementById("startingPrice");

    if(!price) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            animateStartingPrice(price);

            observer.disconnect();

        });

    },{

        threshold:0.5

    });

    observer.observe(price);

}

function animateStartingPrice(price){

    if(price.dataset.done==="true") return;

    price.dataset.done="true";

    if(reducedMotion){

        price.textContent = Number(price.dataset.target).toLocaleString("en-IN");

        return;

    }

    const target = Number(price.dataset.target) || 1999;

    const duration = 2500;

    const start = performance.now();

    function frame(time){

        const progress = Math.min((time-start)/duration,1);

        const eased = easeOutCubic(progress);

        const value = Math.floor(target*eased);

        price.textContent = value.toLocaleString("en-IN");

        if(progress<1){

            requestAnimationFrame(frame);

        }

    }

    requestAnimationFrame(frame);

}
/*==================================================
NOCTIS TECHNOLOGIES
INDEX.JS
PART 4
Technology + Services + About
==================================================*/

/*==================================================
INITIALISE
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    technologyEffects();

    serviceCardEffects();

    aboutEffects();

});

/*==================================================
TECH MARQUEE
==================================================*/

function technologyEffects(){

    const marquee=document.querySelector(".tech-track");

    if(!marquee) return;

    document
    .querySelector(".tech-marquee")
    ?.addEventListener("mouseenter",()=>{

        marquee.style.animationPlayState="paused";

    });

    document
    .querySelector(".tech-marquee")
    ?.addEventListener("mouseleave",()=>{

        marquee.style.animationPlayState="running";

    });

}

/*==================================================
SERVICE CARDS
==================================================*/

function serviceCardEffects(){

    const cards=document.querySelectorAll(".service-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",e=>{

            if(reducedMotion) return;

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=((x/rect.width)-0.5)*8;

            const rotateX=((rect.height/2-y)/rect.height)*8;

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
ABOUT PREVIEW
==================================================*/

function aboutEffects(){

    if(reducedMotion) return;

    const floating=document.querySelector(".about-floating-card");

    if(!floating) return;

    floating.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-12px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500,

            iterations:Infinity,

            easing:"ease-in-out"

        }

    );

}

/*==================================================
SECTION PARALLAX
==================================================*/

window.addEventListener(

    "scroll",

    ()=>{

        if(reducedMotion) return;

        const scroll=window.scrollY;

        document.querySelectorAll(

            ".hero-circle,.about-preview-glow"

        ).forEach(el=>{

            el.style.transform=

                `translateY(${scroll*0.08}px)`;

        });

    },

    {passive:true}

);

/*==================================================
CARD RIPPLE EFFECT
==================================================*/

document.querySelectorAll(

    ".service-card,.about-highlight"

).forEach(card=>{

    card.addEventListener("click",e=>{

        const ripple=document.createElement("span");

        ripple.className="card-ripple";

        ripple.style.left=e.offsetX+"px";

        ripple.style.top=e.offsetY+"px";

        card.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});
/*==================================================
NOCTIS TECHNOLOGIES
INDEX.JS
PART 5
Why Choose Us + Portfolio + CTA
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    initialiseWhyChoose();

    initialisePortfolio();

    initialiseCTA();

    initialiseMouseGlow();

});

/*==================================================
WHY CHOOSE US
==================================================*/

function initialiseWhyChoose(){

    const cards=document.querySelectorAll(".why-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.animate(

                [

                    {
                        opacity:0,
                        transform:"translateY(50px)"
                    },

                    {
                        opacity:1,
                        transform:"translateY(0)"
                    }

                ],

                {
                    duration:700,
                    easing:"ease-out",
                    fill:"forwards"
                }

            );

            observer.unobserve(entry.target);

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>observer.observe(card));

}

/*==================================================
PORTFOLIO
==================================================*/

function initialisePortfolio(){

    const items=document.querySelectorAll(".portfolio-card");

    items.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            if(reducedMotion) return;

            card.animate(

                [

                    {
                        transform:"translateY(0)"
                    },

                    {
                        transform:"translateY(-12px)"
                    }

                ],

                {
                    duration:250,
                    fill:"forwards"
                }

            );

        });

        card.addEventListener("mouseleave",()=>{

            card.animate(

                [

                    {
                        transform:"translateY(-12px)"
                    },

                    {
                        transform:"translateY(0)"
                    }

                ],

                {
                    duration:250,
                    fill:"forwards"
                }

            );

        });

    });

}

/*==================================================
CTA SECTION
==================================================*/

function initialiseCTA(){

    const button=document.querySelector(".cta .btn-primary");

    if(!button) return;

    button.addEventListener("mouseenter",()=>{

        if(reducedMotion) return;

        button.animate(

            [

                {
                    transform:"scale(1)"
                },

                {
                    transform:"scale(1.08)"
                },

                {
                    transform:"scale(1)"
                }

            ],

            {

                duration:400

            }

        );

    });

}

/*==================================================
PREMIUM MOUSE GLOW
==================================================*/

function initialiseMouseGlow(){

    if(reducedMotion) return;

    const glow=document.querySelector(".mouse-glow");

    if(!glow) return;

    window.addEventListener(

        "pointermove",

        e=>{

            glow.style.left=e.clientX+"px";

            glow.style.top=e.clientY+"px";

        },

        {

            passive:true

        }

    );

}

/*==================================================
SCROLL PROGRESS
==================================================*/

const progress=document.querySelector(".scroll-progress");

if(progress){

    window.addEventListener(

        "scroll",

        ()=>{

            const max=document.documentElement.scrollHeight-window.innerHeight;

            const percent=(window.scrollY/max)*100;

            progress.style.width=percent+"%";

        },

        {

            passive:true

        }

    );

}

/*==================================================
SECTION STAGGER
==================================================*/

document.querySelectorAll("section").forEach(section=>{

    const children=section.querySelectorAll(

        ".service-card,.why-card,.portfolio-card"

    );

    children.forEach((item,index)=>{

        item.style.transitionDelay=(index*80)+"ms";

    });

});
/*==================================================
NOCTIS TECHNOLOGIES
INDEX.JS
PART 6
Final Optimisation
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initialiseBackToTop();

    initialiseLazyImages();

    initialiseVisibilityHandler();

    initialiseExternalLinks();

    initialisePerformance();

});

/*==================================================
BACK TO TOP
==================================================*/

function initialiseBackToTop(){

    const button=document.querySelector(".back-to-top");

    if(!button) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    },{passive:true});

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior: reducedMotion ? "auto" : "smooth"

        });

    });

}

/*==================================================
LAZY IMAGE FADE
==================================================*/

function initialiseLazyImages(){

    const images=document.querySelectorAll("img[loading='lazy']");

    images.forEach(img=>{

        if(img.complete){

            img.classList.add("loaded");

            return;

        }

        img.addEventListener("load",()=>{

            img.classList.add("loaded");

        });

    });

}

/*==================================================
TAB VISIBILITY
==================================================*/

function initialiseVisibilityHandler(){

    document.addEventListener("visibilitychange",()=>{

        if(document.hidden){

            document.documentElement.classList.add("page-hidden");

        }else{

            document.documentElement.classList.remove("page-hidden");

        }

    });

}

/*==================================================
EXTERNAL LINKS
==================================================*/

function initialiseExternalLinks(){

    document.querySelectorAll("a[target='_blank']").forEach(link=>{

        if(!link.hasAttribute("rel")){

            link.setAttribute(

                "rel",

                "noopener noreferrer"

            );

        }

    });

}

/*==================================================
PERFORMANCE
==================================================*/

function initialisePerformance(){

    window.requestIdleCallback?.(()=>{

        console.log(

            "%cNoctis Technologies",

            "color:#d4af37;font-size:18px;font-weight:bold;"

        );

        console.log(

            "Homepage Initialised Successfully."

        );

    });

}

/*==================================================
GLOBAL ERROR SAFETY
==================================================*/

window.addEventListener("error",(event)=>{

    console.warn(

        "Noctis JS Error:",

        event.message

    );

});

/*==================================================
UNHANDLED PROMISES
==================================================*/

window.addEventListener(

    "unhandledrejection",

    event=>{

        console.warn(

            "Unhandled Promise:",

            event.reason

        );

    }

);

/*==================================================
PAGE LOADED
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("page-loaded");

});

/*==================================================
END OF INDEX.JS
==================================================*/