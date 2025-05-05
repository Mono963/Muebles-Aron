import style from "./Principal.module.css";
import { useNavigate } from "react-router-dom";

const TituloPrincipal = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/formulario")
  }
  return (
    <div className={style.titulo}>
      <h1>Hecho a mano <br /> para tu hogar</h1>
      <div className={style.button_container}>
        <button className={style.comprar_button} onClick={handleClick}>CONTACTANOS</button>
      </div>
    </div>
  );
};

export default TituloPrincipal;