
function CommentAdd() {
  
  const getBlogId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  };

  const [comments, setComments] = React.useState([]); 
  const [blogData, setBlogData] = React.useState(null); 
  const blogId = getBlogId(); 

  
  const fetchComments = (blogId) => {
    fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}/comments`)
      .then((response) => response.json())
      .then((output) => {
        setComments(output); 
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };
  
  const fetchBlogData = (blogId) => {
    fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}`)
      .then(response => response.json())
      .then(data => {
        setBlogData(data); 
      })
      .catch(error => {
        console.error("Error fetching blog data:", error);
      });
  };

  
  const handleSubmit = (event) => {
    event.preventDefault(); 

   
    const email = event.target.email.value;
    const comment = event.target.comment.value;

    
    const data = {
      email: email,
      comment: comment
    };

    
    fetch(`http://localhost:3000/api/blogs/${blogId}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Comment created:", result);
        
        fetchComments(blogId);
      })
      .catch((error) => {
        console.error("Error:", error);
        
        alert("Failed to submit comment. Please try again later.");
      });

    
    event.target.reset();
  };

  
  React.useEffect(() => {
    fetchComments(blogId);
    fetchBlogData(blogId);
  }, [blogId]); 

  
  const commentsList = comments.map((comment, index) => (
    <div key={index} className="comment">
      <div className="author-details">
        <div className="author-info">
          <div className="author-name1">{comment.email}</div>
        </div>
      </div>
      <p>{comment.comment}</p>
    </div>
  ));

  
  const blogContent = blogData ? (
    <div className="container">
      <div className="blog-date">January 10, 2023</div>
      <div className="blog-title">{blogData.title}</div>
      <div className="author-details">
        <img src="../assets/Avatar Image (1).png" alt="Author Picture" className="author-picture" />
        <div className="author-info">
          <div className="author-name">Author Name</div>
          <div className="author-position">CEO</div>
          <div className="author-location">
            <span className="location-icon">&#127758;</span> USA,Mississipi
          </div>
        </div>
      </div>
      <div className="single-blog-image">
        <img src={blogData.image} alt="Content Picture" className="content-picture" />
      </div>
      <div className="blog-text-and-form">
        <div className="blog-text" dangerouslySetInnerHTML={{ __html: blogData.content}}></div>
      </div>
    </div>
  ) : null;

  
  return (
    <div>
      {blogContent}
      <div className="comments">{commentsList}</div>
      <form id="form" onSubmit={handleSubmit}>
        <h3>Comment</h3>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required /><br/>
        <span id="email_error"></span><br/>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="4" cols="6" placeholder="Type your comment..." required></textarea><br/>
        <span id="comment_error"></span><br/>

        <button type="submit">Submit</button><br/>
      </form>
    </div>
  );
}
ReactDOM.render(<CommentAdd/>, document.getElementById("comments_Add_jsx"));
