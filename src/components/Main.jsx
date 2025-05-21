import React from "react";
import { Link } from "react-router-dom";

const Main = ({ data }) => {
  const estilos = {
    color: "white",
  };

  return (
    <main className="main container-md" style={{ ...estilos, height: "100vh" }}>
      <h2>🔥 No Rules - Ropa sin límites 🔥</h2>

      <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto mb-8">
        Bienvenido a <strong>No Rules</strong>. Acá no vendemos ropa: vendemos
        actitud. Cada prenda está pensada para los que viven a su manera, sin
        pedir permiso ni seguir tendencias vacías. Nuestras colecciones están
        hechas para quienes entienden que vestirse no es cubrirse, sino hablar
        sin abrir la boca.
        <br />
        <br />
        Chaquetas de cuero con historia, camisetas que dicen lo que muchos no se
        animan, botas que pisaron más de una calle con rabia, y accesorios que
        no adornan, sino que completan una declaración. Si buscás lo cómodo, lo
        clásico o lo correcto... este no es tu lugar. Acá no hay moldes, hay
        fuego.
        <br />
        <br />
        Somos la marca de los inconformes, los que rompen reglas sin mirar
        atrás, los que creen en la expresión como bandera. En{" "}
        <strong>No Rules</strong> no seguimos temporadas, seguimos instintos.
        Todo lo que ves acá tiene un solo propósito: ayudarte a vestirte como
        vivís. Porque lo peor que podés ser, es alguien más.
        <br />
        <br />
        Así que si estás listo para dejar de imitar y empezar a mostrar quién
        sos, ya sabés dónde estás. Este no es el comienzo de una moda: es el fin
        de lo aburrido.
      </p>

      <Link
        to="/productos"
        className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded transition-colors duration-200 text-info"
      >
        Ver Colección
      </Link>
    </main>
  );
};

export default Main;
