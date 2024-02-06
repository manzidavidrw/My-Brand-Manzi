let allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
let atricle = document.querySelector('.table');
let allThem = ' ';
allBlogs.forEach((blg) =>  {
  allThem +=
`<tbody>
<tr class="dido">
            <td><div class="did">${blg.title}</div></td>
            <td><div class="did">mon, 1/1/2024<div></td>
            <td><div class="did"><button type="button" class="Updates">Update</button> <button type="button" class="deletes">delete</button></div></td>
          </tr>
</tbody>`
}
)
atricle.innerHTML = allThem;