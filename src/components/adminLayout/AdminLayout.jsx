import { Outlet } from "react-router-dom";
import "./AdminLayout.css";
import Sidebar from "../sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="div-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
