import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container">
      <Navbar />
      <h1>ErrorPage</h1>
      <p>{isRouteErrorResponse(error)
        ? "Oups ! La page que vous demandez n'existe pas."
        : "Une erreur s'est produite"}</p>
    </div>
  );
};

export default ErrorPage;