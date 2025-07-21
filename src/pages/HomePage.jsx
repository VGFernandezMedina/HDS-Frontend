import "./HomePage.css";
import CarouselC from "../components/carousel/CarouselC";
import Equipos from "../components/equipos/Equipos";

const HomePage = () => {
  return (
    <div className="bg-imagen">
      <CarouselC />
      <Equipos />
    </div>
  );
};

export default HomePage;
