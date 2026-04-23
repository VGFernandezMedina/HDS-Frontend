import "./CreateProduct.css";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clientAxios, {
  configHeaders,
  configHeadersImage,
} from "../helpers/axios.helpers";
import Swal from "sweetalert2";
import { IoMdArrowBack } from "react-icons/io";

const CreateProduct = () => {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });
  const [imagen, setImagen] = useState(null);
  const [imagenActual, setImagenActual] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const idParams = new URLSearchParams(location.search).get("id");

  const crearProducto = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", form.nombre);
    formData.append("descripcion", form.descripcion);
    formData.append("precio", form.precio);

    if (imagen) formData.append("imagen", imagen);

    try {
      const res = await clientAxios.post(
        "/productos",
        formData,
        configHeadersImage,
      );
      if (res.status === 201) {
        setForm({
          nombre: "",
          descripcion: "",
          precio: 0,
        });
        setImagen(null);
        setImagenActual("");
        Swal.fire({
          title: "Producto creado correctamente!",
          icon: "success",
        });
        navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerProductoEditar = async () => {
    const res = await clientAxios.get(`/productos/${idParams}`, configHeaders);
    const { nombre, descripcion, precio, imagen } = res.data.producto;

    setForm({
      nombre,
      descripcion,
      precio,
    });

    setImagenActual(imagen);
  };

  const editarProducto = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nombre", form.nombre);
    formData.append("descripcion", form.descripcion);
    formData.append("precio", form.precio);

    if (imagen) formData.append("imagen", imagen);

    try {
      await clientAxios.put(
        `/productos/${idParams}`,
        formData,
        configHeadersImage,
      );
      Swal.fire({
        title: "Producto editado correctamente!",
        icon: "success",
      });
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idParams) {
      obtenerProductoEditar();
    }
  }, [idParams]);

  return (
    <Container fluid className="d-flex justify-content-center p-0">
      <Form
        id="miFormulario"
        onSubmit={idParams ? editarProducto : crearProducto}
        className="border w-100 d-flex justify-content-center"
      >
        <Row className="container-admin">
          <div className="title-admin">
            {idParams ? <h5>Editar producto</h5> : <h5>Crear producto</h5>}
            <Link to="/admin/products" className="btn btn-custom-admin">
              <IoMdArrowBack size={22} />
              Volver a productos
            </Link>
          </div>
          <Col sm="" md="" lg="5" className="border p-5">
            <div className="border p-3 text-center">
              {!imagen && imagenActual && (
                <img src={imagenActual} alt="producto" width="200" />
              )}
              <Form.Group className="mb-3" controlId="formImagen">
                <Form.Control
                  type="file"
                  name="imagen"
                  onChange={(e) => setImagen(e.target.files[0])}
                />
              </Form.Group>
            </div>
          </Col>
          <Col sm="" md="" lg="7" className="border p-5">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                name="nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción del producto"
                name="descripcion"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio del producto"
                name="precio"
                value={form.precio}
                onChange={(e) =>
                  setForm({ ...form, precio: Number(e.target.value) })
                }
              />
            </Form.Group>
            <Button type="submit" className="btn btn-primar w-100">
              {idParams ? "Editar producto" : "Crear producto"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateProduct;
