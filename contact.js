/*==================================================
CONTACT PAGE JAVASCRIPT
PART 1
INITIALIZATION
SCROLL REVEAL
UTILITY FUNCTIONS
==================================================*/

'use strict';


/*==================================================
DOM READY
==================================================*/

document.addEventListener('DOMContentLoaded', () => {

    initializeContactPage();

});


/*==================================================
INITIALIZE PAGE
==================================================*/

function initializeContactPage(){

    setupScrollReveal();

    setupSmoothAnchors();

    revealHeroImmediately();

}


/*==================================================
COMMON SELECTORS
==================================================*/

const $ = (selector, scope = document) =>
    scope.querySelector(selector);

const $$ = (selector, scope = document) =>
    [...scope.querySelectorAll(selector)];


/*==================================================
THROTTLE
==================================================*/

function throttle(callback, delay = 100){

    let waiting = false;

    return (...args)=>{

        if(waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(()=>{

            waiting = false;

        },delay);

    };

}


/*==================================================
SCROLL REVEAL
==================================================*/

function setupScrollReveal(){

    const elements = $$(`

        .section-heading,
        .contact-hero-content,
        .contact-hero-visual,
        .contact-form-intro,
        .contact-form-card,
        .process-card,
        .team-card,
        .location-info-card,
        .map-card,
        .faq-item,
        .contact-cta-card,
        .process-note,
        .team-support-note,
        .location-note

    `);

    elements.forEach(element=>{

        element.style.opacity = "0";

        element.style.transform = "translateY(45px)";

        element.style.transition =

            "opacity .8s ease, transform .8s ease";

    });

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        });

    },{

        threshold:0.15,

        rootMargin:"0px 0px -80px 0px"

    });

    elements.forEach(element=>observer.observe(element));

}


/*==================================================
HERO FIRST LOAD
==================================================*/

function revealHeroImmediately(){

    const hero = $(".contact-hero-content");

    const visual = $(".contact-hero-visual");

    requestAnimationFrame(()=>{

        if(hero){

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        }

        if(visual){

            visual.style.opacity = "1";

            visual.style.transform = "translateY(0)";

        }

    });

}


/*==================================================
SMOOTH INTERNAL LINKS
==================================================*/

function setupSmoothAnchors(){

    $$('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",(event)=>{

            const target = document.querySelector(

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

}


/*==================================================
WINDOW RESIZE
==================================================*/

window.addEventListener(

    "resize",

    throttle(()=>{

        document.documentElement.style.setProperty(

            "--vh",

            `${window.innerHeight * 0.01}px`

        );

    })

);
/*==================================================
CONTACT PAGE JAVASCRIPT
PART 2
HERO
QUICK CONTACT CARD
FLOATING EFFECTS
==================================================*/


/*==================================================
HERO PARALLAX
==================================================*/

function initializeHeroParallax(){

    const hero = $(".contact-hero");

    const card = $(".contact-quick-card");

    if(!hero || !card) return;

    window.addEventListener("scroll",

        throttle(()=>{

            const offset = window.scrollY;

            if(offset > hero.offsetHeight) return;

            card.style.transform =
                `translateY(${offset * 0.12}px)`;

        },16)

    );

}

initializeHeroParallax();


/*==================================================
HERO BUTTON RIPPLE
==================================================*/

function initializeHeroButtons(){

    $$(".contact-hero .btn-primary, .contact-hero .btn-secondary")

    .forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateY(-5px) scale(1.02)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

}

initializeHeroButtons();


/*==================================================
QUICK CONTACT CARD FLOAT
==================================================*/

function initializeFloatingCard(){

    const card = $(".contact-quick-card");

    if(!card) return;

    let angle = 0;

    function animate(){

        angle += 0.02;

        card.style.transform =

        `translateY(${Math.sin(angle)*8}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}

initializeFloatingCard();


/*==================================================
QUICK CONTACT ITEMS
==================================================*/

function initializeQuickContactItems(){

    const items = $$(".quick-contact-item");

    items.forEach((item,index)=>{

        item.style.opacity="0";

        item.style.transform="translateX(30px)";

        item.style.transition=

        `all .6s ease ${index*0.12}s`;

    });

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            entry.target.style.opacity="1";

            entry.target.style.transform="translateX(0)";

        });

    },{

        threshold:.2

    });

    items.forEach(item=>observer.observe(item));

}

initializeQuickContactItems();


/*==================================================
CARD GLOW FOLLOW
==================================================*/

function initializeCardGlow(){

    const card=$(".contact-quick-card");

    if(!card) return;

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(47,102,243,.12),
        rgba(255,255,255,.92) 45%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,.84)";

    });

}

initializeCardGlow();


/*==================================================
AVAILABILITY DOT PULSE
==================================================*/

function initializeAvailabilityPulse(){

    const dot=$(".availability-dot");

    if(!dot) return;

    let scale=1;

    let grow=true;

    function pulse(){

        if(grow){

            scale+=0.01;

            if(scale>=1.18) grow=false;

        }else{

            scale-=0.01;

            if(scale<=1) grow=true;

        }

        dot.style.transform=`scale(${scale})`;

        requestAnimationFrame(pulse);

    }

    pulse();

}

initializeAvailabilityPulse();


/*==================================================
SECTION BADGES
==================================================*/

function animateBadges(){

    const badges=$$(".section-badge");

    badges.forEach(badge=>{

        badge.addEventListener("mouseenter",()=>{

            badge.style.transform="scale(1.05)";

        });

        badge.addEventListener("mouseleave",()=>{

            badge.style.transform="scale(1)";

        });

    });

}

animateBadges();


/*==================================================
END OF PART 2
==================================================*/
/*==================================================
CONTACT PAGE JAVASCRIPT
PART 3
CONTACT FORM
VALIDATION
SUCCESS / ERROR
==================================================*/


/*==================================================
INITIALIZE CONTACT FORM
==================================================*/
const BOT_TOKEN = "YOUR_BOT_TOKEN";
const CHAT_ID = "YOUR_CHAT_ID";

const message = `
🚀 New Project Enquiry

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
💼 Service: ${service}
💰 Budget: ${budget}

📝 Project:
${project}
`;

fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
    })
})
.then(() => {
    showSuccess();
    form.reset();
})
.catch(() => {
    showError();
});

/*==================================================
INPUT ANIMATION
==================================================*/

function initializeInputAnimation(form){

    const fields = form.querySelectorAll(".form-control");

    fields.forEach(field=>{

        field.addEventListener("focus",()=>{

            field.parentElement.classList.add("focused");

        });

        field.addEventListener("blur",()=>{

            if(field.value.trim()===""){

                field.parentElement.classList.remove("focused");

            }

        });

    });

}


/*==================================================
TEXTAREA CHARACTER COUNTER
==================================================*/

function initializeTextareaCounter(form){

    const textarea = form.querySelector("textarea");

    if(!textarea) return;

    const counter = document.createElement("small");

    counter.style.display="block";
    counter.style.marginTop="8px";
    counter.style.color="#8b8b8b";
    counter.style.fontSize=".8rem";

    textarea.parentElement.appendChild(counter);

    function updateCounter(){

        counter.textContent =
            `${textarea.value.length} / 1000 Characters`;

    }

    textarea.addEventListener("input",updateCounter);

    updateCounter();

}


/*==================================================
FORM VALIDATION
==================================================*/

function initializeFormValidation(form){

    form.addEventListener("submit",(event)=>{

        event.preventDefault();

        clearErrors(form);

        let valid=true;

        const requiredFields =
            form.querySelectorAll("[required]");

        requiredFields.forEach(field=>{

            if(field.value.trim()===""){

                showFieldError(field,"This field is required");

                valid=false;

            }

        });

        const email =
            form.querySelector('input[type="email"]');

        if(email && email.value){

            const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!pattern.test(email.value)){

                showFieldError(
                    email,
                    "Enter a valid email address"
                );

                valid=false;

            }

        }

        if(valid){

            submitForm(form);

        }

    });

}


/*==================================================
FIELD ERROR
==================================================*/

function showFieldError(field,message){

    field.style.borderColor="#EF4444";

    const error=document.createElement("small");

    error.className="field-error";

    error.textContent=message;

    error.style.color="#EF4444";

    error.style.display="block";

    error.style.marginTop="6px";

    field.parentElement.appendChild(error);

}


/*==================================================
CLEAR ERRORS
==================================================*/

function clearErrors(form){

    form.querySelectorAll(".field-error")

        .forEach(error=>error.remove());

    form.querySelectorAll(".form-control")

        .forEach(field=>{

            field.style.borderColor="";

        });

}


/*==================================================
SUBMIT ANIMATION
==================================================*/

function submitForm(form){

    const button =
        form.querySelector(".btn-primary");

    const originalText=button.innerHTML;

    button.disabled=true;

    button.innerHTML="Sending...";

    button.style.opacity=".8";

    setTimeout(()=>{

        button.disabled=false;

        button.innerHTML=originalText;

        button.style.opacity="1";

        showSuccess();

        form.reset();

    },1800);

}


/*==================================================
SUCCESS MESSAGE
==================================================*/

function showSuccess(){

    const success=$(".form-success");

    if(!success) return;

    success.classList.add("active");

    success.scrollIntoView({

        behavior:"smooth",

        block:"center"

    });

    setTimeout(()=>{

        success.classList.remove("active");

    },6000);

}


/*==================================================
ERROR MESSAGE
==================================================*/

function showError(message){

    const error=$(".form-error");

    if(!error) return;

    error.textContent=message;

    error.classList.add("active");

    setTimeout(()=>{

        error.classList.remove("active");

    },5000);

}


/*==================================================
END OF PART 3
==================================================*/
/*==================================================
CONTACT PAGE JAVASCRIPT
PART 4
PROCESS CARDS
TEAM CARDS
PREMIUM CARD ANIMATIONS
==================================================*/


/*==================================================
PROCESS CARD STAGGER
==================================================*/

function initializeProcessCards(){

    const cards = document.querySelectorAll(".process-card");

    if(!cards.length) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.style.opacity="1";
                    card.style.transform="translateY(0)";

                },index*180);

            });

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    cards.forEach(card=>{

        card.style.opacity="0";
        card.style.transform="translateY(50px)";
        card.style.transition=".7s ease";

        observer.observe(card);

    });

}

initializeProcessCards();


/*==================================================
PROCESS CARD HOVER
==================================================*/

document.querySelectorAll(".process-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/*==================================================
TEAM CARD REVEAL
==================================================*/

function initializeTeamCards(){

    const cards=document.querySelectorAll(".team-card");

    if(!cards.length) return;

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.style.opacity="1";
                    card.style.transform="translateY(0)";

                },index*120);

            });

            observer.disconnect();

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.style.opacity="0";
        card.style.transform="translateY(45px)";
        card.style.transition=".7s ease";

        observer.observe(card);

    });

}

initializeTeamCards();


/*==================================================
TEAM IMAGE ZOOM
==================================================*/

document.querySelectorAll(".team-photo img").forEach(image=>{

    image.style.transition=".45s ease";

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


/*==================================================
3D CARD TILT
==================================================*/

document.querySelectorAll(".team-card").forEach(card=>{

    card.addEventListener("mousemove",(event)=>{

        const rect=card.getBoundingClientRect();

        const x=event.clientX-rect.left;

        const y=event.clientY-rect.top;

        const rotateY=(x-rect.width/2)/18;

        const rotateX=-(y-rect.height/2)/18;

        card.style.transform=

        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

    });

});


/*==================================================
FEATURED CARD GLOW
==================================================*/

document.querySelectorAll(".featured").forEach(card=>{

    let glow=0;
    let direction=true;

    function animate(){

        if(direction){

            glow+=0.4;

            if(glow>=12) direction=false;

        }else{

            glow-=0.4;

            if(glow<=4) direction=true;

        }

        card.style.boxShadow=

        `0 15px ${glow}px rgba(47,102,243,.18)`;

        requestAnimationFrame(animate);

    }

    animate();

});


/*==================================================
SUPPORT NOTE ANIMATION
==================================================*/

const supportNote=document.querySelector(".team-support-note");

if(supportNote){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                supportNote.animate([

                    {

                        opacity:0,

                        transform:"translateY(40px)"

                    },

                    {

                        opacity:1,

                        transform:"translateY(0)"

                    }

                ],{

                    duration:900,

                    easing:"ease-out",

                    fill:"forwards"

                });

            }

        });

    });

    observer.observe(supportNote);

}


/*==================================================
END OF PART 4
==================================================*/
/*==================================================
CONTACT PAGE JAVASCRIPT
PART 5
LOCATION
GOOGLE MAP
FAQ ACCORDION
==================================================*/


/*==================================================
LOCATION SECTION REVEAL
==================================================*/

function initializeLocationSection(){

    const elements = document.querySelectorAll(
        ".location-info-card, .map-card, .location-note"
    );

    const observer = new IntersectionObserver((entries)=>{

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
                duration:800,
                easing:"ease-out",
                fill:"forwards"
            });

            observer.unobserve(entry.target);

        });

    },{

        threshold:.2

    });

    elements.forEach(item=>observer.observe(item));

}

initializeLocationSection();


/*==================================================
GOOGLE MAP PARALLAX
==================================================*/

function initializeMapParallax(){

    const map = document.querySelector(".map-card");

    if(!map) return;

    window.addEventListener("scroll",

        throttle(()=>{

            const rect = map.getBoundingClientRect();

            const offset = rect.top * 0.04;

            map.style.transform =
                `translateY(${offset}px)`;

        },16)

    );

}

initializeMapParallax();


/*==================================================
MAP LABEL FLOAT
==================================================*/

function initializeMapLabel(){

    const label = document.querySelector(".map-location-label");

    if(!label) return;

    let angle = 0;

    function animate(){

        angle += 0.02;

        label.style.transform =
            `translateY(${Math.sin(angle)*5}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}

initializeMapLabel();


/*==================================================
FAQ ACCORDION
==================================================*/

function initializeFAQ(){

    const items = document.querySelectorAll(".faq-item");

    if(!items.length) return;

    items.forEach(item=>{

        const question = item.querySelector(".faq-question");

        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click",()=>{

            const opened =
                item.classList.contains("active");

            items.forEach(i=>{

                i.classList.remove("active");

                const a=i.querySelector(".faq-answer");

                if(a) a.style.maxHeight=null;

            });

            if(!opened){

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight+"px";

            }

        });

    });

}

initializeFAQ();


/*==================================================
FAQ STAGGER REVEAL
==================================================*/

function initializeFAQReveal(){

    const faqItems =
        document.querySelectorAll(".faq-item");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            faqItems.forEach((item,index)=>{

                setTimeout(()=>{

                    item.animate([
                        {
                            opacity:0,
                            transform:"translateY(35px)"
                        },
                        {
                            opacity:1,
                            transform:"translateY(0)"
                        }
                    ],{

                        duration:650,
                        easing:"ease-out",
                        fill:"forwards"

                    });

                },index*120);

            });

            observer.disconnect();

        });

    },{

        threshold:.15

    });

    faqItems.forEach(item=>observer.observe(item));

}

initializeFAQReveal();


/*==================================================
FAQ BUTTON HOVER
==================================================*/

document.querySelectorAll(".faq-question").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.paddingLeft="32px";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.paddingLeft="26px";

    });

});


/*==================================================
FAQ CTA ANIMATION
==================================================*/

const faqCTA=document.querySelector(".faq-contact-box");

if(faqCTA){

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                faqCTA.animate([

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
                    easing:"ease-out",
                    fill:"forwards"

                });

            }

        });

    });

    observer.observe(faqCTA);

}


/*==================================================
END OF PART 5
==================================================*/
/*==================================================
CONTACT PAGE JAVASCRIPT
PART 6
FINAL CTA
BUTTON EFFECTS
ACCESSIBILITY
PERFORMANCE
==================================================*/


/*==================================================
FINAL CTA REVEAL
==================================================*/

function initializeCTA(){

    const cta = document.querySelector(".contact-cta-card");

    if(!cta) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            cta.animate([

                {
                    opacity:0,
                    transform:"translateY(60px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],{

                duration:900,
                easing:"ease-out",
                fill:"forwards"

            });

            observer.disconnect();

        });

    },{

        threshold:.2

    });

    observer.observe(cta);

}

initializeCTA();


/*==================================================
BUTTON RIPPLE EFFECT
==================================================*/

function initializeRippleButtons(){

    document.querySelectorAll(

        ".btn,.btn-primary,.btn-secondary"

    ).forEach(button=>{

        button.style.position="relative";
        button.style.overflow="hidden";

        button.addEventListener("click",(event)=>{

            const ripple=document.createElement("span");

            const rect=button.getBoundingClientRect();

            const size=Math.max(rect.width,rect.height);

            ripple.style.width=size+"px";
            ripple.style.height=size+"px";

            ripple.style.left=
                (event.clientX-rect.left-size/2)+"px";

            ripple.style.top=
                (event.clientY-rect.top-size/2)+"px";

            ripple.style.position="absolute";
            ripple.style.borderRadius="50%";
            ripple.style.background=
                "rgba(255,255,255,.35)";
            ripple.style.transform="scale(0)";
            ripple.style.pointerEvents="none";
            ripple.style.animation=
                "contactRipple .6s linear";

            button.appendChild(ripple);

            ripple.addEventListener("animationend",()=>{

                ripple.remove();

            });

        });

    });

}

initializeRippleButtons();


/*==================================================
CREATE RIPPLE KEYFRAME
==================================================*/

(function(){

    const style=document.createElement("style");

    style.textContent=`

    @keyframes contactRipple{

        to{

            transform:scale(4);

            opacity:0;

        }

    }

    `;

    document.head.appendChild(style);

})();


/*==================================================
BACK TO TOP
==================================================*/

function initializeBackToTop(){

    const button=document.querySelector(".back-to-top");

    if(!button) return;

    window.addEventListener("scroll",

        throttle(()=>{

            if(window.scrollY>500){

                button.classList.add("show");

            }else{

                button.classList.remove("show");

            }

        },100)

    );

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

initializeBackToTop();


/*==================================================
REDUCED MOTION SUPPORT
==================================================*/

function accessibilitySupport(){

    if(

        window.matchMedia(

            "(prefers-reduced-motion: reduce)"

        ).matches

    ){

        document.querySelectorAll("*").forEach(element=>{

            element.style.animation="none";

            element.style.transition="none";

        });

    }

}

accessibilitySupport();


/*==================================================
LAZY LOADING IMAGES
==================================================*/

document.querySelectorAll("img").forEach(image=>{

    image.loading="lazy";

    image.decoding="async";

});


/*==================================================
PERFORMANCE
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("page-loaded");

});


/*==================================================
PAGE VISIBILITY
==================================================*/

document.addEventListener(

    "visibilitychange",

    ()=>{

        if(document.hidden){

            document.body.classList.add("paused");

        }else{

            document.body.classList.remove("paused");

        }

    }

);


/*==================================================
END OF CONTACT.JS
PRODUCTION READY
==================================================*/