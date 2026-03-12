import { Button, Container, Form } from "react-bootstrap";
import "./FormC.css";
import { useState } from "react";

const FormC = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [contraseniaUsuario, setContraseniaUsuario] = useState("");
  const [repContraseniaUsuario, setRepContraseniaUsuario] = useState("");
  const [errores, setErrores] = useState({});

  const handleClickRegisterForm = (ev) => {
    ev.preventDefault();
    const nuevosErrores = {};

    const nombre = nombreUsuario.trim();
    const email = emailUsuario.trim().toLowerCase();
    const contrasenia = contraseniaUsuario.trim();
    const repContrasenia = repContraseniaUsuario.trim();

    if (!nombre) {
      nuevosErrores.nombreUsuario = "El nombre es obligatorio";
    } else if (nombre.length < 3 || nombre.length > 40) {
      nuevosErrores.nombreUsuario =
        "El nombre debe tener entre 3 y 40 caracteres";
    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nombre)) {
      nuevosErrores.nombreUsuario =
        "El nombre solo puede contener letras y espacios";
    }

    if (!email) {
      nuevosErrores.emailUsuario = "El correo es obligatorio";
    } else if (email.length < 5 || email.length > 80) {
      nuevosErrores.emailUsuario = "El correo tiene una longitud inválida";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      nuevosErrores.emailUsuario = "Formato de correo inválido";
    }

    if (!contrasenia) {
      nuevosErrores.contraseniaUsuario = "La contraseña es obligatoria";
    } else if (contrasenia.length < 8) {
      nuevosErrores.contraseniaUsuario =
        "La contraseña debe tener al menos 8 caracteres";
    } else if (!/[A-Z]/.test(contrasenia)) {
      nuevosErrores.contraseniaUsuario =
        "Debe contener al menos una letra mayúscula";
    } else if (!/[a-z]/.test(contrasenia)) {
      nuevosErrores.contraseniaUsuario =
        "Debe contener al menos una letra minúscula";
    } else if (!/[0-9]/.test(contrasenia)) {
      nuevosErrores.contraseniaUsuario = "Debe contener al menos un número";
    }

    if (!repContrasenia) {
      nuevosErrores.repContraseniaUsuario = "Debes repetir la contraseña";
    } else if (repContrasenia !== contrasenia) {
      nuevosErrores.repContraseniaUsuario = "Las contraseñas no coinciden";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center my-5">
        <Form noValidate onSubmit={handleClickRegisterForm}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre de usuario </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={nombreUsuario}
              onChange={(ev) => {
                setNombreUsuario(ev.target.value);
                setErrores((prev) => ({ ...prev, nombreUsuario: null }));
              }}
              isInvalid={!!errores.nombreUsuario}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errores.nombreUsuario}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo </Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo"
              value={emailUsuario}
              onChange={(ev) => {
                setEmailUsuario(ev.target.value);
                setErrores((prev) => ({ ...prev, emailUsuario: null }));
              }}
              isInvalid={!!errores.emailUsuario}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errores.emailUsuario}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={contraseniaUsuario}
              onChange={(ev) => {
                setContraseniaUsuario(ev.target.value);
                setErrores((prev) => ({ ...prev, contraseniaUsuario: null }));
              }}
              isInvalid={!!errores.contraseniaUsuario}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errores.contraseniaUsuario}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Repetir contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Repetir contraseña"
              value={repContraseniaUsuario}
              onChange={(ev) => {
                setRepContraseniaUsuario(ev.target.value);
                setErrores((prev) => ({
                  ...prev,
                  repContraseniaUsuario: null,
                }));
              }}
              isInvalid={!!errores.repContraseniaUsuario}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errores.repContraseniaUsuario}
            </Form.Control.Feedback>
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
