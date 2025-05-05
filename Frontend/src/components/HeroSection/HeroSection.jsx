import MuebleYMas from "../Mueble/MuebleYMas";
import TituloPrincipal from "../TituloPrincipal/principal";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={style.heroSection}>
      <MuebleYMas />
      <TituloPrincipal />
    </section>
  );
};

export default HeroSection;