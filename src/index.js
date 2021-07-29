
const menuBtn = document.getElementById('menu-btn')

menuBtn.onclick = () => {
  document.getElementById('mobile-menu').style.display = 'unset';
}

const closeMenuBtn = document.getElementById('close-menu-btn')

const closeMenu = () => {
  document.getElementById('mobile-menu').style.display = 'none';
}

closeMenuBtn.onclick = closeMenu

