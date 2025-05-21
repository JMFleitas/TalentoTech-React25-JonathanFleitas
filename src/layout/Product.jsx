import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  const [cantidad, setCantidad] = useState(1);

  const increment = () => setCantidad(cantidad + 1);
  const decrement = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div
      className="card col-md-4 m-auto mb-4"
      style={{
        width: "19rem",
        border: "none",
        background: "#ffffff34",
      }}
    >
      <img
        src={product.image}
        className="card-img-top img-fluid"
        alt={product.name}
        style={{
          height: "250px",
          objectFit: "contain",
          padding: "1rem",
          transition: "transform 0.3s ease",
          filter: "drop-shadow(4px 8px 4px rgba(0, 0, 0, 0.6))",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price}</p>
        </div>
        <form
          className="d-flex justify-content-center align-items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <button
            type="button"
            className="btnRemove"
            onClick={decrement}
            disabled={cantidad === 1}
          >
            -
          </button>

          <input
            type="number"
            value={cantidad}
            readOnly
            className="form-control text-center"
            style={{ width: "60px", textAlign: "center" }}
          />

          <button type="button" className="btnAdd" onClick={increment}>
            +
          </button>
        </form>
        <button
          className="btn-agregar"
          onClick={() => addToCart(product, cantidad)}
        >
          Agregar
        </button>

        <Link
          className="btn-vermas"
          to={`/productos/${product.id}`}
          style={{ color: "#e4e1e4" }}
        >
          <b>Ver más</b>
        </Link>
      </div>
    </div>
  );
};

export default Product;
