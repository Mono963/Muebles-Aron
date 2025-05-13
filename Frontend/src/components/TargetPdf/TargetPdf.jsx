import { useContext } from 'react';
import style from './TargetPdf.module.css';
import { FiDownload } from 'react-icons/fi';
import { ContextProyect } from '../../context/ContextProyect';

const TargetPdf = () => {
  const { recursos } = useContext(ContextProyect);

  return (
    <div className={style.container}>
      {recursos.length > 0 ? (
        recursos.map((recurso) => (
          <div key={recurso.id} className={style.card}>
            <img
              src={`http://localhost:8080/${recurso.imageUrl}`}
              alt={recurso.title}
              className={style.image}
            />
            <h3 className={style.title}>{recurso.title}</h3>
            <a
              href={`http://localhost:8080/${recurso.pdfUrl}`}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={style.downloadLink}
            >
              <FiDownload className={style.icon} />
              Descargar PDF
            </a>
          </div>
        ))
      ) : (
        <p className={style.noResources}>No hay recursos disponibles en este momento.</p>
      )}
    </div>
  );
};

export default TargetPdf;