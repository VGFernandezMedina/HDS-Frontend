import { useEffect, useState } from "react";
import "./ShopPage.css";
import { Col, Container, Row } from "react-bootstrap";
import CardC from "../components/card/CardC";
import clientAxios from "../helpers/axios.helpers";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const productos = await clientAxios.get("/productos");
      setProductos(productos.data.productos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <div className="banner-tienda"></div>
      <Container fluid className="container-shop">
        <Row className="py-5">
          <Col lg="3" className="col-filtros">
            Filtros
          </Col>

          <Col lg="9" className="col-productos">
            <Row>
              {productos.map((producto) => (
                <Col
                  key={producto._id}
                  sm="12"
                  md="6"
                  lg="4"
                  className="d-flex justify-content-center py-3"
                >
                  <CardC
                    idProd={producto._id}
                    urlImagen={producto.imagen}
                    titulo={producto.nombre}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
