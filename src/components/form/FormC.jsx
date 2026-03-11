import { Button, Container, Form } from "react-bootstrap";
import "./FormC.css";

const FormC = () => {
  return (
    <>
      <Container className="d-flex justify-content-center my-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre de usuario </Form.Label>
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo </Form.Label>
            <Form.Control type="email" placeholder="Correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repetir contraseña</Form.Label>
            <Form.Control type="password" placeholder="Repetir contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormC;
