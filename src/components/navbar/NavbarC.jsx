import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
/* import NavLink from "react-bootstrap/NavLink"; */

import "./NavbarC.css";
import { Image } from "react-bootstrap";
import logoNavbar from "/favicon.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavbarC = () => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  const rolUsuario = JSON.parse(localStorage.getItem("rol")) || null;

  const navigate = useNavigate();
  const location = useLocation();
  const isHome =
    location.pathname === "/" || location.pathname === "/user"; /*  ||
    location.pathname === "/admin" */

  const handleLogoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    /* sessionStorage.removeItem("idUsuario"); */

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={isHome ? "navbar-transparente" : "navbar-normal"}
      >
        <Container>
          <NavLink
            to={!token ? "/" : rolUsuario === "admin" ? "/admin" : "/user"}
          >
            <Image className="logo-navbar" src={logoNavbar} />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto px-4 gap-4">
              <NavLink
                className="fuente-navbar"
                to={!token ? "/" : rolUsuario === "admin" ? "/admin" : "/user"}
              >
                Inicio
              </NavLink>
              <NavLink className="fuente-navbar" to="/shop">
                Tienda
              </NavLink>
              <NavLink className="fuente-navbar" to="#">
                Contacto
              </NavLink>
              {token && rolUsuario === "admin" && (
                <NavLink className="fuente-navbar" to="/user">
                  Vista usuario
                </NavLink>
              )}
              <NavDropdown
                className="fuente-navbar"
                title="Equipos"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item to="#">Rocket League</NavDropdown.Item>
                <NavDropdown.Item to="#">Dead by Daylight</NavDropdown.Item>
                <NavDropdown.Item to="#">Fortnite</NavDropdown.Item>
                <NavDropdown.Item to="#">Counter Strike</NavDropdown.Item>
                <NavDropdown.Item to="#">Valorant</NavDropdown.Item>
                <NavDropdown.Item to="#">League of legends</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="gap-4">
              {token ? (
                <>
                  {rolUsuario === "usuario" && (
                    <NavLink className="fuente-navbar" to="/user/cart">
                      Carrito
                    </NavLink>
                  )}
                  <NavLink className="fuente-navbar" onClick={handleLogoutUser}>
                    Cerrar Sesión
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="fuente-navbar" to="/login">
                    Iniciar Sesión
                  </NavLink>
                  <NavLink className="fuente-navbar" to="/register">
                    Registrarse
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
