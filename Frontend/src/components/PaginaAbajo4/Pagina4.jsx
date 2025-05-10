import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import style from './Pagina4.module.css';
import fondoPagina4 from "../../assets/muebles-de-madera-a-medida-1024x576.webp";

const Pagina4 = () => {
  return (
    <div
      className={style.fondo}
      style={{ backgroundImage: `url(${fondoPagina4})` }}
    >
      <div className={style.contenedor}>
        <h1 className={style.titulo}>Diseñamos<br />para ti</h1>

        <div className={style.filaProductos}>
          <div className={style.producto}>
            <FaMapMarkerAlt className={style.icono} />
            <h2 className={style.titulo_h2}>Dirección postal</h2>
            <p className={style.parrafo}>
              Calle Vista 
            </p>
          </div>

          <div className={style.producto}>
            <FaEnvelope className={style.icono} />
            <h2 className={style.titulo_h2}>Correo electrónico</h2>
            <p className={style.parrafo}>hola@soygay.es</p>
          </div>

          <div className={style.producto}>
            <FaPhone className={style.icono} />
            <h2 className={style.titulo_h2}>Número de teléfono</h2>
            <p className={style.parrafo}>+34 612 345 678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagina4;