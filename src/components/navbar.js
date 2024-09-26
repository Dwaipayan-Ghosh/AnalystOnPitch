import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {/* <img src="logo.png" alt="Logo" width="30" height="30" /> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/stories" className="nav-link">
                Stories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/charts" className="nav-link">
                Charts
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/newsletter" className="nav-link">
                Newsletter
              </Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Login</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-secondary">Sign up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;