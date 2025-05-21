import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css";
import notFound from "../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img src={notFound} alt="404" className="img-not-found" />
        <p className="notfound-subtitle">Ups... producto no encontrado 👕</p>
        <p className="notfound-text">
          ¡Esta prenda se fue de tour y no regresó! Pero no te preocupes,
          tenemos más ropa lista para que rockees con todo. ¡Sigue buscando, el
          show continúa!😵‍💫
        </p>
        <button className=" btn btn-danger">
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
