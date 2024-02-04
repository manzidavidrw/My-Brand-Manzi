tinymce.init({
  selector: 'textarea#default',
  width: 810,
  height: 250,
  plugins:[
      'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'prewiew', 'anchor', 'pagebreak',
      'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 
      'table', 'emoticons', 'template', 'codesample'
  ],
  toolbar: 'undo redo | styles | bold italic underline | alignleft aligncenter alignright alignjustify |' + 
  'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
  'forecolor backcolor emoticons',
  menu: {
      favs: {title: 'menu', items: 'code visualaid | searchreplace | emoticons'}
  },
  menubar: 'favs file edit view insert format tools table',
  content_style: 'body{font-family:Helvetica,Arial,sans-serif; font-size:16px; }'
});
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