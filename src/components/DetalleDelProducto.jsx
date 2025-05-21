import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const DetalleDelProducto = () => {
  const {
    cart,
    productos: products,
    handleRemoveToCart,
    handleAddToCart: addToCart,
  } = useContext(CartContext);

  const countItem = cart?.length || 0;
  const { id } = useParams();

  const producto = products?.find((prod) => String(prod.id) === id);

  if (!cart || !products) {
    return (
      <>
        <Header />
        <Nav
          countItem={countItem}
          cart={cart}
          removeToCart={handleRemoveToCart}
        />
        <div className="text-center text-light p-5">
          <h2>Cargando información del producto...</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Nav
        countItem={countItem}
        cart={cart}
        removeToCart={handleRemoveToCart}
      />
      <div className="d-flex justify-content-center align-items-center container-sm p-4">
        {producto ? (
          <section
            className="container"
            style={{
              background: "#ffffff31",
              padding: "2rem",
              borderRadius: "15px",
            }}
          >
            <div className="text-light text-center row gap-3">
              <div className="col-lg-12 d-flex flex-wrap justify-content-center align-items-center gap-5">
                <img
                  src={producto.image}
                  alt={producto.name}
                  style={{ height: "auto", width: "15rem" }}
                />
                <div>
                  <h3>{producto.name}</h3>
                  <h5>Precio: ${producto.price}</h5>
                  <button style={{ background: "transparent", border: "none" }}>
                    <b className="text-success">Ver medios de pago</b>
                  </button>
                </div>
              </div>

              <div className="col-lg-12">
                <h2>Características del producto</h2>
                <p>Descripción: {producto.description}</p>

                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-12">
                    <p>Marca: {producto.brand}</p>
                    <p>Modelo: {producto.model}</p>
                    <p>Género: {producto.gender}</p>
                    <p>Composición: {producto.composition}</p>
                  </div>
                  <div className="col-lg-3 col-md-12">
                    <p>Tipo de Tela: {producto.fabric_type}</p>
                    <p>Tipo de prenda: {producto.clothing_type}</p>
                    <p>Edad: {producto.age}</p>
                    <p>Forma del calce: {producto.fit}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="text-center text-danger">
            <h1>Producto no encontrado</h1>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetalleDelProducto;
