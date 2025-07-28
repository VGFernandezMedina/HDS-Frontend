import { Card } from "react-bootstrap";
import "./Noticias.css";
import torneoRL from "/torneo-rocket.webp";
import torneoCS from "/torneo-cs.jpg";
import torneoFortnite from "/torneo-fortnite.jpg";

const Noticias = () => {
  return (
    <div className="noticias">
      <div className="separador text-center py-2">
        <h1>
          Últimas <span className="rojo">Noticias</span>
        </h1>
      </div>
      <div className="cards-noticias">
        <Card>
          <Card.Img variant="top" src={torneoRL} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
              voluptatibus quasi architecto, numquam incidunt quos et rerum
              consectetur eaque, beatae, esse assumenda dolore dignissimos
              cumque fugiat nobis molestiae accusantium aliquam.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={torneoCS} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
              recusandae quos provident qui eius reprehenderit dignissimos
              molestias praesentium rem minus eligendi sint maiores! Dolorum
              expedita aut facilis natus voluptate maiores?
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={torneoFortnite} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              ducimus dicta nisi. Dignissimos, veniam itaque? Impedit modi harum
              quae delectus maxime earum cupiditate. Ducimus officiis nostrum
              deserunt exercitationem aut ex!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* <Container fluid className="productos border">
        <Row>
          <Col sm="12" md="6" lg="2" className="border col-productos">
            <div className="border">1</div>
            <div className="border">2</div>
            <div className="border">3</div>
            <div className="border">4</div>
          </Col>
          <Col sm="12" md="6" lg="5" className="border"></Col>
          <Col sm="12" md="12" lg="5" className="border col-descripcion">
            <div className="border">
              <h3>Titulo</h3>
              <span>Descripcion</span>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Noticias;
