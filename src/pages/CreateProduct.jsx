import "./CreateProduct.css";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
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
    precio: "",
  });
  const [imagen, setImagen] = useState(null);
  const [imagenActual, setImagenActual] = useState("");
  const [preview, setPreview] = useState(null); // preview img
  const [loading, setLoading] = useState(false); // En false no hace nada
  const [errores, setErrores] = useState({}); // Manejamos errores de los inputs
  const navigate = useNavigate();
  const location = useLocation();
  const idParams = new URLSearchParams(location.search).get("id");

  const validarFormulario = () => {
    const nuevosErrores = {};

    const nombre = form.nombre.trim();
    const descripcion = form.descripcion.trim();
    const precio = form.precio;

    if (!nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    } else if (nombre.length < 5 || nombre.length > 50) {
      nuevosErrores.nombre = "Debe tener entre 5 y 50 caracteres";
    } else if (!/^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s\-.,]+$/.test(nombre)) {
      nuevosErrores.nombre = "Solo letras, números y algunos símbolos (- . ,)";
    }

    if (!descripcion) {
      nuevosErrores.descripcion = "La descripción es obligatoria";
    } else if (descripcion.length < 10 || descripcion.length > 500) {
      nuevosErrores.descripcion = "Debe tener entre 10 y 500 caracteres";
    }

    if (precio === "") {
      nuevosErrores.precio = "El precio es obligatorio";
    } else if (precio.length > 10) {
      nuevosErrores.precio = "Máximo 10 dígitos";
    } else if (!/^\d+(\.\d{0,2})?$/.test(precio)) {
      nuevosErrores.precio = "Formato inválido (ej: 100 o 99.99)";
    } else if (Number(precio) < 0) {
      nuevosErrores.precio = "No puede ser negativo";
    }

    return nuevosErrores;
  };

  const crearProducto = async (e) => {
    e.preventDefault();

    // Maneja los errores
    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    setErrores({});
    setLoading(true);
    // Maneja los errores

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
          precio: "",
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
    } finally {
      setLoading(false); // Apaga el Loading cuando termina el envío
    }
  };

  const editarProducto = async (e) => {
    e.preventDefault();

    // Maneja los errores
    const nuevosErrores = validarFormulario();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    setErrores({});
    setLoading(true);
    // Maneja los errores

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
    } finally {
      setLoading(false); // Apaga el Loading cuando termina el envío
    }
  };

  const obtenerProductoEditar = async () => {
    const res = await clientAxios.get(`/productos/${idParams}`, configHeaders);
    const { nombre, descripcion, precio, imagen } = res.data.producto;

    setForm({
      nombre,
      descripcion,
      precio: String(precio), // Convierte a string los numeros que vienen del backend
    });

    setImagenActual(imagen);
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const tiposPermitidos = ["image/png", "image/jpeg", "image/jpeg"];

    if (!tiposPermitidos.includes(file.type)) {
      Swal.fire({
        icon: "error",
        title: "Formato inválido",
        text: "Solo PNG, JPG o JPEG",
      });

      e.target.value = null; // Limpia el input file, sino el archivo inválido queda seleccionado
      setImagen(null); // Limpia el estado de la imagen
      setPreview(null); // Eliminás la preview (si había una previa)
      return;
    }
    setImagen(file); // Si todo sale bien, guarda el archivo válido en el estado
    setPreview(URL.createObjectURL(file)); // Sirve para mostrar la imagen antes de subirla
  };

  const handlePrecioChange = (e) => {
    const value = e.target.value;
    // Limita a 2 decimales
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setForm({ ...form, precio: value });
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
        noValidate
        onSubmit={idParams ? editarProducto : crearProducto}
        className="form-table-admin"
      >
        <Row className="container-admin">
          <div className="title-admin">
            {idParams ? <h5>Editar producto</h5> : <h5>Crear producto</h5>}
            <Link to="/admin/products" className="btn btn-custom-admin">
              <IoMdArrowBack size={22} />
              Volver a productos
            </Link>
          </div>
          <Col sm="" md="" lg="5" className="p-5">
            <div className="div-img-table">
              {preview ? (
                <img src={preview} alt="preview" width="200" />
              ) : (
                imagenActual && (
                  <img src={imagenActual} alt="producto" width="200" />
                )
              )}
              <Form.Group className="mb-3 text-center" controlId="formImagen">
                <Form.Control
                  type="file"
                  name="imagen"
                  className="mb-1"
                  onChange={handleImagenChange}
                />
                <Form.Text className="text-muted">
                  Solo se permiten imágenes en formato PNG o JPG. Tamaño máximo
                  recomendado: 2MB.
                </Form.Text>
              </Form.Group>
            </div>
          </Col>
          <Col sm="" md="" lg="7" className="border p-5">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>
                Nombre <span className="asterisco">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                name="nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                isInvalid={!!errores.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {errores.nombre}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative"
              controlId="formDescripcion"
            >
              <Form.Label>
                Descripción <span className="asterisco">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Descripción del producto"
                name="descripcion"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                isInvalid={!!errores.descripcion}
              />
              <span className="contador-form">
                {form.descripcion.length} / 500
              </span>
              <Form.Control.Feedback type="invalid">
                {errores.descripcion}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>
                Precio <span className="asterisco">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Precio del producto"
                name="precio"
                value={form.precio}
                onChange={handlePrecioChange}
                isInvalid={!!errores.precio}
              />
              <Form.Control.Feedback type="invalid">
                {errores.precio}
              </Form.Control.Feedback>
            </Form.Group>
            {/* Si el loading = true, el boton se bloquea gracias al disabled = loading  */}
            <Button disabled={loading} type="submit" className="btn-form-admin">
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  {idParams ? "Editando..." : "Creando..."}
                </>
              ) : idParams ? (
                "Editar producto"
              ) : (
                "Crear producto"
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateProduct;
