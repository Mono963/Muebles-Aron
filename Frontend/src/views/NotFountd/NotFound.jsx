import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Lo siento pero esta pagina no existe, porfavor pon una ruta correcta.</p>
    </div>
  );
}
 export default NotFound;