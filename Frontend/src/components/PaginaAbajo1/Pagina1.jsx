import style from "./Pagina1.module.css";
import silla from "../../assets/81Sxr8fqcPL._AC_UF894_1000_QL80_.webp"; // Importa la imagen de la silla desde la carpeta assets

const Pagina1 = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.texto}>
        <h1 className={style.titulo}>Hechas a mano<br />conscientemente</h1>
        <p className={style.parrafo}>
          Hecha a mano y a medida, cada pieza de Muebles y más es personal y diferente a las demás.
          Inspiradas por las líneas limpias, la sensación acogedora y la paleta monocromática de un
          hogar moderno y minimalista, nos aseguramos de que cada pieza refleje la pasión y la
          artesanía que pasamos años desarrollando y perfeccionando.
        </p>
      </div>
      <div className={style.imagenContainer}>
        <img src={silla} alt="Silla" className={style.imagen} />
      </div>
    </div>
  );
};

export default Pagina1;