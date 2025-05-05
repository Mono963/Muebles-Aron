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
            <h2 className={style.titulo_h2}>Dirección postal</h2>
            <p className={style.parrafo}>
            Calle Vista Alegre, 13
            Valencia, C. P. 10445
            </p>
          </div>
  
          <div className={style.producto}>
            <h2 className={style.titulo_h2}>Correo electrónico</h2>
            <p className={style.parrafo}>
            hola@soygay.es
            </p>
          </div>
  
          <div className={style.producto}>
            <h2 className={style.titulo_h2}>Número de teléfono</h2>
            <p className={style.parrafo}>
            Número de teléfono
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
export default Pagina4;
