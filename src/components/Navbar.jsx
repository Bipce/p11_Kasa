import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="navbar">
      <h1><img src={logo} className="navbar__logo" alt="logo" /></h1>

      <nav>
        <ul className="navbar__list">
          <li className="navbar__list__item navbar__list__item--margin">
            <NavLink to="/">ACCUEIL</NavLink>
          </li>
          <li className="navbar__list__item">
            <NavLink to="/about">A PROPOS</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;