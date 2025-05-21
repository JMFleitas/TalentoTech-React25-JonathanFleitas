import React, { useContext } from "react";
import Product from "../layout/Product";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { CartContext } from "../Context/CartContext";
import Loader from "./Loader";

const ProductList = () => {
  const { cart, handleAddToCart, handleRemoveToCart, loading, productos } =
    useContext(CartContext);

  const countItem = cart.length;

  return (
    <>
      <Header />
      <Nav
        countItem={countItem}
        cart={cart}
        removeToCart={handleRemoveToCart}
      />
      <div className="container m-auto row p-5">
        {loading ? (
          <Loader />
        ) : (
          productos.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={handleAddToCart}
            />
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
