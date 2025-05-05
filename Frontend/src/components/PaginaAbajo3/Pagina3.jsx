import style from './Pagina3.module.css';
import sabrina from "../../assets/sabrina.webp"; 
import monica from "../../assets/monica.webp";
import emma from "../../assets/emma.webp";
  
const Pagina3 = () => {
    return (
      <div className={style.contenedor}>
        <h1 className={style.titulo}>Clientes<br />satisfechos</h1>
  
        <div className={style.filaProductos}>
          <div className={style.producto}>
            <img src={sabrina} alt="sabrina" className={style.imagen} />
            <h2 className={style.titulo_h2}>Sabrina Purdue</h2>
            <p className={style.parrafo}>
              «Las horas de comer mi familia son siempre muy especiales gracias a los hermosos platos que conseguí en Mueblería».
            </p>
          </div>
  
          <div className={style.producto}>
            <img src={monica} alt="monica" className={style.imagen} />
            <h2 className={style.titulo_h2}>Mónica Ortiz</h2>
            <p className={style.parrafo}>
              «Estoy muy contenta con mi nuevo sofá: la calidad es estupenda, es cómodo y eleva el aspecto de mi casa».
            </p>
          </div>
  
          <div className={style.producto}>
            <img src={emma} alt="emma" className={style.imagen} />
            <h2 className={style.titulo_h2}>Emma Miranda</h2>
            <p className={style.parrafo}>
              «Me encanta lo atemporal que es mi decoración. Solo necesito mover las cosas de sitio para que el aspecto de mi espacio mejore».
            </p>
          </div>
        </div>
      </div>
    );
  };


export default Pagina3; 