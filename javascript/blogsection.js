let allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
let blogs = document.querySelector('.blog-list');
let allThem = ' ';
// allBlogs.forEach((blg) =>  {
//   allThem +=
// `<div class="blog-img"  key=${blg.id}>
//   <div class="thumb">
//     <img src="./assets/flowers-276014_640.jpg">
//   </div>
//   <h3 class="blog-title">${blg.title}</h3>
//   <a href="./html/single_blog.html" class="readmore"><u>Read More</u></a>
// </div>`
// }
// )
// blogs.innerHTML = allThem;
// const blog = document.querySelector('.blog-img')
// blog.forEach((blg)=>{
//   blogs.addEventListener("click", (e)=>{
//       e.preventDefault()
//       const id = e.target.closest(".blog-img").getAttribute('key')
//       window.location.href=`./html/single_blog.html?id=${id}`      
// })
// })


const Blogs = async () => {
  const fetchBlogs= await fetch('http://localhost:3000/api/blogs')
  const list = await fetchBlogs.json();
  let all=''
  //  console.log(list);
  const blogList =list.forEach((blg) => {
    all +=
    `<div class="blog-img"  key=${blg._id}>
    <div class="thumb">
      <img src="${blg.image}">
    </div>
    <p class="blog-title">${blg.title}</p>
    <a href="" class="readmore"><u>Read More</u></a>
  </div>`
  });
  blogs.innerHTML = all
  blogs.addEventListener("click", (e)=>{
    e.preventDefault()
    const id = e.target.closest(".blog-img").getAttribute('key')
    console.log(id)
    window.location.href=`./html/single_blog.html?id=${id}`      
})
  }
  Blogs()
