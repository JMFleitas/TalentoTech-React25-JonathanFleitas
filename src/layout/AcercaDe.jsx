import React, { useContext } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Flame, Star, Zap, Shield } from "lucide-react";
import { CartContext } from "../Context/CartContext";
import Footer from "../components/Footer";

const AcercaDe = () => {
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
      <div className="max-w-4xl mx-auto px-6 py-16 text-white m-5">
        <h1 className="text-5xl font-bold text-center mb-12">
          Sobre <span className="text-red-500">No Rules</span>
        </h1>

        <section className="mb-16 space-y-6">
          <p className="text-xl text-center">
            <strong>No Rules</strong> no es solo una tienda de ropa. Es un grito
            de libertad, una bofetada a lo convencional, una oda al espíritu
            rebelde.
          </p>
          <p className="text-lg text-center">
            Inspirados por la música, la calle y la autenticidad, ofrecemos
            prendas con alma rockera y esencia alternativa para quienes no se
            dejan encasillar.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="flex items-start space-x-4">
            <Flame className="text-red-500 w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold mb-1">Espíritu Rebelde</h2>
              <p>
                Nada de lo que hacemos sigue un patrón. Diseñamos para los que
                cuestionan todo y viven al límite.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Star className="text-yellow-400 w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                Estilo con Actitud
              </h2>
              <p>
                Cada prenda refleja una historia, una emoción, una chispa que te
                hace destacar entre la multitud.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Zap className="text-purple-400 w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                Inspiración Musical
              </h2>
              <p>
                Desde el punk hasta el grunge, nuestras colecciones están
                marcadas por el pulso de la música.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Shield className="text-green-500 w-8 h-8" />
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                Autenticidad Garantizada
              </h2>
              <p>
                No vendemos moda. Vendemos identidad. Todo lo que ves acá está
                hecho para durar y destacar.
              </p>
            </div>
          </div>
        </section>

        <section className="relative border-l-4 border-red-500 pl-6 space-y-8 mb-16">
          <div>
            <span className="text-red-400 font-bold">2021</span>
            <p>
              Un grupo de amigos decide crear una marca sin límites. Nace la
              idea.
            </p>
          </div>
          <div>
            <span className="text-red-400 font-bold">2022</span>
            <p>Se lanza la primera colección cápsula. Las redes enloquecen.</p>
          </div>
          <div>
            <span className="text-red-400 font-bold">2023</span>
            <p>
              La tienda online se convierte en un referente del estilo
              alternativo nacional.
            </p>
          </div>
          <div>
            <span className="text-red-400 font-bold">2025</span>
            <p>
              Seguimos creciendo sin seguir ninguna regla. Lo mejor está por
              venir.
            </p>
          </div>
        </section>

        <div className="text-center">
          <p className="text-xl italic mb-4">
            No seguimos modas. Las prendemos fuego.
          </p>
          <p className="text-2xl font-bold text-red-500">#SinReglas #NoRules</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcercaDe;
