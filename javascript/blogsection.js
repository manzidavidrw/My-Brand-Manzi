let allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
let blogs = document.querySelector('.blog-list');
let allThem = ' ';
allBlogs.forEach((blg) =>  {
  allThem +=
`<div class="blog-img"  key=${blg.id}>
  <div class="thumb">
    <img src="./assets/flowers-276014_640.jpg">
  </div>
  <h3 class="blog-title">${blg.title}</h3>
  <a href="./html/single_blog.html" class="readmore"><u>Read More</u></a>
</div>`
}
)
blogs.innerHTML = allThem;
// const blog = document.querySelector('.blog-img')
// blog.forEach((blg)=>{
  blogs.addEventListener("click", (e)=>{
      e.preventDefault()
      const id = e.target.closest(".blog-img").getAttribute('key')
      window.location.href=`./html/single_blog.html?id=${id}`
})
// })
