import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children, rol }) => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getitem("token")) || null;
  const rolUsuario = JSON.parse(localStorage.getitem("rol")) || null;

  if (!token) {
    setTimeout(() => {
      navigate("/");
    }, 100);
  } else {
    if (rol === rolUsuario) {
      return children;
    } else {
      if (rolUsuario === "usuario") {
        setTimeout(() => {
          navigate("/user");
        }, 100);
      } else {
        return children;
      }
    }
  }
};

export default PrivateRoute;
