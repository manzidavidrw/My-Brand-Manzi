const blogs = async () => {
  const fetchMessage= await fetch('http://localhost:3000/api/messages')
  const list = await fetchMessage.json();
  let allMessages=''
  //  console.log(list);
  const blogList =list.forEach((blg) => {
    allMessages +=
    `<div class="message1">
    <h3>${blg.sender}</h3>
    <p>${blg.content}</p>
    
  </div>`
  });
  document.querySelector(".table-articles").innerHTML = allMessages
  }
  blogs()
  