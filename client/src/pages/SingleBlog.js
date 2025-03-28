import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SingleBlog.css'; // Import CSS file

const SingleBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="blog-container">
      <h1 className="blog-title">Demo</h1>
      <img
        src="https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png"
        className="blog-image"
        alt="Blog Thumbnail"
      />
      <p className="blog-description">Demo Description</p>
      <button  className="back-btn">
        Back To Posts
      </button>
    </div>
  );
};

export default SingleBlog;
