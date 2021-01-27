document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector(".header__toggle");
    const hiddenMenu = document.querySelector(".hidden-menu");
    const overlay = document.querySelector(".overlay");
    burger.addEventListener('click', () => {
        hiddenMenu.classList.toggle('open');
        if (hiddenMenu.classList.contains('open')) {
            overlay.style.opacity = 1;
            burger.classList.add('active');
        } else {
            overlay.style.opacity = 0;
            burger.classList.remove('active');
        }
    })














})