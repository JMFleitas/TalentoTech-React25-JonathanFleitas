import React, { useContext } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import { CartContext } from "../Context/CartContext";

const Contacto = () => {
  const { cart, handleRemoveToCart } = useContext(CartContext);
  const countItem = cart.length;

  return (
    <>
      <Header />
      <Nav
        countItem={countItem}
        cart={cart}
        removeToCart={handleRemoveToCart}
      />

      <main className="contact-container container">
        <section className="contact-form">
          <Formulario />
        </section>
        <section className="contact-info">
          <h2>Contacto</h2>
          <p>
            <strong>Teléfono:</strong> +54 11 1234 1234
          </p>
          <p>
            <strong>Email:</strong> contacto@norules.com
          </p>
          <p>
            <strong>Dirección:</strong> Av. Rock Nacional 123, Buenos Aires
          </p>
          <p>
            <strong>Horario de atención:</strong> Lunes a Viernes de 9 a 18 hs
          </p>

          <div className="social-links">
            <a
              href="https://wa.me/541112341234"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </section>

        <section className="contact-map">
          <iframe
            title="Ubicación No Rules"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.409821412034!2d-58.4302159!3d-34.6036845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb63a1e0c87f%3A0x60b3e2b1372de61a!2sAv.%20Corrientes%201234!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
