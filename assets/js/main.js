/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// Menu Show
// Validate if constant exists 
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
} 

// Menu Hide
// validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); 
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach((n) => {
    n.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        // when we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu');
    });
})

/*=============== ADD BLUR TO HEADER ===============*/
 const blurHeader = () => {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the blur-header class
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                        : header.classList.remove('blur-header');
 }
 window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                    : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*='+sectionId+']' );
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => {
    document.body.classList.contains(datTheme) ? 'dark' : 'light'
}
const getCurrentIcon = () => {
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
}

// we validate if the user previously choose a topic
if(selectedTheme) {
    // If the validation is fullfilled, we ask that the issue was to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // we save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animation repeat
})
sr.reveal('.home__data', 'list__container', '.join__content', '.footer__container')
sr.reveal('.home__img', {origin: 'bottom'})
sr.reveal('.health__image, .routine__images, .follow__img-3', {origin: 'left'})
sr.reveal('.health__data, .routine__data, .follow__img-4', {origin: 'right'})
sr.reveal('.follow__data, .follow__content-1 img', {interval: 100})