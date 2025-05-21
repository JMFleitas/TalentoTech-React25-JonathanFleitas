import React from "react";
import grafitti from "../assets/graffiti.jpg";

const Cart = ({ cartItems, removeToCart, count }) => {
  return (
    <>
      <button
        className={`btn ${
          cartItems.length === 0 ? "btn-secondary" : "btn-success"
        }`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        disabled={cartItems.length === 0}
      >
        <i className="fa-solid fa-cart-shopping"></i> {count}
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header bg-dark text-white">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Carrito
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          className="offcanvas-body"
          style={{
            position: "relative",
            backgroundImage: `url(${grafitti})`,
            backdropFilter: "blur(25px)",
            backgroundSize: "cover",
          }}
        >
          <div>
            {cartItems.length === 0 ? (
              <h4 className="">El carrito está vacío</h4>
            ) : (
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "auto",
                  width: "80%",
                  fontSize: "1.2rem",
                }}
              >
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-around align-items-center mr-2 p-2"
                  >
                    <img src={item.image} alt="" height="50px" width="50px" />{" "}
                    {item.name} ${item.price} - Cant: {item.cantidad}
                    <a>
                      <i
                        className="fa-solid fa-trash"
                        style={{
                          margin: "1rem",
                          cursor: "pointer",
                          transition: "color 0.3s",
                        }}
                        onClick={() => removeToCart(item)}
                        onMouseEnter={(e) => (e.target.style.color = "red")}
                        onMouseLeave={(e) => (e.target.style.color = "inherit")}
                      ></i>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
