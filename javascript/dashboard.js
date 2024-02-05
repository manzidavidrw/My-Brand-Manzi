const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const close_menu = document.querySelector('.close_menu')

hamburger.addEventListener('click', show)
close_menu.addEventListener('click', close)

function show(){
  navList.style.display= 'flex';
  navList.style.left= '0';
}
function close(){
  navList.style.top= '-100%';
}
