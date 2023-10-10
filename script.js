const navToggleIcon = document.querySelector('.nav__toggle-icon');
const navmobile = document.querySelector('.nav-mobile');
const navmobileopacity = document.querySelector('.nav-mobile__list');

navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('nav__toggle-icon--open');
    navmobile.classList.toggle('nav-mobile--open');
    navmobileopacity.classList.toggle('nav-mobile-opacity');
})