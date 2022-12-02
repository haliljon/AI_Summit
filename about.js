const menu = document.querySelector('.nav-on-top');
const hamburger = document.querySelector('#hamburger-btn');

function openMenu() {
  menu.style.display = 'block';
  hamburger.style.display = 'none';
}

function closeMenu() {
  menu.style.display = 'none';
  hamburger.style.display = 'block';
}

document.querySelector('#hamburger-btn').addEventListener('click', openMenu());
document.querySelector('#close-btn').addEventListener('click', closeMenu());
