import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
/* import AdminPage from "./pages/AdminPage"; */
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import FavPage from "./pages/FavPage";
import AdminHome from "./pages/Admin/AdminHome";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminLayout from "./components/adminLayout/AdminLayout";

const App = () => {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route
          path="/user/cart"
          element={
            <PrivateRoute rol="usuario">
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/favs"
          element={
            <PrivateRoute rol="usuario">
              <FavPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user"
          element={
            <PrivateRoute rol="usuario">
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute rol="admin">
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="usuarios" element={<AdminUsers />} />
          <Route path="productos" element={<AdminProducts />} />
        </Route>
        {/* <Route
          path="/admin"
          element={
            <PrivateRoute rol="admin">
              <AdminPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
