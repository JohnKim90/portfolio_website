const scroll=document.querySelector("#scroll-up");

scrollUp.addEventListener("click",()=>{
    window.scroll({
        top:0,
        left:0,
        behaviour:"smooth",
    });
});

const burger = document.querySelector('#burger-menu');
const ul = document.querySelector("nav ul");
const nav= document.querySelector("nav");

burger.addEventListener("click",()=>{
    ul.classList.toggle("show");
});

const navlink = document.querySelectorAll(".nav-link");

navlink.forEach((link)=>{
    link.addEventListener("click",()=>{
        ul.classList.remove("show");
    })
})
