import React from 'react';
import '../style/AddBlog.css'; // Import the CSS file

const AddBlog = () => {
  return (
    <div className="container">
      <h2 className="title">Add a New Blog</h2>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" placeholder="Blog Title" />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option disabled selected>Select Category</option>
              <option value="tech">Tech</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="education">Education</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" placeholder="Blog Description"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input type="file" name="thumbnail" id="thumbnail" />
          </div>

          <div className="form-group">
            <button type="submit" className="submit-btn">Add Blog</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
