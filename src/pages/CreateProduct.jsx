import "./CreateProduct.css";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import clientAxios, { configHeaders } from "../helpers/axios.helpers";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const navigate = useNavigate();

  const crearProducto = async (e) => {
    e.preventDefault();

    try {
      const res = await clientAxios.post(
        "/productos",
        {
          nombre,
          descripcion,
          precio,
          imagen: "url",
        },
        configHeaders,
      );

      if (res.status === 201) {
        setNombre("");
        setDescripcion("");
        setPrecio("");

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

  return (
    <Container fluid className="border">
      <Row>
        <Col sm="" md="" lg="5" className="border p-5">
          <div className="border text-center">Imagen</div>
        </Col>
        <Col sm="" md="" lg="7" className="border p-5">
          <Form onSubmit={crearProducto} className="border p-3 border">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción del producto"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio del producto"
                onChange={(e) => setPrecio(Number(e.target.value))}
              />
            </Form.Group>
            <Button type="submit" className="btn btn-primar w-100">
              Crear Producto
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProduct;
