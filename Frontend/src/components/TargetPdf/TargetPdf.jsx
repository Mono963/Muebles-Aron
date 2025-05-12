import { useEffect, useState } from 'react';
import style from './TargetPdf.module.css';
import { FiDownload } from 'react-icons/fi'; // Ícono de descarga

const TargetPdf = () => {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recursos")
      .then(res => res.json())
      .then(data => setRecursos(data))
      .catch(err => console.error("Error al obtener recursos:", err));
  }, []);

  return (
    <div className={style.container}>
      {recursos.map((recurso) => (
        <div key={recurso.id} className={style.card}>
          <img src={`http://localhost:8080/${recurso.imageUrl}`} alt={recurso.title} className={style.image} />
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
      ))}
    </div>
  );
};

export default TargetPdf;