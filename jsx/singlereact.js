// Action types
const SET_COMMENTS = 'SET_COMMENTS';
const SET_BLOG_DATA = 'SET_BLOG_DATA';
const SET_BLOG_ID = 'SET_BLOG_ID';

// Action creators
const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});

const setBlogData = (blogData) => ({
  type: SET_BLOG_DATA,
  payload: blogData,
});

const setBlogId = (blogId) => ({
  type: SET_BLOG_ID,
  payload: blogId,
});

// Reducers
const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

const blogDataReducer = (state = null, action) => {
  switch (action.type) {
    case SET_BLOG_DATA:
      return action.payload;
    default:
      return state;
  }
};

const blogIdReducer = (state = null, action) => {
  switch (action.type) {
    case SET_BLOG_ID:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = Redux.combineReducers({
  comments: commentsReducer,
  blogData: blogDataReducer,
  blogId: blogIdReducer,
});

// Store
const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk.default));

// Component
function CommentAdd({ comments, blogData, blogId, fetchComments, fetchBlogData, setBlogId }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const comment = event.target.comment.value;

    const data = {
      email: email,
      comment: comment
    };

    fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}/comments`, {
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
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);
    const id = searchParams.get("id");
    if (id) {
      fetchComments(id);
      fetchBlogData(id);
      setBlogId(id);
    }
  }, [fetchComments, fetchBlogData, setBlogId]);

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
            <span className="location-icon">&#127758;</span> USA, Mississippi
          </div>
        </div>
      </div>
      <div className="single-blog-image">
        <img src={blogData.image} alt="Content Picture" className="content-picture" />
      </div>
      <div className="blog-text-and-form">
        <div className="blog-text" dangerouslySetInnerHTML={{ __html: blogData.content }}></div>
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
        <input type="email" id="email" required /><br />
        <span id="email_error"></span><br />
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="4" cols="6" placeholder="Type your comment..." required></textarea><br />
        <span id="comment_error"></span><br />

        <button type="submit">Submit</button><br />
      </form>
    </div>
  );
}

// Container component
const mapStateToProps = (state) => ({
  comments: state.comments,
  blogData: state.blogData,
  blogId: state.blogId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchComments: (blogId) => {
    fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}/comments`)
      .then((response) => response.json())
      .then((output) => {
        dispatch(setComments(output));
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  },
  fetchBlogData: (blogId) => {
    fetch(`https://my-brand-manzi-backend.onrender.com/api/blogs/${blogId}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setBlogData(data));
      })
      .catch(error => {
        console.error("Error fetching blog data:", error);
      });
  },
  setBlogId: (blogId) => {
    dispatch(setBlogId(blogId));
  },
});

const ConnectedCommentAdd = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CommentAdd);

// Render
ReactDOM.render(
  React.createElement(ReactRedux.Provider, { store: store }, React.createElement(ConnectedCommentAdd)),
  document.getElementById("comments_Add_jsx")
);
