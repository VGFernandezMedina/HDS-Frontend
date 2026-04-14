import { useEffect, useState } from "react";
import AddButton from "../../components/admin/AddButton";
import Searcher from "../../components/admin/Searcher";
import clientAxios, { configHeaders } from "../../helpers/axios.helpers";
import "./AdminProducts.css";
import AdminTable from "../../components/admin/AdminTable";

const AdminProducts = () => {
  const [productos, setProductos] = useState([]);
  const obtenerTodosLosProductos = async () => {
    try {
      const res = await clientAxios.get("/productos/", configHeaders);
      console.log(res.data);
      setProductos(res.data.productos);
    } catch (error) {
      console.log(error);
    }
  };

  const columnasProductos = [
    { key: "nombre", label: "Nombre" },
    { key: "precio", label: "Precio" },
    { key: "estado", label: "Estado" },
  ];

  useEffect(() => {
    obtenerTodosLosProductos();
  }, []);

  return (
    <div className="container-users">
      <div className="p-btn">
        <p>Administrar productos</p>
        <Searcher placeholder="Buscar producto..." />
        <AddButton text={"Agregar producto"} />
      </div>
      <AdminTable data={productos} columns={columnasProductos} />
    </div>
  );
};

export default AdminProducts;
