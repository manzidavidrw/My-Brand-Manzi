
  // document.addEventListener("DOMContentLoaded", function () {
  //   const hamburger = document.querySelector('.hamburger');
  //   const navList = document.querySelector('.nav-list');

  //   hamburger.addEventListener('click', function () {
  //     navList.classList.toggle('show');
  //   });
  // });
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', show)
  function show(){
    navList.style.display= 'flex';
    navList.style.top= '0';
  }


const form = document.getElementById('form');
const fname = document.getElementById('fname');
const phone = document.getElementById('phone');
const area = document.getElementById('area');
const email = document.getElementById('email');

const name_error = document.getElementById('name_error');
const phone_error = document.getElementById('phone_error');
const password_error = document.getElementById('password_error');
const message_error =document.getElementById('message_error');

form.addEventListener('submit', (e)=>{
let phone_check = /^\+2507\d{8}$/;
let email_checker =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(fname.value === '' || fname.value == null){
    e.preventDefault();
    name_error.innerHTML = '**please enter names**';
  }
  else{
    name_error.innerHTML ="";
  }

  if(!phone.value.match(phone_check) || !email.value.match(email_checker)){
    e.preventDefault();
    phone_error.innerHTML= "**please fill in these fields correctly**";
  }
  else{
    phone_error.innerHTML="";
  }
  if(phone.value)


  if(area.value === '' || area.value == null){
  e.preventDefault();
  message_error.innerHTML = "**please Enter Message**"
  }
  else{
    message_error.innerHTML =""
  }
})