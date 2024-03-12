const title = document.getElementById('title');
const upload = document.getElementById('upload');
const text_editor = document.getElementById('default');
const buttons = document.getElementById('edtitor-button');
const description = document.getElementById('summernote');
const content = document.getElementsByClassName('deafult_content').value;

const text_error = document.getElementById('text_error');
const form =document.getElementById('form');
const upload_error = document.getElementById('upload_error');
const title_error = document.getElementById('title_error');



// buttons.addEventListener('click', (e)=>{
// if(title.value === "" || title.value == null){
    
//   title_error.innerHTML="**please enter Title**";
// }
// else{
//   e.preventDefault()
//   title_error.innerHTML="";
// }
// if(upload.value === "" || upload.value == null){
    
//   upload_error.innerHTML="**please upload photo for a blog**";
// }
// else{
//   e.preventDefault()
//   upload_error.innerHTML=" ";
// }
// if(text_editor.value === "" || text_editor.value == null){
    
//   text_error.innerHTML="**please enter Title**";
// }
// else{
//   e.preventDefault()
//   text_error.innerHTML="";
// }
// })

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const close_menu = document.querySelector('.close_menu');

hamburger.addEventListener('click', show)
close_menu.addEventListener('click', close)

function show(){
  navList.style.display= 'flex';
  navList.style.left= '0';
}
function close(){
  navList.style.top= '-100%';
}
// import { v4 as uuidv4 } from 'https://cdn.jsdelivr.net/npm/uuid@8.3.2/dist/esm-browser/index.js';

// function addBlogToLocalStorage() {

// const Blog_title = title.value;
// const Blog_image = upload.value;
// const Blog_description = description.value; 
// const  button= document.querySelector('.edtitor-button');

// const Id = uuidv4();
//   const singleBlog = {
//      id:Id,
//     title: Blog_title,
//     image: Blog_image,
//     description: Blog_description
//   };

//   let allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//   allBlogs.push(singleBlog);
//   saveToLocalStorage(allBlogs);

// function saveToLocalStorage(allBlogs) {
//   const blogsJSON = JSON.stringify(allBlogs);
//   localStorage.setItem('blogs', blogsJSON);
// }
// }
// document.getElementById('edtitor-button').addEventListener('click', addBlogToLocalStorage);



// form.addEventListener('submit', async(e)=>{
//   e.preventDefault()

//   const title = document.getElementById('title').value;
//   const image = document.getElementById('upload').value;
//   const content = document.getElementById('summernote').value;
//   const token = localStorage.getItem("token");

//   const datas = {
//    title:title,
//    image:image,
//    content:content
//   }
//  console.log(token)
//  try {
//    const response = await fetch('http://localhost:3000/api/blogs',{
//        method:'POST',
//        headers:{ Authorization: `Bearer ${token}`},
//        body:JSON.stringify(datas)
//    })
   
//    console.log(datas)
   
//    if ( !response.ok){
//        throw new Error('error occured creating a blog')
//    }
 
//    const result = await response.json()
//    alert("Blog created successfully!!");
//    window.location.href = "./Dashboard.html";
   
//  } catch (error) {
//    console.log({error:error.message})
//  }
// })

const logout = async () => {
window.location.href="../index.html"
localStorage.clear()
 }
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const editorButton = document.getElementById('edtitor-button');

  if (editorButton) {
      editorButton.addEventListener('click', async function() {
          const title = document.getElementById('title').value;
          const image = document.getElementById('upload').files[0];
          const content = document.getElementById('summernote').value;

          // Validate form fields
          const titleError = document.getElementById('title_error');
          const uploadError = document.getElementById('upload_error');
          const textError = document.getElementById('text_error');

          titleError.innerText = ''; // Reset error messages
          uploadError.innerText = '';
          // textError.innerText = '';

          if (!title) {
              titleError.innerText = 'Please enter a title';
              return;
          }

          if (!image) {
              uploadError.innerText = 'Please select an image';
              return;
          }

          if (!content) {
              textError.innerText = 'Please enter some content';
              return;
          }

          // Your form submission code here...
          const formData = new FormData();
          formData.append('title', title);
          formData.append('image', image);
          formData.append('content', content);

          // Retrieve token from localStorage
          const token = localStorage.getItem('token');

          try {
              const response = await fetch('http://localhost:3000/api/blogs', {
                  method: 'POST',
                  headers: {
                      Authorization: `Bearer ${token}`
                  },
                  body: formData
              });

              if (!response.ok) {
                  throw new Error('Error creating blog');
              }

              const result = await response.json();
              swal( "Blog created successfully!", "success");
              // Redirect to dashboard or perform any other action
          } catch (error) {
              console.error('Error:', error);
              // Handle error (e.g., display error message to the user)
          }
      });
  } else {
      console.error('Element with id "edtitor-button" not found');
  }
});
