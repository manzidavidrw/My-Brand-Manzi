const email = document.getElementById('email');
const comment = document.getElementById('comment');
const email_error = document.getElementById('email_error');
const comment_error = document.getElementById('comment_error');
const form =document.getElementById('form');



form.addEventListener('submit', (e)=>{
  let email_checker =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!email.value.match(email_checker)){
    e.preventDefault();
    email_error.innerHTML="invalid email"
  }
  if(comment.value === '' || comment.value == null){
    e.preventDefault()
    comment_error.innerHTML= "enter comment please"
  }
})