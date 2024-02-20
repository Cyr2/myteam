const burgerBtn = document.querySelector('#burger');
const menu = document.querySelector('.menu');
const cross = document.querySelectorAll('.cross');
const recto = document.querySelectorAll('.recto');
const verso = document.querySelectorAll('.verso');
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

for (let i = 0; i < cross.length; i++) {
  cross[i].addEventListener('click', () => {
    if (recto[i].style.display === 'none') {
      cross[i].classList.remove('active');
      recto[i].style.display = 'flex';
      verso[i].style.display = 'none';
    } else {
      cross[i].classList.add('active');
      recto[i].style.display = 'none';
      verso[i].style.display = 'flex';
    }
  });
};