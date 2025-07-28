import "./HomePage.css";
import CarouselC from "../components/carousel/CarouselC";
import Equipos from "../components/equipos/Equipos";
import Noticias from "../components/noticias/Noticias";

const HomePage = () => {
  return (
    <div className="bg-imagen">
      <CarouselC />
      <Equipos />
      <Noticias />
    </div>
  );
};

export default HomePage;
