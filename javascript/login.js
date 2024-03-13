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

// form.addEventListener('submit', (e)=>{
//   let email_checker =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//    if(password.value === ''){
    
//     password_error.innerHTML = "**password can't be blank**";
//   }
//   else if(password.value.length < 4){
//     password_error.innerHTML = "**password should be five**";
//   }
//   else{
//     password_error.innerHTML = "";
//   }
//   if(email.value === "" || email.value == null){
//     e.preventDefault();
//     email_error.innerHTML="**please enter email**";
//   }
//   else if(!email.value.match(email_checker)){
//     e.preventDefault();
//     email_error.innerHTML="invalid email";
//   }
//   else {
//     email_error.innerHTML="";
//   }
// }
// )



form.addEventListener('submit', async(e)=>{
   e.preventDefault()

   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   const datas = {
    email:email,
    password:password
   }
 
  try {
    const response = await fetch('http://localhost:3000/api/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(datas)
    })
    
   
    if ( !response.ok){
        alert('Login failed. Please try again.');
        clearCredentials();
        throw new Error('login failed')

    }
  
    const result = await response.json()
    console.log(result)


  const token = result.data

    localStorage.setItem('token',token)
    window.location =`Dashboard.html`
    
    console.log(token)
  
    
    
  } catch (error) {
    console.log({error:error.message})
  }
})
function clearCredentials() {
  document.getElementById('email').value = ' ';
  document.getElementById('password').value = ' ';
}