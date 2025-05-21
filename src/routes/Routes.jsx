import Home from "../layout/Home";
import ProductList from "../components/ProductList";
import DetalleDelProducto from "../components/DetalleDelProducto";
import AcercaDe from "../layout/AcercaDe";
import Contacto from "../layout/Contacto";
import NotFound from "../components/NotFound";
import Admin from "../Auth/Admin";
import Login from "../Auth/Login";
import RutaProtegida from "../Auth/RutasProtegidas";

export const appRoutes = (isAuthenticated) => [
  { path: "/", element: <Home /> },
  { path: "/productos", element: <ProductList /> },
  { path: "/productos/:id", element: <DetalleDelProducto /> },
  { path: "/acercade", element: <AcercaDe /> },
  { path: "/contacto", element: <Contacto /> },
  {
    path: "/admin",
    element: (
      <RutaProtegida isAuthenticated={isAuthenticated}>
        <Admin />
      </RutaProtegida>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
];
