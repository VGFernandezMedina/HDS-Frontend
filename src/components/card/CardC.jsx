import { Link } from "react-router-dom";
import "./CardC.css";
import Card from "react-bootstrap";

const CardC = ({ idProd, urlImagen, titulo, descripcion, precio }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={urlImagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Title>{precio}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Link to={`/detalle-producto/${idProd}`} className="btn btn-primary">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardC;
