
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token=localStorage.getItem("token");

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        BlogSphere
      </Link>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-blog">Add Blog</Link>
          </li>
          <li>
            <Link to="/add-category">Add Category</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
