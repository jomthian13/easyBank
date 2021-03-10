const btnHamburger = document.getElementById('btnHamburger');
const body = document.querySelector('body');
const header = document.getElementById('header');
const overlay = document.getElementById('overlay');
//const headerMenu = document.getElementById('header__menu');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
    //close Hamburger menu
    if (header.classList.contains('open')) {
        body.classList.remove('noScroll')
        header.classList.remove('open');
        fadeElems.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out'); 
        })
        // overlay.classList.remove('fade-in');
        // overlay.classList.add('fade-out');
        // headerMenu.classList.remove('fade-in');
        // headerMenu.classList.add('fade-out');
    }else { //open Hamburger menu
        header.classList.add('open')
        body.classList.add('noScroll')
        fadeElems.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in'); 
        })
        // overlay.classList.remove('fade-out');
        // overlay.classList.add('fade-in');
        // headerMenu.classList.remove('fade-out');
        // headerMenu.classList.add('fade-in');
    }
})