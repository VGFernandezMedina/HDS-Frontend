import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarC.css";
import { Image } from "react-bootstrap";
import logoNavbar from "/favicon.png";

const NavbarC = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-transparente">
        <Container>
          <Navbar.Brand href="/">
            <Image className="logo-navbar" src={logoNavbar} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fuente-navbar" href="#">
                Inicio
              </Nav.Link>
              <Nav.Link className="fuente-navbar" href="#">
                Tienda
              </Nav.Link>
              <Nav.Link className="fuente-navbar" href="#">
                Contacto
              </Nav.Link>
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
              <Nav.Link className="fuente-navbar" href="#">
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link className="fuente-navbar" href="#">
                Registrarse
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
