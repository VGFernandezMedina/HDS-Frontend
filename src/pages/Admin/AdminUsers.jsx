import "./AdminUsers.css";
import AddButton from "../../components/admin/AddButton";
import Searcher from "../../components/admin/Searcher";
import AdminTable from "../../components/admin/AdminTable";
import { useEffect, useState } from "react";
import clientAxios, { configHeaders } from "../../helpers/axios.helpers";

const AdminUsers = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerTodosLosUsuarios = async () => {
    try {
      const res = await clientAxios.get("/usuarios/", configHeaders);
      console.log(res.data);
      setUsuarios(res.data.usuarios);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditUser = (usuario) => {
    console.log("Editar usuario", usuario);
  };

  const handleDeleteUser = (usuario) => {
    console.log("Eliminar usuario", usuario);
  };

  const columnasUsuarios = [
    { key: "nombreUsuario", label: "Nombre" },
    { key: "emailUsuario", label: "Email" },
    { key: "estado", label: "Estado" },
    { key: "rol", label: "Rol" },
  ];

  useEffect(() => {
    obtenerTodosLosUsuarios();
  }, []);

  return (
    <div className="container-users">
      <div className="p-btn">
        <p>Administrar usuarios</p>
        <Searcher placeholder="Buscar usuario..." />
        <AddButton text="Agregar usuario" />
      </div>
      <AdminTable
        data={usuarios}
        columns={columnasUsuarios}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default AdminUsers;
