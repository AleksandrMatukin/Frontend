const burger = document?.querySelector('[data-burger]');
const body = document?.body;
const nav = document?.querySelector('.header__nav');
const navLink = nav?.querySelectorAll('a');

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active'); 
    nav?.classList.toggle('header__nav--active');
    nav?.classList.toggle('header__nav--closed');
})

navLink.forEach(el =>{
    el.addEventListener('click', () => {
       body.classList.remove('stop-scroll');
       nav?.classList.remove('header__nav--active');
       nav?.classList.add('header__nav--closed');
       burger.classList.remove('burger--active');
    })   
   });