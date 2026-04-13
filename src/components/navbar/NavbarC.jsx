import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
/* import NavLink from "react-bootstrap/NavLink"; */

import "./NavbarC.css";
import { Image } from "react-bootstrap";
import logoNavbar from "/favicon.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import clientAxios, { configHeaders } from "../../helpers/axios.helpers";

const NavbarC = () => {
  const token = JSON.parse(localStorage.getItem("token")) || null;
  const rolUsuario = JSON.parse(localStorage.getItem("rol")) || null;
  const [cantidad, setCantidad] = useState(null);

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

  // Actualiza el numero de productos del carrito

  async function obtenerCarrito() {
    try {
      const res = await clientAxios.get(
        "/carritos/obtenerProductos",
        configHeaders,
      );
      const productos = res.data.productos || [];
      const total = productos.length;
      setCantidad(total);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    obtenerCarrito();
  }, []);

  useEffect(function () {
    const actualizar = () => {
      obtenerCarrito();
    };
    window.addEventListener("carritoActualizado", actualizar);
    return function () {
      window.removeEventListener("carritoActualizado", actualizar);
    };
  }, []);

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
                    <NavLink
                      to="/user/cart"
                      className="position-relative fuente-navbar py-2"
                    >
                      <BsCart2
                        size={22}
                        className={cantidad ? "cart-anim" : ""}
                      />

                      {cantidad > 0 && (
                        <span key={cantidad} className="cart-badge">
                          {cantidad > 99 ? "99+" : cantidad}
                        </span>
                      )}
                    </NavLink>
                  )}
                  <NavLink
                    className="fuente-navbar py-2"
                    onClick={handleLogoutUser}
                  >
                    Cerrar Sesión
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink className="fuente-navbar py-2" to="/login">
                    Iniciar Sesión
                  </NavLink>
                  <NavLink className="fuente-navbar py-2" to="/register">
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
