import style from './Pagina2.module.css';
import gres from "../../assets/descarga.webp"; 
import mueble from "../../assets/71mszIJDQ0L._AC_SL1500_.webp";
import adornos from "../../assets/descarga-_1_.webp";
import { useNavigate } from 'react-router-dom';
  
const Pagina2 = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/productos');
  };
  
  return (
    <div className={style.contenedor}>
      <div className={style.texto}>
        <h1 className={style.titulo}>Reflexivo y<br />funcional</h1>
        <button className={style.comprar_button} onClick={handleNavigation}>VER PRODUCTOS</button>
      </div>
      <div className={style.producto}>
  <img src={gres} alt="Gres" className={style.imagen} />
  <h2 className={style.titulo_h2}>Gres</h2>
  <p className={style.parrafo}>Diseños artesanales que alegran el día</p>
</div>
<div className={style.producto}>
  <img src={mueble} alt="Mueble" className={style.imagen} />
  <h2 className={style.titulo_h2}>Muebles</h2>
  <p className={style.parrafo}>Artículos informales pero sofisticados <br /> para todas las habitaciones de la casa</p>
</div>
<div className={style.producto}>
  <img src={adornos} alt="Adornos" className={style.imagen} />
  <h2 className={style.titulo_h2}>Adornos</h2>
  <p className={style.parrafo}>Elementos de buen gusto para mezclar <br /> y combinar para un aspecto elevado</p>
</div>
    </div>
  );

};


export default Pagina2; 