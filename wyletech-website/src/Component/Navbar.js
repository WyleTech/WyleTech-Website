import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-lg border-bottom border-white">
        <nav className="container">
      
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="mr-1 text-white-50">Menu</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                 Our Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/book">
                  Book Us<span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                About Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;