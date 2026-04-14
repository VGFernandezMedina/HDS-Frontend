import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { GoHome } from "react-icons/go";
import { FaBoxes, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Sidebar</h3>

      <NavLink to="/admin" end>
        <GoHome size={22} />
        Inicio
      </NavLink>
      <br />
      <NavLink to="/admin/usuarios">
        <FaUsers />
        Administrar Usuarios
      </NavLink>
      <br />
      <NavLink to="/admin/productos">
        <FaBoxes />
        Administrar Productos
      </NavLink>
    </div>
  );
};

export default Sidebar;
