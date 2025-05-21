import React, { useContext } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { CartContext } from "../Context/CartContext"; // 👉 ¡Importante!

const Home = () => {
  const { cart, handleRemoveToCart, loading } = useContext(CartContext);

  const countItem = cart.length;

  return (
    <>
      <Header />
      <Nav
        countItem={countItem}
        cart={cart}
        removeToCart={handleRemoveToCart}
      />
      <div className="main-container m-auto">
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default Home;
