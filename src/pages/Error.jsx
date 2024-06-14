import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <div className="container">
        <Navbar />
        <section className="section">
          <h2 className="section__title">404</h2>
          <p className="section__text">{isRouteErrorResponse(error)
            ? "Oups ! La page que vous demandez n'existe pas."
            : "Une erreur s'est produite"}</p>
          <Link to="/" className="section__link">Retourner sur la page d'accueil</Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Error;