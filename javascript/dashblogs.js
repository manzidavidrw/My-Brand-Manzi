let allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
let atricle = document.querySelector('.table');
let allThem = ' ';
allBlogs.forEach((blg) => {
  allThem +=
    `<tbody >
<tr class="dido" key=${blg.id}>
            <td><div class="did">${blg.title}</div></td>
            <td><div class="did">mon, 1/1/2024<div></td>
            <td><div class="did"><button type="button" class="Updates" key=${blg.id}>Update</button> <button type="button" class="deletes" key=${blg.id}>delete</button></div><button type="button" class="deletes" key=${blg.id}>Comment</button></td>
          </tr>
</tbody>`
}
)
atricle.innerHTML = allThem;



const removeBlog = document.querySelectorAll(".deletes");
removeBlog.forEach((removeButton) => {
  removeButton.addEventListener("click", (e) => {
    const allBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    e.preventDefault();
    e.stopPropagation();

    const id = e.target.getAttribute("key");

    const isConfirmed = confirm("Are you sure you want to delete this blog post?");


    if (isConfirmed) {
      const updatedBlogs = allBlogs.filter((blog) => blog.id != id);

      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

      location.reload();
    }
  });
});
const editblog = document.querySelectorAll(".Updates");
editblog.forEach((editbutton) => {
  editbutton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.target.closest(".dido").getAttribute("key");
    location.reload();
    window.location.href = `./create.html?id=${id}`;
  });
});



const blogs = async () => {
  const fetchBlogs = await fetch('http://localhost:3000/api/blogs')
  const list = await fetchBlogs.json();
  let all = ''
  //  console.log(list);
  const blogList = list.forEach((blg) => {
    all +=
      `<tbody >
<tr class="dido" key=${blg._id}>
            <td><div class="did">${blg.title}</div></td>
            <td><div class="did">${blg.createdAt}<div></td>
            <td><div class="did"><button type="button" class="Updates" key=${blg._id}>Update</button> <button type="button" class="deletes" key=${blg._id}>delete</button> <button type="button" class="comment" key=${blg._id}><i class="fas fa-comment"></i></button></a></div></td>
          </tr>
</tbody>`
  });
  document.querySelector(".table").innerHTML = all
}
blogs()


document.querySelector(".table").addEventListener('click', (e) => {
  let target = e.target;
  console.log(target)
  if (target.classList.contains("Updates")) {
    // console.log("hii");
    const id = target.getAttribute("key");
    console.log(id)
    window.location.href = `../html/update.html?id=${id}`;
  }
})
document.querySelector(".table").addEventListener('click', (e) => {
  let target1 = e.target;
  console.log(target1)
  if (target1.classList.contains("comment")) {
    // console.log("hii");
    const id = target1.getAttribute("key");
    console.log(id)
    window.location.href = `../html/comments.html?id=${id}`;
  }
})



document.querySelector(".table").addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("deletes")) {
    //console.log("hii");
    const id = target.getAttribute("key");
    //console.log("id: ", id);
    const url = "http://localhost:3000";
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the blog!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(url + `/api/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(id),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            swal("Blog deleted successfully").then((response) => {
              location.reload();
            });
            //alert("Blog deleted successfully!");
          })
          .catch((error) => console.error("Error deleting blog:", error));
      } else {
        //console.log("Ok");
      }
    });
  }
  });
