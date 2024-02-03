document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');

  hamburger.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
});

const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const email_error= document.getElementById('email_error');
const password_error=document.getElementById('password_error');

form.addEventListener('submit', (e)=>{
  let email_checker =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(password.value === '' || password.value == null){
    e.preventDefault();
    password_error.innerHTML = "password can't be blank";
  }
  else if(password.value.length > 4){
    e.preventDefault();
    password_error.innerHTML = "password too short";
  }
  else{
    password_error.innerHTML = "";
  }
  if(email.value === "" || email.value == null){
    e.preventDefault();
    email_error.innerHTML="**please enter email**";
  }
  else if(!email.value.match(email_checker)){
    e.preventDefault();
    email_error.innerHTML="invalid email";
  }
  else {
    email_error.innerHTML="";
  }
}
)