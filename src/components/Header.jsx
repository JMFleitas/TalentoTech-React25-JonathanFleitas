import React from "react";
import Nav from "./Nav";
import logo from "../assets/logo2.svg";
import { Link } from "react-router-dom";

const Header = () => {
  let estilos = {
    display: "flex",
    background: "#000000",
    textAlign: "center",
    padding: "2rem",
    color: "white",
    height: "70px",
  };

  return (
    <header style={estilos}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>
          <span>
            {" "}
            <img
              src={logo}
              className=""
              alt=""
              style={{ width: "70px", height: "70px", padding: "0.5rem" }}
            />
          </span>
          No Rules
        </h1>
      </Link>
    </header>
  );
};

export default Header;
