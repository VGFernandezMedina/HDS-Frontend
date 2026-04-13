import { Button, Form } from "react-bootstrap";
import "./FormC.css";
import { useState } from "react";
import clientAxios from "../../helpers/axios.helpers";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const FormC = ({ idPage }) => {
  const [mostrarContrasenia, setMostrarContrasenia] = useState(false);
  const [mostrarRepContrasenia, setMostrarRepContrasenia] = useState(false);
  const [formulario, setFormulario] = useState({
    nombreUsuario: "",
    emailUsuario: "",
    contraseniaUsuario: "",
    repContraseniaUsuario: "",
  });
  /*   const [nombreUsuario, setNombreUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [contraseniaUsuario, setContraseniaUsuario] = useState("");
  const [repContraseniaUsuario, setRepContraseniaUsuario] = useState(""); */
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

  const handleClickRegisterForm = async (ev) => {
    ev.preventDefault();
    const nuevosErrores = {};

    const nombre = formulario.nombreUsuario.trim();
    const email = formulario.emailUsuario.trim().toLowerCase();
    const contrasenia = formulario.contraseniaUsuario.trim();
    const repContrasenia = formulario.repContraseniaUsuario.trim();

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
    setErrores({});

    //Crea el usuario y lo manda al backend

    const usuario = await clientAxios.post("/usuarios/register", {
      nombreUsuario: nombre,
      emailUsuario: email,
      contrasenia: contrasenia,
    });
    console.log(usuario);

    alert("El usuario fue creado con éxito");
    setFormulario({
      nombreUsuario: "",
      emailUsuario: "",
      contraseniaUsuario: "",
      repContraseniaUsuario: "",
    });
  };

  const handleChangeRegisterForm = (ev) => {
    setFormulario({ ...formulario, [ev.target.name]: ev.target.value });
  };

  const handleChangeLoginForm = async (ev) => {
    ev.preventDefault();

    const nuevosErrores = {};
    /* const email = formulario.emailUsuario.trim().toLowerCase(); */
    const nombre = formulario.nombreUsuario.trim();
    const contrasenia = formulario.contraseniaUsuario.trim();

    /* if (!email) {
      errores.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      errores.email = "Formato de correo inválido";
    } */

    if (!nombre) {
      errores.nombreUsuario = "El nombre es obligatorio";
    }

    if (!contrasenia) {
      errores.contrasenia = "La contraseña es obligatoria";
    }

    setErrores(nuevosErrores);

    if (nombre && contrasenia) {
      const res = await clientAxios.post("/usuarios/login", {
        nombreUsuario: nombre,
        contrasenia: contrasenia,
      });

      if (res.status === 200) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("rol", JSON.stringify(res.data.rolUsuario));

        if (res.data.rolUsuario === "usuario") {
          setTimeout(() => {
            navigate("/user");
          }, 1000);
        } else {
          setTimeout(() => {
            navigate("/admin");
          }, 1000);
        }
      }
    }
  };

  return (
    <>
      <div className="div-form">
        <h3>Inicia sesión en tu cuenta</h3>
        <Form
          className="form-reg-login"
          noValidate
          onSubmit={
            idPage === "register"
              ? handleClickRegisterForm
              : handleChangeLoginForm
          }
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre de usuario </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="nombreUsuario"
              value={formulario.nombreUsuario}
              onChange={handleChangeRegisterForm}
              isInvalid={!!errores.nombreUsuario}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errores.nombreUsuario}
            </Form.Control.Feedback>
          </Form.Group>

          {idPage === "register" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo </Form.Label>
              <Form.Control
                type="email"
                placeholder="Correo"
                name="emailUsuario"
                value={formulario.emailUsuario}
                onChange={handleChangeRegisterForm}
                isInvalid={!!errores.emailUsuario}
                required
              />
              <Form.Control.Feedback type="invalid">
                {errores.emailUsuario}
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Form.Group
            className={idPage === "login" ? "mb-1" : "mb-3"}
            controlId="formBasicPassword1"
          >
            <Form.Label>Contraseña</Form.Label>
            <div className="input-password-container">
              <Form.Control
                type={mostrarContrasenia ? "text" : "password"}
                placeholder="Contraseña"
                name="contraseniaUsuario"
                value={formulario.contraseniaUsuario}
                onChange={handleChangeRegisterForm}
                isInvalid={!!errores.contraseniaUsuario}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setMostrarContrasenia(!mostrarContrasenia)}
              >
                {mostrarContrasenia ? <LuEye /> : <LuEyeClosed />}
              </span>
            </div>
            <Form.Control.Feedback type="invalid">
              {errores.contraseniaUsuario}
            </Form.Control.Feedback>
          </Form.Group>

          {idPage === "login" && (
            <div>
              <p className="text-end m-0">
                <Link to="" className="forgot-link">
                  Olvidaste tu contraseña?
                </Link>
              </p>
            </div>
          )}

          {idPage === "register" && (
            <Form.Group className="mb-3" controlId="formBasicPassword2">
              <Form.Label>Repetir contraseña</Form.Label>
              <div className="input-password-container">
                <Form.Control
                  type={mostrarRepContrasenia ? "text" : "password"}
                  placeholder="Repetir contraseña"
                  name="repContraseniaUsuario"
                  value={formulario.repContraseniaUsuario}
                  onChange={handleChangeRegisterForm}
                  isInvalid={!!errores.repContraseniaUsuario}
                  required
                />

                <span
                  className="eye-icon"
                  onClick={() =>
                    setMostrarRepContrasenia(!mostrarRepContrasenia)
                  }
                >
                  {mostrarRepContrasenia ? <LuEye /> : <LuEyeClosed />}
                </span>
              </div>
              <Form.Control.Feedback type="invalid">
                {errores.repContraseniaUsuario}
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Button variant="primary" type="submit" className="btn-login">
            {idPage === "register" ? "Registrarme" : "Iniciar sesión"}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormC;
