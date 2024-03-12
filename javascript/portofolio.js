
// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.querySelector('.hamburger');
//   const navList = document.querySelector('.nav-list');

//   hamburger.addEventListener('click', function () {
//     navList.classList.toggle('show');
//   });
// });
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const close_menu = document.querySelector('.close_menu')

hamburger.addEventListener('click', show)
close_menu.addEventListener('click', close)

function show() {
  navList.style.display = 'flex';
  navList.style.top = '-15px';
}
function close() {
  navList.style.top = '-100%';
}


// const form = document.getElementById('form');
// const fname = document.getElementById('fname');
// const phone = document.getElementById('phone');
// const area = document.getElementById('area');
// const email = document.getElementById('email');

// const name_error = document.getElementById('name_error');
// const phone_error = document.getElementById('phone_error');
// const password_error = document.getElementById('password_error');
// const message_error =document.getElementById('message_error');

function fnamevalid() {
  var form = document.getElementById("form");
  var name = document.getElementById("fname").value;
  var name_error = document.getElementById("name_error");

  var name_check = /^[a-z]{2,}$/;
  if (name.match(name_check)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    name_error.innerHTML = " ";
  }
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    name_error.innerHTML = " **too short name**";

  }
}
function secondvalid() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var phone_error = document.getElementById("phone_error");

  let phone_check = /^\+2507[2389]\d{6}$/;
  let email_checker = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.match(email_checker) && phone.match(phone_check)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    phone_error.innerHTML = " ";
  }
  else {
    form.classList.add("valid");
    form.classList.remove("invalid");
    phone_error.innerHTML = " **please fill in correctly**";
  }
}

// function messagevalid() {
//   var form = document.getElementById("form");
//   var area = document.getElementById("area").value
//   var message_error = document.getElementById("message_error")


//   var area_check = /^[a-zA-Z]*$/;
//   if (area.match(area_check)) {
//     form.classList.add("valid");
//     form.classList.remove("invalid");
//     message_error.innerHTML = " ";
//   }
//   else {
//     form.classList.add("valid");
//     form.classList.remove("invalid");
//     message_error.innerHTML = "message cant be only numbers";
//   }
// }


form.addEventListener('submit', async(e)=>{
  e.preventDefault()

  const name = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('area').value;

  const datas = {
   sender:name,
   email:email,
   content:message
  }
// console.log(datas)
 try {
   const response = await fetch('http://localhost:3000/api/messages',{
       method:'POST',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(datas)
   })
   console.log(datas)
   
   if ( !response.ok){
    alert('sending message failed. Please try again.')
    throw new Error('error occured sending message')
   }
    
  const result = await response.json()
    console.log(result)
    swal( "Message sent successfully!", "success");
   
 } catch (error) {
   console.log({error:error.message})
 }
})




