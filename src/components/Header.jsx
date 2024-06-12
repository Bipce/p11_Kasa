import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
      <h1><img src={logo} alt="logo" /></h1>

      <nav>
        <ul className="header__list">
          <li className="header__list__item header__list__item--margin">
            <Link to="/">ACCUEIL</Link>
          </li>
          <li className="header__list__item">
            <Link to="/about">A PROPOS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;