import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const [isAuthenticated, setIsAuth] = useState(false);

  const handleAddToCart = (product, cantidad) => {
    if (cantidad <= 0) return;

    const productExists = cart.find((item) => item.id === product.id);
    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, cantidad }]);
    }
  };

  const handleRemoveToCart = (product) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === product.id) {
            if (item.cantidad > 1) {
              return { ...item, cantidad: item.cantidad - 1 };
            }

            return null;
          }
          return item;
        })
        .filter((item) => item !== null);
    });
  };

  // setCart(cart.filter((item) => item.id != product.id)); para borrar el producto del carrito

  useEffect(() => {
    fetch("/data/data.json")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setTimeout(() => {
          setProductos(datos), setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return <NotFound />;
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        productos,
        loading,
        error,
        handleAddToCart,
        handleRemoveToCart,
        isAuthenticated,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
