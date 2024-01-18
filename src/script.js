

//mobile menu

const menuIcon = document.querySelector('#burger');
const menuOption = document.querySelector('#nav-links');



menuIcon.addEventListener('click',() => {
    menuOption.classList.toggle('is-active');
});