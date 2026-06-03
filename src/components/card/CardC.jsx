import { Link, useNavigate } from "react-router-dom";
import "./CardC.css";
import { Button, Card } from "react-bootstrap";
/* import camiseta from "/camisetaHDS.jpg"; */
import Swal from "sweetalert2";
import clientAxios, { configHeaders } from "../../helpers/axios.helpers";

const CardC = ({ idProd, urlImagen, titulo, descripcion, precio }) => {
  const navigate = useNavigate();

  const agregarProductoCarrito = async (idProducto) => {
    try {
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

      const res = await clientAxios.put(
        `/carritos/agregarProducto/${idProducto}`,
        {},
        configHeaders,
      );
      window.dispatchEvent(new Event("carritoActualizado"));
      if (res.status === 200) {
        Swal.fire({
          title: `${res.data.msg}`,
          icon: "success",
        });
      }
    } catch (error) {
      if (error.status === 400) {
        Swal.fire({
          title: `${error.response.data.msg}`,
          icon: "error",
        });
      }
    }
  };

  return (
    <Card
      className="card-productos"
      onClick={() => navigate(`/product-detail/${idProd}`)}
      style={{ cursor: "pointer" }}
    >
      <Card.Img variant="top" src={urlImagen} />
      {/* <Card.Img variant="top" src={camiseta} /> */}
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Title>${precio}</Card.Title>
        <Card.Text className="description">{descripcion}</Card.Text>
        <div className="botones-productos">
          <Link to="#" className="btn-ver">
            Talles
          </Link>
          <Button
            className="btn-carrito"
            variant="success"
            onClick={(e) => {
              e.stopPropagation();
              agregarProductoCarrito(idProd);
            }}
          >
            Agregar al Carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardC;
