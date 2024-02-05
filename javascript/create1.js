const title = document.getElementById('title');
const upload = document.getElementById('upload');
const text_editor = document.getElementById('default');
const text_error = document.getElementById('text_error');
const form =document.getElementById('form');
const upload_error = document.getElementById('upload_error');
const title_error = document.getElementById('title_error');



form.addEventListener('submit', (e)=>{
if(title.value === "" || title.value == null){
    
  title_error.innerHTML="**please enter Title**";
}
else{
  e.preventDefault()
  title_error.innerHTML="";
}
if(upload.value === "" || upload.value == null){
    
  upload_error.innerHTML="**please upload photo for a blog**";
}
else{
  e.preventDefault()
  upload_error.innerHTML="";
}
if(text_editor.value === "" || text_editor.value == null){
    
  text_error.innerHTML="**please enter Title**";
}
else{
  e.preventDefault()
  text_error.innerHTML="";
}
})


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

const Blog_title = title.value;
const Blog_image = upload.value;
const Blog_description = text_editor.value;

const allBlogs ={
  id : '1',
  Blog_title:'Revulotion of Tech ',
  Blog_image: ' ../',
  Blog_description:''
}
