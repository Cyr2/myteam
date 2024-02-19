const burgerBtn = document.querySelector('#burger');
const menu = document.querySelector('.menu')
let burgerOpen = false;

burgerBtn.addEventListener('click', () => {
  if (!burgerOpen) {
    menu.classList.add('open');
    burgerBtn.classList.add('burgerOpen');
    burgerBtn.attributes[0].value = 'public/icon-close.svg';
    burgerOpen = true;
  } else {
    menu.classList.remove('open');
    burgerBtn.classList.remove('burgerOpen');
    burgerBtn.attributes[0].value = 'public/icon-hamburger.svg';
    burgerOpen = false;
  }
});