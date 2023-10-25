import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-md fixed-top px-4 "
      style={{ backgroundColor: "hsla(216, 65%, 11%, 1)" }}
    >
      <div className="container-fluid">
        <Link
          to="#"
          style={{ fontSize: "2.5rem" }}
          className="navbar-brand text-white "
        >
          Saksham
        </Link>
        

         {/* toggle and close button on navbar */}
        {!isMenuOpen ? (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleMenu}
          >
            <i className="fa-solid fa-bars-staggered text-white"></i>
          </button>
        ) : (
          <Link
            className="close"
            type="button"
            aria-label="Close"
            onClick={handleCloseMenu}
          >
            <span aria-hidden="true">
              <i
                className="fa-sharp fa-solid fa-xmark"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
            </span>
          </Link>
        )}
        <div
          className={`navbar-collapse collapse ${isMenuOpen ? "show" : ""}`}
          id="nav"
        >

          {/* List of options on navbar */}
          <ul className="navbar-nav ms-auto order2 navbar-options text-center">
            <li className="nav-item px-2">
              <NavLink
                to="/"
                className="nav-link font"
                style={{ color: "white" }}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink
                to="/about"
                className="nav-link font"
                style={{ color: "white" }}
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/skills"
                className="nav-link font"
                style={{ color: "white" }}
              >
                SKILLS
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/project"
                className="nav-link font"
                style={{ color: "white" }}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                to="/connectwithsaksham"
                className="nav-link font"
                style={{ color: "white" }}
              >
                CONNECT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
