// Define action types
const SET_BLOGS = 'SET_BLOGS';

// Define action creator
const setBlogs = (blogs) => ({
  type: SET_BLOGS,
  payload: blogs,
});

// Define reducer
const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BLOGS:
      return action.payload;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = Redux.combineReducers({
  blogs: blogsReducer,
});

// Create Redux store
const store = Redux.createStore(rootReducer, Redux.applyMiddleware(ReduxThunk.default));

// Component to render blogs
function Blogs({ blogs, setBlogs }) {
  React.useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://my-brand-manzi-backend.onrender.com/api/blogs');
      const list = await response.json();
      setBlogs(list);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-img" key={blog._id}>
          <div className="thumb">
            <img src={blog.image} alt={blog.title} />
          </div>
          <p className="blog-title">{blog.title}</p>
          <a href={`./html/single_blog.html?id=${blog._id}`} className="readmore"><u>Read More</u></a>
        </div>
      ))}
    </div>
  );
}

// Map Redux state and dispatch to component props
const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

const mapDispatchToProps = (dispatch) => ({
  setBlogs: (blogs) => dispatch(setBlogs(blogs)),
});

// Connect the component to the Redux store
const ConnectedBlogs = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Blogs);

// Render the component wrapped in the Provider
ReactDOM.render(
  React.createElement(ReactRedux.Provider, { store: store }, React.createElement(ConnectedBlogs)),
  document.getElementById('blogslist')
);
