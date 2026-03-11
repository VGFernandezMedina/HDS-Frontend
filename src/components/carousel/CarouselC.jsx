import Carousel from "react-bootstrap/Carousel";
import "./CarouselC.css";

const CarouselC = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
        <video autoPlay muted loop playsInline>
          <source src="/carousel1.mp4" type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay muted loop playsInline>
          <source src="/carousel2.mp4" type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay muted loop playsInline>
          <source src="/carousel3.mp4" type="video/mp4" />
        </video>
      </Carousel.Item>
      <Carousel.Item>
        <video autoPlay muted loop playsInline>
          <source src="/carousel4.mp4" type="video/mp4" />
        </video>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
