import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarC from "./components/navbar/NavbarC";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
