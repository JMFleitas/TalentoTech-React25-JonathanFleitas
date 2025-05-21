import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollTop";
import { CartContext } from "./Context/CartContext";
import { appRoutes } from "./routes/Routes";

function App() {
  const { isAuthenticated } = useContext(CartContext);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {appRoutes(isAuthenticated).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
