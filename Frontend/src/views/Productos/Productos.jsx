import style from './Productos.module.css';
import TargetPdf from '../../components/TargetPdf/TargetPdf.jsx';
import { useNavigate } from 'react-router-dom';

const Productos = () => {

    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/");
    }

  return (
    <div className={style.fondo}>
      <div className={style.conteiner_register}>
        <button className={style.button_home} onClick={handleClick}>
          Volver 
        </button>
        <h1 className={style.title}>Productos</h1>

        <div className={style.highlightedProduct}>
          <h2 className={style.subtitle}>Producto Destacado</h2>
          <p className={style.productDescription}>
            Aquí puedes describir el producto destacado. Explica sus características, beneficios y lo que lo hace único. ¡Dale un toque especial!
          </p>
        </div>

        <div className={style.productCards}>
          <TargetPdf />
        </div>
      </div>
    </div>
  );
};

export default Productos;