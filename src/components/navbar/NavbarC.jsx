import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarC.css";
import { Image } from "react-bootstrap";
import logoNavbar from "/favicon.png";
import { useLocation } from "react-router-dom";

const NavbarC = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={isHome ? "navbar-transparente" : "navbar-normal"}
      >
        <Container>
          <NavLink href="/">
            <Image className="logo-navbar" src={logoNavbar} />
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="fuente-navbar" href="/">
                Inicio
              </NavLink>
              <NavLink className="fuente-navbar" href="#">
                Tienda
              </NavLink>
              <NavLink className="fuente-navbar" href="#">
                Contacto
              </NavLink>
              <NavDropdown
                className="fuente-navbar"
                title="Equipos"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="#">Rocket League</NavDropdown.Item>
                <NavDropdown.Item href="#">Dead by Daylight</NavDropdown.Item>
                <NavDropdown.Item href="#">Fortnite</NavDropdown.Item>
                <NavDropdown.Item href="#">Counter Strike</NavDropdown.Item>
                <NavDropdown.Item href="#">Valorant</NavDropdown.Item>
                <NavDropdown.Item href="#">League of legends</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavLink className="fuente-navbar" href="/login">
                Iniciar Sesión
              </NavLink>
              <NavLink className="fuente-navbar" href="/register">
                Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
