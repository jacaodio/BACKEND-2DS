/* =========================================================
   FATECH 2026
   SCRIPT.JS
========================================================= */


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");


if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR
========================================================= */

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menu) {
            menu.classList.remove("active");
        }

    });

});


/* =========================================================
   HEADER AO ROLAR
========================================================= */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ANIMAÇÕES AO ROLAR
========================================================= */

const animatedElements = document.querySelectorAll(
    ".section-header, .about-text, .info-card, .feature-card, .project-card, .course-card, .gallery-item, .professional-content, .cta-content"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});