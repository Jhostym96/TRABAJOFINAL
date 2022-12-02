// Paso1: Importar los componentes de React Router DOM

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas2: Importar nuestras vistas
import {
  HomeView,
  LoginView,
  RegisterView,
  ProfileView,
  InterfaceView,
  LandingPageView,
  ProductView,
  CartView,
  MarketplaceView,
  StadiumView,
} from "../pages";

import { MainLayout, AdminLayout } from "../layout";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPageView />} />
          <Route path="/product" element={<ProductView />} />
          <Route path="/cart" element={<CartView />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/market" element={<MarketplaceView />} />
          <Route path="/market/:id" element={<StadiumView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
