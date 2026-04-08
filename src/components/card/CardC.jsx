import { Link } from "react-router-dom";
import "./CardC.css";
import { Card } from "react-bootstrap";
import camiseta from "/camisetaHDS.jpg";

const CardC = ({ /* idProd, urlImagen, */ titulo, descripcion, precio }) => {
  return (
    <Card className="card-productos">
      {/* <Card.Img variant="top" src={urlImagen} /> */}
      <Card.Img variant="top" src={camiseta} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Title>${precio}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <div className="botones-productos">
          <Link to="#" className="btn-ver">
            Talles
          </Link>
          <Link to="#" className="btn-carrito">
            Añadir al carrito
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardC;
