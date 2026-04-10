import { Button, Col, Container, Row } from "react-bootstrap";
import "./CartPage.css";
import { useEffect, useState } from "react";
import clientAxios, { configHeaders } from "../helpers/axios.helpers";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const CartPage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductoDelCarrito = async () => {
    const res = await clientAxios.get(
      "/carritos/obtenerProductos",
      configHeaders,
    );
    console.log(res.data);
    setProductos(res.data.productos);
  };

  const handleDelete = async (idProducto) => {
    Swal.fire({
      title: "Estas seguro de que quieres eliminar a este producto?",
      text: "Si te arrepientes despues puedes cargarlo nuevamente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, estoy seguro!",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const res = await clientAxios.put(
            `/carritos/eliminarProducto/${idProducto}`,
            {},
            configHeaders,
          );
          if (res.status === 200) {
            Swal.fire({
              title: "Producto eliminado del carrito!",
              text: "Tu producto fue eliminado con exito",
              icon: "success",
            });
          }
          obtenerProductoDelCarrito();
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    obtenerProductoDelCarrito();
  }, []);

  return (
    <>
      <Container fluid className="container-cart">
        <Row>
          <Col sm="12" md="6" lg="8" className="px-5">
            <div>
              <div className="par-info">
                <p>Producto</p>
                <p>Precio</p>
              </div>
              <hr />
            </div>
            {productos &&
              productos.map((producto) => (
                <Row key={producto._id} className=" pb-2">
                  <Col sm="" md="" lg="3" className="col-cart">
                    <div className="div-img-cart">
                      <img src="/camisetaHDS.jpg" alt="camisetaHDS" />
                    </div>
                  </Col>
                  <Col sm="" md="" lg="4" className="col-cart">
                    <p className="m-0">{producto.nombre}</p>
                  </Col>
                  <Col sm="" md="" lg="2" className="col-cart">
                    <p className="m-0">cantidad</p>
                  </Col>
                  <Col sm="" md="" lg="3" className="col-cart">
                    <div className="cart-price-delete">
                      <Button
                        className="button-delete-cart"
                        onClick={() => handleDelete(producto._id)}
                      >
                        <FaRegTrashAlt />
                      </Button>
                      <p className="m-0">${producto.precio}</p>
                    </div>
                  </Col>
                  <hr className="mt-4" />
                </Row>
              ))}
            <div className="par-info">
              <p>
                ¿Necesitas ayuda? Consulta nuestra sección de{" "}
                <a href="">ayuda y soporte</a> o <a href="">contáctanos</a>.
              </p>
              <Link to="/shop" className="btn-goback">
                <IoMdArrowBack size={22} />
                Volver a la tienda
              </Link>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4" className="col-cart-info p-0">
            <div className="div-cart-info">
              <h4>Resumen de compras</h4>
              <hr />
              <div className="d-flex flex-column ">
                <div className="par-info">
                  <p>Producto</p>
                  <p>precio</p>
                </div>
                <hr />
                <div className="par-info">
                  <p>Envío</p>
                  <p>precio</p>
                </div>
                <hr />
                <div className="">
                  <div className="par-info">
                    <p>Agregar un cupón</p>
                    <p>icono</p>
                  </div>
                </div>
              </div>
              <div className="total-info">
                <hr />
                <div className="par-info pb-3">
                  <p>Total</p>
                  <p>precio</p>
                </div>
                <Button>Continuar</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
