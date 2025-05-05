import style from "./Principal.module.css";

const TituloPrincipal = () => {
  return (
    <div className={style.titulo}>
      <h1>Hecho a mano <br /> para tu hogar</h1>
      <div className={style.button_container}>
        <button className={style.comprar_button}>COMPRAR</button>
      </div>
    </div>
  );
};

export default TituloPrincipal;