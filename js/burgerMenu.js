const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('.nav');
const menuItems = document.querySelectorAll('.menu-item');

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menu.classList.add('showMenu');
    hamburger.classList.add('open');
    showMenu = true;
  } else {
    menu.classList.remove('showMenu');
    hamburger.classList.remove('open');
    showMenu = false;
  }
};

menuBtn.addEventListener('click', toggleMenu);
export default toggleMenu;

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);
