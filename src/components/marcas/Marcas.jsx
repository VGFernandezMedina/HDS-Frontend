import { Container } from "react-bootstrap";
import "./Marcas.css";

const Marcas = () => {
  return (
    <Container fluid className="marcas">
      <div className="separador text-center py-2">
        <h1>
          Nuestras <span className="rojo">Marcas</span>
        </h1>
      </div>
      <div className="border cont-marcas"></div>
    </Container>
  );
};

export default Marcas;
