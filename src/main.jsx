import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContext.jsx"; // ← esto debe ser CartProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      {" "}
      {/* ← esto estaba mal antes */}
      <App />
    </CartProvider>
  </StrictMode>
);
