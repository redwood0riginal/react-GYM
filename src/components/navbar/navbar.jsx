import "./navbar.css";
import logo from "../.././assets/logo2.png";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { GoTop } from "../../utils/helpers";

import { AuthContext } from "../../context/AuthContext";

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const { isAuthenticated, isAdmin, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Additional logout logic if needed
  };

  const [navbarClass, setNavbarClass] = useState(
    "navbar navbar-expand-lg bg-body-tertiary transparent"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold (90vh in this example)
      if (scrollPosition > (100 * window.innerHeight) / 100) {
        setNavbarClass(
          "navbar navbar-expand-lg bg-body-tertiary fixed-top opaque"
        );
      } else {
        setNavbarClass("navbar navbar-expand-lg bg-body-tertiary transparent");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isAdmin);

  return (
    <nav className={navbarClass}>
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand" href="#" onClick={GoTop}>
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={"/"}
                className="nav-link "
                aria-current="page"
                href="#"
                onClick={GoTop}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/about"}
                className="nav-link"
                href="#"
                onClick={GoTop}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/classes"}
                className="nav-link"
                href="#"
                onClick={GoTop}
              >
                Classes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/schedule"}
                className="nav-link"
                href="#"
                onClick={GoTop}
              >
                Schedule
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/contact"}
                className="nav-link"
                href="#"
                onClick={GoTop}
              >
                Contact
              </NavLink>
            </li>
            {isAdmin && <li className="nav-item">
              <NavLink
                to={"/dashboard"}
                className="nav-link"
                href="#"
                onClick={GoTop}
              >
                Dashboard
              </NavLink>
            </li>}
            {isAuthenticated && <li className="nav-item user-icon m-2">
              <NavLink to="profile"><FontAwesomeIcon icon={faUser} /></NavLink>
            </li>}
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {isAuthenticated ? (
                <NavLink
                  to="/"
                  className="nav-link btn btn-outline mt-1 pt-1"
                  onClick={handleLogout}
                >
                  Log Out
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="nav-link btn btn-outline mt-1 pt-1"
                  onClick={GoTop}
                >
                  Log In
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 mt-1"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className=" btn btn-outline-success mt-1" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
          <div className="fa-social">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
