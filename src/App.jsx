import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
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
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
