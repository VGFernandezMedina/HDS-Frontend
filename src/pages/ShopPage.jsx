import "./ShopPage.css";
import { Col, Container, Row } from "react-bootstrap";

const ShopPage = () => {
  return (
    <>
      <div className="banner-tienda">
        <h1> Imagen </h1>
      </div>
      <Container fluid>
        <Row>
          <Col sm="12" md="12" lg="3" className="col-filtros">
            Filtros
          </Col>
          <Col sm="12" md="12" lg="9" className="col-productos">
            asd
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
