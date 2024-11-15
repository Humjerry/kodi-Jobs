import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Spinner.css";
import "../../app.css";

const apiBaseUrl = "https://blogbackend-ng9i.onrender.com/api/blog";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/blogs/${blogId}`);
        setBlog(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to fetch blog details. Please try again later.");
      }
    };

    fetchBlog();
  }, [blogId]);

  const [newComment, setNewComment] = useState({
    username: "",
    text: "",
    blogId: "",
  });

  const handleCommentSubmit = async (e, blogId) => {
    e.preventDefault();

    const { username, text } = newComment;

    try {
      const response = await axios.post(
        `${apiBaseUrl}/blogs/${blogId}/comments`,
        { username, text }
      );

      if (response.status === 200) {
        alert("Comment added successfully!");
        setNewComment({ username: "", text: "", blogId: "" });
        const fetchResponse = await axios.get(`${apiBaseUrl}/blogs)`);
        console.log(fetchResponse);
        fetchBlog();
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="blogdetail">
      <h1>{blog.title}</h1>
      {blog.imageUrl && (
        <img
          src={`https://blogbackend-ng9i.onrender.com/${blog.imageUrl}`}
          alt={blog.title}
          width="300"
        />
      )}
      <p>{blog.description}</p>

      <form
        onSubmit={(e) => {
          setNewComment({ ...newComment, blogId: blog._id });
          handleCommentSubmit(e, blog._id);
        }}
      >
        <input
          className="comment"
          type="text"
          placeholder="Comment"
          value={newComment.text}
          onChange={(e) =>
            setNewComment({ ...newComment, text: e.target.value })
          }
          required
        />
        <input
          className="comment2"
          type="text"
          placeholder="Username"
          value={newComment.username}
          onChange={(e) =>
            setNewComment({ ...newComment, username: e.target.value })
          }
          required
        />
        <button type="submit">Add Comment</button>
      </form>
      <h4>Comments:</h4>
      <ul>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.username}:</strong> {comment.text}
            </li>
          ))
        ) : (
          <li>No comments yet.</li>
        )}
      </ul>
    </div>
  );
};

export default BlogDetail;
