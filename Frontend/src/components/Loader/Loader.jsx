import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderBackdrop}>
      <div className={styles.loaderCard}>
        <div className={styles.spinner}></div>
        <p>Cargando...</p>
      </div>
    </div>
  );
};

export default Loader;