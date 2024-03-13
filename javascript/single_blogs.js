const email = document.getElementById('email');
const comment = document.getElementById('comment');
const email_error = document.getElementById('email_error');
const comment_error = document.getElementById('comment_error');
const form =document.getElementById('form');



// form.addEventListener('submit', (e)=>{
//   let email_checker =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if(email.value === "" || email.value == null){
    
//     email_error.innerHTML="**please enter email**";
//   }
//   else if(!email.value.match(email_checker)){
    
//     email_error.innerHTML="**invalid email**"
//   }
//   else{
//     e.preventDefault();
//     email_error.innerHTML="";
    
//   }
//   if(comment.value === '' || comment.value == null){
//     e.preventDefault()
//     comment_error.innerHTML= "**enter comment please**"
//     return false;
//   }
//   else{
//     e.preventDefault();
//     comment_error.innerHTML= "";
//     return true;
    
//   }
// })
// const currentUrl = new URL(window.location.href);
// const searchParams = new URLSearchParams(currentUrl.search);
// const blogId = searchParams.get("id");
// JSON.parse(localStorage.getItem("blogs")) || {};
// const selectblog = allblog.find(blog =>blog.id==blogId)

// let myblog=" "
// const theblog=document.queryselector(".wrapper")



const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");

fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}`)
.then(response => response.json())
.then(data => { const container=document.querySelector('.container')
container.innerHTML = `<div class="blog-date">January 10, 2023</div>

<div class="blog-title">${data.title}</div>

<div class="author-details">
  <img src="../assets/Avatar Image (1).png" alt="Author Picture" class="author-picture">
  <div class="author-info">
    <div class="author-name">Author Name</div>
    <div class="author-position">CEO</div>
    <div class="author-location">
      <span class="location-icon">&#127758;</span> USA,Mississipi
    </div>
  </div>
</div>
<div class="single-blog-image">
  <img src="${data.image}" alt="Content Picture" class="content-picture">
</div>
<div class="blog-text-and-form">
  <div class="blog-text">
  ${data.content}
  </div>
</div>`})

console.log(blogId)
fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}/comments`)
.then(response => response.json())
.then(output => {
  const commentsBlog=document.querySelector('.comments')
  console.log(output)
  let allComments =''
  output.forEach(coment => {  
    allComments +=
    ` <div class="comment">
    <div class="author-details">
      <div class="author-info">
        <div class="author-name1">${coment.email}</div>
      </div>
    </div>
    <p>${coment.comment}</p>
  </div>`})
  commentsBlog.innerHTML = allComments
})



const emails = document.getElementById("email");
const comments = document.getElementById("comment");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  var Ccomment = comments.value.trim();
  var Cemail = emails.value.trim();
  
  const data = {
    email: Cemail,
    comment: Ccomment,
  };
  console.log(blogId);
  function postComment(data) {
    // Assuming you're using fetch for API calls
    fetch(
     `https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.ok) {
          // Comment created successfully
          swal({
            title: "Done!",
            text: "Comment Sent!!",
            icon: "success",
            button: "OK!",
          }).then(() => {
            window.location.reload();
          });
        } else {
          // Failed to create comment
          swal("Ooops!", "Something is wrong", "warning");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  postComment(data);
});





















