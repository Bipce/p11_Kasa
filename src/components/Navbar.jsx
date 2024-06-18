import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="navbar">
      <h1><img src={logo} className="navbar__logo" alt="logo" /></h1>

      <nav>
        <ul className="navbar__list">
          <li className="navbar__list__item navbar__list__item--margin">
            <Link to="/">ACCUEIL</Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/about">A PROPOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;