import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./Footer.css";
import logoFooter from "/public/favicon.png";
import {
  FaArrowRight,
  FaDiscord,
  FaInstagram,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <Container fluid className="bg-footer">
        <Row className="py-5 row-footer">
          <Col sm="12" md="6" lg="3" className=" d-flex justify-content-center">
            <a href="/">
              <Image to="/" className="logo-footer" src={logoFooter} />
            </a>
          </Col>
          <Col sm="12" md="6" lg="3" className=" fuente-footer">
            <h4 className="pb-4">HDS Esports</h4>
            <ul className="list-unstyled redes">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FiTwitter size={25} /> Twitter
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={25} /> Instagram
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube size={25} /> Youtube
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitch size={25} /> Twitch
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaDiscord size={25} /> Discord
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="6" lg="3" className=" fuente-footer">
            <h4 className="pb-4">Información</h4>
            <ul className="list-unstyled info">
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Tienda
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Contacto
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  Políticas de privacidad
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="6" lg="3" className=" fuente-footer">
            <h4 className="pb-2">Mantente actualizado</h4>
            <p>
              Ingresa tu correo para recibir todas nuestras novedades! Sobre la
              tienda, eventos, sorteos, etc.
            </p>
            <InputGroup className="mb-3 input-footer">
              <Form.Control
                placeholder="Tu correo"
                type="email"
                maxLength={40}
                min={10}
              />
              <button
                type="submit"
                className="flecha-footer"
                aria-label="Enviar correo"
              >
                <FaArrowRight />
              </button>
            </InputGroup>
          </Col>
        </Row>
        <Row className="copyright">
          <Col
            sm="12"
            md="12"
            lg="12"
            className="text-center pt-3 fuente-footer"
          >
            <p>&copy; 2025 HDS Esports. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
