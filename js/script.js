// toggle/hamburgerbutton
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll reveal
ScrollReveal({
    reset: true ,
    distance:'80px',
    duration:2000,
    delay:100,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-img, .services-container, .models-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
