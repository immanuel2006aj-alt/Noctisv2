/*==================================================
NOCTIS TECHNOLOGIES
script.js
Version : 1.0
==================================================*/

"use strict";

/*==================================================
SELECTORS
==================================================*/

const header = document.querySelector(".header");

const progressBar = document.querySelector(".scroll-progress");

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const navLinks = document.querySelectorAll(".mobile-menu a");

const faqItems = document.querySelectorAll(".faq-item");

/*==================================================
STICKY HEADER
==================================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*==================================================
SCROLL PROGRESS
==================================================*/

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =

        document.documentElement.scrollHeight -

        window.innerHeight;

    const progress =

        (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================================
MOBILE MENU
==================================================*/

menuToggle.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

});

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*==================================================
FAQ ACCORDION
==================================================*/

faqItems.forEach(item=>{

    const button=item.querySelector(".faq-question");

    const answer=item.querySelector(".faq-answer");

    const text=answer.querySelector("p");

    const original=text.innerText;

    text.dataset.text=original;

    if(!item.classList.contains("active")){

        text.innerText="";

    }

    button.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                other.classList.remove("active");

                other.querySelector(".faq-answer p").innerText="";

            }

        });

        item.classList.toggle("active");

        if(item.classList.contains("active")){

            typeWriter(text,text.dataset.text);

        }else{

            text.innerText="";

        }

    });

});

/*==================================================
TYPEWRITER
==================================================*/

function typeWriter(element,text){

    element.innerHTML="";

    let index=0;

    const timer=setInterval(()=>{

        if(index<text.length){

            element.innerHTML+=text.charAt(index);

            index++;

        }else{

            clearInterval(timer);

        }

    },18);

}
/*==================================================
SCROLL REVEAL
==================================================*/

const revealItems=document.querySelectorAll(

"section,.service-card,.solution-card,.project-card,.team-card,.price-card,.testimonial-card,.faq-item"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

revealItems.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});
/*==================================================
ANIMATED COUNTERS
==================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const speed=Math.max(10,Math.floor(target/80));

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target;

}else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections=document.querySelectorAll("section[id]");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-140;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==================================================
BACK TO TOP
==================================================*/

const backTop=document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(!backTop) return;

backTop.classList.toggle("show",window.scrollY>500);

});

backTop?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==================================================
BUTTON RIPPLE
==================================================*/

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*==================================================
REDUCED MOTION
==================================================*/

if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){

document.documentElement.classList.add("reduce-motion");

}

console.log("NOCTIS Technologies v1.0 Loaded Successfully");