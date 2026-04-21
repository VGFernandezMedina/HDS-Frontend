import { useEffect, useState } from "react";
import AddButton from "../../components/admin/AddButton";
import Searcher from "../../components/admin/Searcher";
import clientAxios, { configHeaders } from "../../helpers/axios.helpers";
import "./AdminProducts.css";
import AdminTable from "../../components/admin/AdminTable";
import Swal from "sweetalert2";

const AdminProducts = () => {
  const [productos, setProductos] = useState([]);
  const obtenerTodosLosProductos = async () => {
    try {
      const res = await clientAxios.get("/productos/", configHeaders);
      setProductos(res.data.productos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (producto) => {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar a este producto?",
      text: "El producto será borrado permanentemente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, estoy seguro",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const res = await clientAxios.delete(
            `/productos/${producto._id}`,
            configHeaders,
          );

          if (res.status === 200) {
            Swal.fire({
              title: "Producto eliminado",
              text: "Tu producto fue eliminado con exito",
              icon: "success",
            });
          }
          obtenerTodosLosProductos();
        }
      } catch (error) {
        console.log(error);
      }
    });
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
    <div className="container-admin">
      <div className="title-admin">
        <h5>Administrar productos</h5>
        <Searcher placeholder="Buscar producto..." />
        <AddButton text={"Agregar producto"} />
      </div>
      <AdminTable
        data={productos}
        columns={columnasProductos}
        onDelete={handleDeleteProduct}
      />
    </div>
  );
};

export default AdminProducts;
