

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <h3 className="fw-bold">Dish Hub</h3>
        <p>
          Our team is made up of professionals dedicated to excellence.
          <br />
          We value collaboration, creativity, and commitment in everything we do.
        </p>

        {/* Social Icons */}
        <div className="mb-3">
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-twitter mx-2"></i>
          <i className="bi bi-google mx-2"></i>
          <i className="bi bi-youtube mx-2"></i>
          <i className="bi bi-linkedin mx-2"></i>
        </div>

        <hr className="bg-light" />

        <p>© 2026 Dish Hub</p>

        {/* Footer Links */}
        <div>
          <Link className="text-white mx-2 text-decoration-none" to="/home">Home</Link>
          <Link className="text-white mx-2 text-decoration-none" to="/about">About</Link>
          <Link className="text-white mx-2 text-decoration-none" to="/contact">Contact</Link>
          <Link className="text-white mx-2 text-decoration-none" to="/blog">Blog</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
