import style from './NotFound.module.css';
import { Link } from 'react-router-dom';
import Error_page from '../../assets/404.webp'; 

const NotFound = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.texto}>
        <h1 className={style.titulo}>404 - Página No Encontrada</h1>
        <p className={style.parrafo}>
          Lo sentimos, la página que estás buscando no existe. Por favor, revisa la dirección o vuelve al inicio.
        </p>
        <Link to="/" className={style.boton}>
          Volver al Inicio
        </Link>
      </div>
      <div className={style.imagenContainer}>
        <img
          src={Error_page} // Asegúrate de tener una imagen ilustrativa
          alt="Página no encontrada"
          className={style.imagen}
        />
      </div>
    </div>
  );
};

export default NotFound;