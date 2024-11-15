import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/Spinner.css";
import "../../app.css";

const apiBaseUrl = "https://blogbackend-ng9i.onrender.com/api/blog"; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/blogs`);
        setBlogs(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="bloghol">
      {blogs.length === 0 ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            {blog.imageUrl && (
              <img
                src={`https://blogbackend-ng9i.onrender.com/${blog.imageUrl}`}
                alt={blog.title}
                width="200"
              />
            )}
            <div>
              <h3>{blog.title}</h3>
              <p>{blog.shortdesc}</p>
              <Link to={`/blog/${blog._id}`}>
                <p style={{ color: "blue", fontSize: "0.8rem" }}>
                  View Full Blog
                </p>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
