import { Button, Col, Container, Row } from "react-bootstrap";
import "./ProductDetail.css";
import clientAxios from "../helpers/axios.helpers";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbArrowForward } from "react-icons/tb";
import { FaShieldAlt } from "react-icons/fa";
/* import { useNavigate } from "react-router-dom"; */

const ProductDetail = () => {
  /* const navigate = useNavigate(); */
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  const obtenerProducto = async () => {
    try {
      const res = await clientAxios.get(`/productos/${id}`);
      setProducto(res.data.producto);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <Container fluid className="detail-container">
        <Row>
          <Col sm="12" md="6" lg="2" className="g-0 col-images">
            <p>imagenes</p>
          </Col>
          <Col sm="12" md="6" lg="5" className="g-0 col-img-detail border">
            <img src="/camisetaHDS.jpg" alt="camisetas" />
          </Col>
          <Col sm="12" md="6" lg="5" className="g-0 col-description-detail">
            <div>
              <h1 className="pb-4">{producto.nombre}</h1>
              <p className="my-1">${producto.precio}</p>
              <p>⭐⭐⭐⭐☆ (4.5)</p>
              Producto de excelente calidad, ideal para tu día a día.
            </div>
            <hr />
            <p className="pb-4">{producto.descripcion}</p>
            <div className="pb-5 d-flex flex-column gap-2">
              <div className="icon-text">
                <TbArrowForward className="icon-product" />
                <p>
                  <p className="text-red">Devolución gratis.</p> Tenés 30 días
                  desde que lo recibís.
                </p>
              </div>
              <div className="icon-text">
                <FaShieldAlt className="icon-product mx-1" />
                <p>
                  <p className="text-red">Compra Protegida.</p>
                  Se abrirá en una nueva ventana. Recibí el producto que
                  esperabas o te devolvemos tu dinero.
                </p>
              </div>
            </div>
            <ul>
              <li>Material de alta calidad</li>
              <li>Diseño moderno</li>
              <li>Ideal para uso diario</li>
            </ul>
            <div className="btns pt-4">
              <Button className="btn-custom-cart">Agregar al carrito</Button>
              <Button className="btn-custom-buy">Comprar</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
