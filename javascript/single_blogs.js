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


const allblogs = JSON.parse(localStorage.getItem("blogs")) || {};

const selectedBlog = allblogs.find((blog) => blog.id == blogId);


const container=document.querySelector('.container')
container.innerHTML = `<div class="blog-date">January 10, 2023</div>

<div class="blog-title">${selectedBlog.title}</div>

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
  <img src="../assets/remote work 1.png" alt="Content Picture" class="content-picture">
</div>
<div class="blog-text-and-form">
  <div class="blog-text">
  ${selectedBlog.description}
    <form id="form">
      <h3>Comment</h3>
      <label for="email">Email:</label>
      <input type="email" id="email"><br>
      <span id="email_error"></span><br>
      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment" rows="4" cols="6" placeholder="Type your comment..."></textarea><br>
      <span id="comment_error"></span><br>

      <button type="submit">Submit</button><br>
    </form>
  </div>
  <div class="comments">
    <div class="comment">
      <div class="author-details">
        <img src="../assets/profile.jpeg" alt="Author Picture" class="author-picture">
        <div class="author-info">
          <div class="author-name1">Brian Dean</div>
        </div>
      </div>
      <p>Thanks Beal
        Happy to hear that and props fo putting any material into practice </p>
    </div>
    <div class="comment">
      <div class="author-details">
        <img src="../assets/profile.jpeg" alt="Author Picture" class="author-picture">
        <div class="author-info">
          <div class="author-name1">Brian Dean</div>
        </div>
      </div>
      <p>Thanks Beal
        Happy to hear that and props fo putting any material into practice </p>
    </div>
    <div class="comment">
      <div class="author-details">
        <img src="../assets/profile.jpeg" alt="Author Picture" class="author-picture">
        <div class="author-info">
          <div class="author-name1">Brian Dean</div>
        </div>
      </div>
      <p>Thanks Beal
        Happy to hear that and props fo putting any material into practice </p>
    </div>
    <div class="comment">
      <div class="author-details">
        <img src="../assets/profile.jpeg" alt="Author Picture" class="author-picture">
        <div class="author-info">
          <div class="author-name1">Brian Dean</div>
        </div>
      </div>
      <p>Thanks Beal
        Happy to hear that and props fo putting any material into practice </p>
    </div>
  </div>
</div>`
