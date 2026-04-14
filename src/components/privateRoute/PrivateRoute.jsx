import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, rol }) => {
  // children son los componentes hijos que envuelve en el App.jsx
  const token = JSON.parse(localStorage.getItem("token")) || null;
  const rolUsuario = JSON.parse(localStorage.getItem("rol")) || null;

  // Si no está logueado
  if (!token) {
    return <Navigate to="/" />;
  }

  // Si se requiere un rol y no coincide
  if (rol && rol !== rolUsuario) {
    // Si es admin, dejarlo pasar
    if (rolUsuario === "admin") {
      return children;
    }

    if (rolUsuario === "usuario") {
      return <Navigate to="/user" />;
    } else {
      return <Navigate to="/admin" />;
    }
  }

  // Si todo está OK
  return children;
};

export default PrivateRoute;
