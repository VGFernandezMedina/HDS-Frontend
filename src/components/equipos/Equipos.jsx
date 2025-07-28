import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Equipos.css";
import deadbydaylight from "/deadbydaylight.jpg";
import rocketleague from "/rocketleague.jpg";
import fortnite from "/fortnite.jpg";
import cs2 from "/counter-strike-2.jpg";
import lol from "/league-of-legends.jpg";
import valorant from "/valorant.jpg";

const Equipos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Solo una imagen visible
    slidesToScroll: 1,
    arrows: true, // Flechas
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // móviles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const juegos = [
    { src: deadbydaylight, nombre: "Dead By Daylight" },
    { src: rocketleague, nombre: "Rocket League" },
    { src: fortnite, nombre: "Fortnite" },
    { src: cs2, nombre: "Counter Strike" },
    { src: lol, nombre: "League of Legends" },
    { src: valorant, nombre: "Valorant" },
  ];

  return (
    <Container fluid className="equipos pt-2">
      <div className="separador text-center py-2">
        <h1>
          HDS Esports - <span className="rojo">Nuestros Equipos</span>
        </h1>
      </div>
      <div className="slider-equipos">
        <Slider {...settings}>
          {juegos.map((juego, index) => (
            <div key={index} className="col-equipos text-center">
              <div className="img-gradiante">
                <img
                  src={juego.src}
                  className="img-equipo img-fluid"
                  alt={juego.nombre}
                />
              </div>
              <h3 className="titulos-equipos">{juego.nombre}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Equipos;
