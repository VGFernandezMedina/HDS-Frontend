import "./HomePage.css";
import CarouselC from "../components/carousel/CarouselC";
import Equipos from "../components/equipos/Equipos";
import Noticias from "../components/noticias/Noticias";
import Marcas from "../components/marcas/Marcas";

const HomePage = () => {
  return (
    <div className="bg-imagen">
      <CarouselC />
      <Equipos />
      <Noticias />
      <Marcas />
    </div>
  );
};

export default HomePage;
