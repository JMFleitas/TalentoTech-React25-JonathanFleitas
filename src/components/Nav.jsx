import React from "react";
import { Link } from "react-router-dom";
import "../style/EstilosGenerales.css";
import Cart from "./Cart";

const Nav = ({ countItem, cart, removeToCart }) => {
  return (
    <nav
      className="pt-32 px-4"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btnCateg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorias
            </button>
            <ul className="dropdown-menu ">
              <li>
                <a className="dropdown-item btnCateg" href="#">
                  Remeras
                </a>
              </li>
              <li>
                <a className="dropdown-item btnCateg" href="#">
                  Camperas
                </a>
              </li>
              <li>
                <a className="dropdown-item btnCateg" href="#">
                  Pantalones
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/acercade">Acerca de</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Cart
            cartItems={cart}
            removeToCart={removeToCart}
            count={countItem}
          />
        </li>

        <li>
          <Link to={"/admin"}>
            <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
