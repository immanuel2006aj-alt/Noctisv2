/*==================================================
NOCTIS TECHNOLOGIES
TEAM.JS
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
".team-hero-content"
);

const heroCard=document.querySelector(
".team-visual-card"
);

const heroButtons=document.querySelectorAll(
".team-hero-buttons .btn-primary,.team-hero-buttons .btn-secondary"
);

const roleItems=document.querySelectorAll(
".team-role-item"
);

const heroNote=document.querySelector(
".team-hero-note"
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
        heroCard.style.transform="translateY(45px) scale(.96)";

    }

    roleItems.forEach(item=>{

        item.style.opacity="0";
        item.style.transform="translateX(35px)";

    });

    if(heroNote){

        heroNote.style.opacity="0";
        heroNote.style.transform="translateY(20px)";

    }

}

/*==================================================
PAGE LOAD ANIMATION
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
            heroCard.style.transform="translateY(0) scale(1)";

        },250);

    }

    roleItems.forEach((item,index)=>{

        setTimeout(()=>{

            item.style.transition=".55s ease";
            item.style.opacity="1";
            item.style.transform="translateX(0)";

        },450+(index*120));

    });

    if(heroNote){

        setTimeout(()=>{

            heroNote.style.transition=".6s ease";
            heroNote.style.opacity="1";
            heroNote.style.transform="translateY(0)";

        },900);

    }

});

/*==================================================
BUTTON HOVER
==================================================*/

heroButtons.forEach(button=>{

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
TEAM VISUAL CARD
==================================================*/

if(heroCard){

    heroCard.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        heroCard.style.transform=
        "translateY(-8px) scale(1.02)";

    });

    heroCard.addEventListener("mouseleave",()=>{

        heroCard.style.transform="";

    });

}

/*==================================================
ROLE ITEM INTERACTION
==================================================*/

roleItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        item.style.transform="translateX(8px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="";

    });

});

/*==================================================
HERO PARALLAX
==================================================*/

if(!reduceMotion){

const hero=document.querySelector(".team-hero");

hero?.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*10;
const y=(e.clientY/window.innerHeight-.5)*10;

heroCard.style.transform=
`translate(${x}px,${y}px)`;

});

hero?.addEventListener("mouseleave",()=>{

heroCard.style.transform="";

});

}

/*==================================================
SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

".team-intro-card,\
.team-member-card,\
.team-workflow-item,\
.team-value-card,\
.leadership-profile-card,\
.leadership-focus-item,\
.backend-profile-card,\
.backend-focus-item"

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

},{threshold:.15});

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*==================================================
PART 1 COMPLETE
==================================================*/
/*==================================================
NOCTIS TECHNOLOGIES
TEAM.JS
PART 2
Introduction + Core Team + Workflow
==================================================*/

/*==================================================
TEAM INTRODUCTION CARDS
==================================================*/

document.querySelectorAll(".team-intro-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
INTRODUCTION NUMBERS
==================================================*/

document.querySelectorAll(".team-intro-number").forEach(number=>{

    number.addEventListener("mouseenter",()=>{

        number.animate([

            {transform:"scale(1) rotate(0deg)"},
            {transform:"scale(1.08) rotate(-6deg)"},
            {transform:"scale(1)"}

        ],{

            duration:320

        });

    });

});

/*==================================================
INTRODUCTION MESSAGE
==================================================*/

const introMessage=document.querySelector(
".team-introduction-message"
);

if(introMessage){

    introMessage.addEventListener("mouseenter",()=>{

        introMessage.style.transform="translateY(-6px)";

    });

    introMessage.addEventListener("mouseleave",()=>{

        introMessage.style.transform="";

    });

}

/*==================================================
CORE TEAM MEMBER CARDS
==================================================*/

document.querySelectorAll(".team-member-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
PROFILE IMAGES
==================================================*/

document.querySelectorAll(

".team-member-image img"

).forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        image.style.transform="scale(1.05)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="";

    });

});

/*==================================================
PROFILE PLACEHOLDER
==================================================*/

document.querySelectorAll(

".profile-placeholder"

).forEach(box=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform="scale(1.03)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform="";

    });

});

/*==================================================
TEAM TAGS
==================================================*/

document.querySelectorAll(

".team-member-tags span"

).forEach(tag=>{

    tag.addEventListener("mouseenter",()=>{

        tag.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.08)"},
            {transform:"scale(1)"}

        ],{

            duration:250

        });

    });

});

/*==================================================
EXPERIENCE BADGES
==================================================*/

document.querySelectorAll(

".team-member-experience"

).forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.borderColor="var(--primary)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.borderColor="";

    });

});

/*==================================================
FUTURE TEAM NOTE
==================================================*/

const futureNote=document.querySelector(
".future-team-note"
);

if(futureNote){

    futureNote.addEventListener("mouseenter",()=>{

        futureNote.style.transform="translateY(-6px)";

    });

    futureNote.addEventListener("mouseleave",()=>{

        futureNote.style.transform="";

    });

}

/*==================================================
WORKFLOW ITEMS
==================================================*/

document.querySelectorAll(

".team-workflow-item"

).forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        item.style.transform="translateY(-8px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="";

    });

});

/*==================================================
WORKFLOW NUMBERS
==================================================*/

document.querySelectorAll(

".team-workflow-number"

).forEach(number=>{

    number.addEventListener("mouseenter",()=>{

        number.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.12) rotate(8deg)"},
            {transform:"scale(1)"}

        ],{

            duration:320

        });

    });

});

/*==================================================
WORKFLOW MESSAGE
==================================================*/

const workflowMessage=document.querySelector(
".team-workflow-message"
);

if(workflowMessage){

    workflowMessage.addEventListener("mouseenter",()=>{

        workflowMessage.style.transform="translateY(-6px)";

    });

    workflowMessage.addEventListener("mouseleave",()=>{

        workflowMessage.style.transform="";

    });

}

/*==================================================
PART 2 COMPLETE
==================================================*/
  /*==================================================
NOCTIS TECHNOLOGIES
TEAM.JS
PART 3
Values + Leadership + Backend Focus
==================================================*/

/*==================================================
TEAM VALUE CARDS
==================================================*/

document.querySelectorAll(".team-value-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==================================================
TEAM VALUE ICON
==================================================*/

document.querySelectorAll(".team-value-icon").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.12) rotate(8deg)"},
            {transform:"scale(1)"}

        ],{

            duration:320

        });

    });

});

/*==================================================
TEAM VALUE NUMBER
==================================================*/

document.querySelectorAll(".team-value-number").forEach(number=>{

    number.addEventListener("mouseenter",()=>{

        number.style.borderColor="var(--primary)";

    });

    number.addEventListener("mouseleave",()=>{

        number.style.borderColor="";

    });

});

/*==================================================
LEADERSHIP PROFILE
==================================================*/

const leadershipCard=document.querySelector(
".leadership-profile-card"
);

if(leadershipCard){

    leadershipCard.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        leadershipCard.style.transform=
        "translateY(-8px) scale(1.01)";

    });

    leadershipCard.addEventListener("mouseleave",()=>{

        leadershipCard.style.transform="";

    });

}

/*==================================================
LEADERSHIP IMAGE
==================================================*/

document.querySelectorAll(

".leadership-profile-image img"

).forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.05)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="";

    });

});

/*==================================================
LEADERSHIP PLACEHOLDER
==================================================*/

document.querySelectorAll(

".leadership-profile-placeholder"

).forEach(box=>{

    box.addEventListener("mouseenter",()=>{

        box.style.transform="scale(1.03)";

    });

    box.addEventListener("mouseleave",()=>{

        box.style.transform="";

    });

});

/*==================================================
LEADERSHIP FOCUS ITEMS
==================================================*/

document.querySelectorAll(

".leadership-focus-item"

).forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateY(-5px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="";

    });

});

/*==================================================
BACKEND PROFILE
==================================================*/

const backendCard=document.querySelector(
".backend-profile-card"
);

if(backendCard){

    backendCard.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        backendCard.style.transform=
        "translateY(-8px) scale(1.01)";

    });

    backendCard.addEventListener("mouseleave",()=>{

        backendCard.style.transform="";

    });

}

/*==================================================
BACKEND IMAGE
==================================================*/

document.querySelectorAll(

".backend-profile-image img"

).forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.05)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="";

    });

});

/*==================================================
BACKEND EXPERIENCE
==================================================*/

const backendExperience=document.querySelector(
".backend-experience"
);

if(backendExperience){

    backendExperience.addEventListener("mouseenter",()=>{

        backendExperience.style.borderColor="var(--primary)";

    });

    backendExperience.addEventListener("mouseleave",()=>{

        backendExperience.style.borderColor="";

    });

}

/*==================================================
BACKEND FOCUS ITEMS
==================================================*/

document.querySelectorAll(

".backend-focus-item"

).forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        item.style.transform="translateY(-5px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="";

    });

});

/*==================================================
BACKEND ICON
==================================================*/

document.querySelectorAll(

".backend-focus-icon"

).forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.15) rotate(10deg)"},
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

        badge.animate([

            {transform:"scale(1)"},
            {transform:"scale(1.06)"},
            {transform:"scale(1)"}

        ],{

            duration:250

        });

    });

});

/*==================================================
PART 3 COMPLETE
==================================================*/
  /*==================================================
NOCTIS TECHNOLOGIES
TEAM.JS
PART 4
Final Utilities
==================================================*/

/*==================================================
CTA SECTION
==================================================*/

const teamCTA=document.querySelector(
".team-cta,.team-cta-box,.team-contact-cta"
);

if(teamCTA){

    teamCTA.addEventListener("mouseenter",()=>{

        if(reduceMotion) return;

        teamCTA.style.transform="translateY(-8px)";

    });

    teamCTA.addEventListener("mouseleave",()=>{

        teamCTA.style.transform="";

    });

}

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

const progress=document.querySelector(
".scroll-progress"
);

window.addEventListener("scroll",()=>{

    if(!progress) return;

    const total=

    document.documentElement.scrollHeight-
    window.innerHeight;

    progress.style.width=

    (window.scrollY/total)*100+"%";

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
LAZY IMAGE LOADING
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

"%cNoctis Technologies • Team",

"color:#2F66F3;font-size:15px;font-weight:bold;"

);

console.log(

"team.js loaded successfully."

);

/*==================================================
END
==================================================*/
    /*==================================================
MOBILE MENU
==================================================*/

const menuToggle=document.querySelector(".menu-toggle");
const mobileMenu=document.querySelector(".mobile-menu");

if(menuToggle && mobileMenu){

    menuToggle.addEventListener("click",()=>{

        mobileMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            mobileMenu.classList.contains("active")
        );

    });

    mobileMenu.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}

});
