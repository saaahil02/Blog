import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  return (
    <>
      <main className="home-container">
        <div className="content">
          <section className="text-center">
            <h2 className="title">
              <strong>Latest Posts</strong>
            </h2>

            <div className="post">
              <div className="card">
                <div className="image-container">
                  <img
                    src="https://www.kindpng.com/picc/m/235-2350682_new-svg-image-small-user-login-icon-hd.png"
                    alt="Post Thumbnail"
                    className="post-image"
                  />
                  <a href="#!">
                    <div className="overlay"></div>
                  </a>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Demo</h5>
                  <p className="card-text">Demo Content</p>
                  <Link to="/blog/1" className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          © 2024 Copyright:
          <a href="https://mdbootstrap.com/" className="footer-link">
            BlogSphere
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
