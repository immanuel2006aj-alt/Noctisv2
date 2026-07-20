/*==================================================
NOCTIS TECHNOLOGIES
PRICING.JS
PART 1
Hero + Pricing Cards + Initial Animations
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
".pricing-hero-content"
);

const heroCard=document.querySelector(
".main-price-card"
);

const heroFeatures=document.querySelectorAll(
".hero-price-feature"
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

    heroFeatures.forEach(item=>{

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

        heroContent.style.transition=".8s ease";
        heroContent.style.opacity="1";
        heroContent.style.transform="translateY(0)";

    }

    if(heroCard){

        setTimeout(()=>{

            heroCard.style.transition=".8s ease";
            heroCard.style.opacity="1";
            heroCard.style.transform=
            "translateY(0) scale(1)";

        },250);

    }

    heroFeatures.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.transition=".55s ease";
            item.style.opacity="1";
            item.style.transform="translateX(0)";

        },450+(index*90));

    });

});

/*==================================================
PRICE COUNTER
==================================================*/

const heroPrice=document.querySelector(
".hero-price strong"
);

if(heroPrice){

    const finalValue=1999;

    if(!reduceMotion){

        let current=0;

        const timer=setInterval(()=>{

            current+=41;

            if(current>=finalValue){

                current=finalValue;

                clearInterval(timer);

            }

            heroPrice.textContent=
            "₹"+current.toLocaleString();

        },18);

    }else{

        heroPrice.textContent=
        "₹"+finalValue.toLocaleString();

    }

}

/*==================================================
SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

".pricing-card,\
 .setup-card,\
 .seo-card,\
 .maintenance-card,\
 .branding-card,\
 .integration-card,\
 .admin-card,\
 .amc-card,\
 .policy-card,\
 .faq-item,\
 .pricing-cta-box"

);

if(!reduceMotion){

    revealItems.forEach(item=>{

        item.style.opacity="0";
        item.style.transform="translateY(45px)";
        item.style.transition=".75s ease";

    });

}

const revealObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0)";

        revealObserver.unobserve(entry.target);

    });

},{
    threshold:.18
});

revealItems.forEach(item=>{

    revealObserver.observe(item);

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
PART 1 COMPLETE
==================================================*/
  /*==================================================
NOCTIS TECHNOLOGIES
PRICING.JS
PART 2
Pricing Cards + Setup + SEO + Maintenance + Branding
==================================================*/

/*==================================================
PRICING CARDS
==================================================*/

document.querySelectorAll(".pricing-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
PRICE BADGES
==================================================*/

document.querySelectorAll(

".pricing-card-tag"

).forEach(tag=>{

    tag.addEventListener("mouseenter",()=>{

        tag.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.08)"},
            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});

/*==================================================
SETUP CARDS
==================================================*/

document.querySelectorAll(

".setup-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
SETUP FEATURES
==================================================*/

document.querySelectorAll(

".setup-feature"

).forEach(feature=>{

    feature.addEventListener("mouseenter",()=>{

        feature.style.transform="translateX(8px)";

    });

    feature.addEventListener("mouseleave",()=>{

        feature.style.transform="";

    });

});

/*==================================================
PROVIDER PRICE BOX
==================================================*/

document.querySelectorAll(

".provider-price-box"

).forEach(box=>{

    box.addEventListener("mouseenter",()=>{

        box.style.borderColor="var(--primary)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.borderColor="";

    });

});

/*==================================================
SEO CARDS
==================================================*/

document.querySelectorAll(

".seo-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
SEO FEATURES
==================================================*/

document.querySelectorAll(

".seo-features li"

).forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.paddingLeft="38px";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.paddingLeft="32px";

    });

});

/*==================================================
SEO DISCLAIMER
==================================================*/

document.querySelectorAll(

".seo-disclaimer-icon"

).forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"rotate(0deg)"},
            {transform:"rotate(18deg)"},
            {transform:"rotate(0deg)"}

        ],{

            duration:350

        });

    });

});

/*==================================================
MAINTENANCE CARDS
==================================================*/

document.querySelectorAll(

".maintenance-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
MAINTENANCE ICON
==================================================*/

document.querySelectorAll(

".maintenance-icon"

).forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.12) rotate(6deg)"},
            {transform:"scale(1)"}

        ],{

            duration:320

        });

    });

});

/*==================================================
UPDATE BOX
==================================================*/

document.querySelectorAll(

".update-time-box"

).forEach(box=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform="translateY(-6px)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform="";

    });

});

/*==================================================
BRANDING CARDS
==================================================*/

document.querySelectorAll(

".branding-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
BRANDING ICON
==================================================*/

document.querySelectorAll(

".branding-icon"

).forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.15) rotate(-8deg)"},
            {transform:"scale(1)"}

        ],{

            duration:350

        });

    });

});

/*==================================================
CREATIVE NOTE
==================================================*/

document.querySelectorAll(

".creative-note"

).forEach(note=>{

    note.addEventListener("mouseenter",()=>{

        note.style.transform="translateY(-5px)";

    });

    note.addEventListener("mouseleave",()=>{

        note.style.transform="";

    });

});

/*==================================================
PART 2 COMPLETE
==================================================*/
/*==================================================
NOCTIS TECHNOLOGIES
PRICING.JS
PART 3
Integrations + Admin + AMC + Policy + FAQ
==================================================*/

/*==================================================
INTEGRATION CARDS
==================================================*/

document.querySelectorAll(".integration-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
INTEGRATION ICON
==================================================*/

document.querySelectorAll(".integration-icon").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"scale(1) rotate(0deg)"},
            {transform:"scale(1.15) rotate(8deg)"},
            {transform:"scale(1) rotate(0deg)"}

        ],{

            duration:320

        });

    });

});

/*==================================================
CUSTOM INTEGRATION PRICE
==================================================*/

document.querySelectorAll(".custom-integration-price")

.forEach(price=>{

    price.addEventListener("mouseenter",()=>{

        price.style.borderColor="var(--primary)";

    });

    price.addEventListener("mouseleave",()=>{

        price.style.borderColor="";

    });

});

/*==================================================
ADMIN CARDS
==================================================*/

document.querySelectorAll(".admin-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px) scale(1.01)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
ADMIN FEATURES
==================================================*/

document.querySelectorAll(".admin-features li")

.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.paddingLeft="38px";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.paddingLeft="32px";

    });

});

/*==================================================
AMC CARDS
==================================================*/

document.querySelectorAll(".amc-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
AMC FEATURES
==================================================*/

document.querySelectorAll(".amc-features li")

.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.paddingLeft="38px";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.paddingLeft="32px";

    });

});

/*==================================================
POLICY CARDS
==================================================*/

document.querySelectorAll(".policy-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
FAQ ACCORDION
==================================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");
    const answer=item.querySelector(".faq-answer");
    const icon=item.querySelector(".faq-icon");

    if(!question || !answer) return;

    answer.style.maxHeight="0px";
    answer.style.overflow="hidden";
    answer.style.transition="max-height .4s ease";

    question.addEventListener("click",()=>{

        const opened=item.classList.contains("active");

        faqItems.forEach(other=>{

            other.classList.remove("active");

            const otherAnswer=
            other.querySelector(".faq-answer");

            const otherIcon=
            other.querySelector(".faq-icon");

            if(otherAnswer){

                otherAnswer.style.maxHeight="0px";

            }

            if(otherIcon){

                otherIcon.style.transform="rotate(0deg)";

            }

        });

        if(opened) return;

        item.classList.add("active");

        answer.style.maxHeight=
        answer.scrollHeight+"px";

        if(icon){

            icon.style.transform="rotate(45deg)";

        }

    });

});

/*==================================================
FAQ HOVER
==================================================*/

document.querySelectorAll(".faq-item").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.borderColor="var(--primary)";

    });

    item.addEventListener("mouseleave",()=>{

        if(item.classList.contains("active")) return;

        item.style.borderColor="";

    });

});

/*==================================================
PART 3 COMPLETE
==================================================*/
  /*==================================================
NOCTIS TECHNOLOGIES
PRICING.JS
PART 4
Final Utilities + CTA + Navigation
==================================================*/

/*==================================================
CTA SECTION
==================================================*/

const pricingCTA=document.querySelector(".pricing-cta-box");

if(pricingCTA){

    pricingCTA.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        pricingCTA.style.transform="translateY(-8px)";

    });

    pricingCTA.addEventListener("mouseleave",()=>{

        pricingCTA.style.transform="";

    });

}

/*==================================================
CTA FEATURES
==================================================*/

document.querySelectorAll(

".pricing-cta-feature"

).forEach(feature=>{

    feature.addEventListener("mouseenter",()=>{

        feature.style.transform="translateX(8px)";

    });

    feature.addEventListener("mouseleave",()=>{

        feature.style.transform="";

    });

});

/*==================================================
SECTION BADGES
==================================================*/

document.querySelectorAll(

".section-badge"

).forEach(badge=>{

    badge.addEventListener("mouseenter",()=>{

        badge.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.06)"},
            {transform:"scale(1)"}

        ],{

            duration:300

        });

    });

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll("section[id]");
const navLinks=document.querySelectorAll(
".nav-links a,.mobile-menu a"
);

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(window.scrollY>=top){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==================================================
SCROLL PROGRESS
==================================================*/

const progressBar=document.querySelector(
".scroll-progress"
);

window.addEventListener("scroll",()=>{

    if(!progressBar) return;

    const total=

    document.documentElement.scrollHeight-
    window.innerHeight;

    const value=

    (window.scrollY/total)*100;

    progressBar.style.width=value+"%";

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll(

'a[href^="#"]'

).forEach(link=>{

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
LAZY LOADING
==================================================*/

const lazyImages=document.querySelectorAll(

"img[data-src]"

);

if(lazyImages.length){

    const imageObserver=

    new IntersectionObserver(entries=>{

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
HERO PARALLAX
==================================================*/

if(!reduceMotion){

    const hero=document.querySelector(".pricing-hero");

    hero?.addEventListener("mousemove",event=>{

        const x=

        (event.clientX/window.innerWidth-.5)*10;

        const y=

        (event.clientY/window.innerHeight-.5)*10;

        document.querySelectorAll(

            ".main-price-card"

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

    document.body.classList.add("page-loaded");

});

/*==================================================
REDUCED MOTION
==================================================*/

if(reduceMotion){

    document.querySelectorAll("*").forEach(element=>{

        element.style.animation="none";
        element.style.transition="none";

    });

}

/*==================================================
CONSOLE
==================================================*/

console.log(

"%cNoctis Technologies • Pricing",

"color:#2F66F3;font-size:15px;font-weight:bold;"

);

console.log(

"pricing.js loaded successfully."

);

/*==================================================
END
==================================================*/

});