import { Link, useNavigate } from "react-router-dom";
import "./CardC.css";
import { Card } from "react-bootstrap";
import camiseta from "/camisetaHDS.jpg";
import Swal from "sweetalert2";

const CardC = ({ idProd, /* urlImagen, */ titulo, descripcion, precio }) => {
  const navigate = useNavigate();

  const agregarProductoCarrito = () => {
    const usuarioLogeado = JSON.parse(localStorage.getItem("token")) || null;

    if (!usuarioLogeado) {
      Swal.fire({
        text: "Debes iniciar sesión para poder tener un carrito",
        icon: "info",
        timer: 1500,
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

      return;
    }
  };

  return (
    <Card className="card-productos">
      {/* <Card.Img variant="top" src={urlImagen} /> */}
      <Card.Img variant="top" src={camiseta} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Title>${precio}</Card.Title>
        <Card.Text className="description">{descripcion}</Card.Text>
        <div className="botones-productos">
          <Link to="#" className="btn-ver">
            Talles
          </Link>
          <Link
            to="#"
            className="btn-carrito"
            onClick={() => agregarProductoCarrito(idProd)}
          >
            Añadir al carrito
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardC;
