import "./CreateProduct.css";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const CreateProduct = () => {
  return (
    <Container fluid className="border">
      <Row>
        <Col sm="" md="" lg="5" className="border p-5">
          <div className="border text-center">Imagen</div>
        </Col>
        <Col sm="" md="" lg="7" className="border p-5">
          <Form className="border p-3 border">
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre del producto"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción del producto"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio del producto"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProduct;
