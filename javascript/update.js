const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
// console.log("blogId", blogId);
const title = document.querySelector("#title"); // title inpit
const date = document.querySelector("#upDate"); // date
let titleError = document.getElementById("title-error");
let contentError = document.querySelector(".content-error");
const content = document.querySelector("#summernote"); //text editor
let form = document.querySelector("#form"); // update form id
const fileInput = document.querySelector("#upload");
const url = "http://localhost:3000";
fetch(url + `/api/blogs/${blogId}`)
  .then((res) => res.json())
  .then((output) => {
    //console.log(output.content);
    title.value = output.title;
    let fetchedContent = output.content;
    $(document).ready(function () {
      $("#summernote").summernote({
        toolbar: [
          ["style", ["bold", "italic", "underline", "clear"]],
          ["font", ["strikethrough", "superscript", "subscript"]],
          ["fontsize", ["fontsize"]],
          ["color", ["color"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["height", ["height"]],
          ["misc", ["fullscreen", "codeview"]],
        ],
      });

      // Set the content of Summernote
      $("#summernote").summernote("code", fetchedContent);
    });
    content.value = output.content;
    //fileInput.value = output.image;
  });
// console.log("ok");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  await updateBlog(token); // Wait for updateBlog to complete before proceeding
});

async function updateBlog(token) {
  // Retrieve updated values from the form
  const contentTags = content.value.replace(/<p>/g, "").replace(/<\/p>/g, "");
  const contents = contentTags;
  const titles = title.value;

  // Check if an image file is selected
  if (!fileInput.files || !fileInput.files[0]) {
    console.error("Please select image");
    return;
  }

  // Create a FormData object to send the updated data
  const formData = new FormData();
  formData.append("title", titles);
  formData.append("content", contents);
  formData.append("image", fileInput.files[0]);

  // Send a PATCH request to update the blog post
  const response = await fetch(url + `/api/blogs/${blogId}`, {
    method: "PATCH",
    headers: { "Authorization": `Bearer ${token}` },
    body: formData
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  console.log(data);
  alert("Blog updated successfully!!");
  // Redirect to dashboard page after successful update
  window.location.href = "../html/Dashboard.html";
}

function checkAuthentication() {
  const token = localStorage.getItem("token");
  console.log(token)
  if (!token) {
    // Redirect to login page if token is not present
    window.location.href = "../html/login.html";
  }
}

// Call checkAuthentication when the dashboard page loads
window.addEventListener("DOMContentLoaded", () => {
  checkAuthentication();
});

