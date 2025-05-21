import React, { createContext, useState, useEffect } from 'react';

export const ContextProyect = createContext();

export const ContextProvider = ({ children }) => {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    const fetchRecursos = async () => {
      try {
        const res = await fetch("http://localhost:8080/recursos");
        const data = await res.json();
        setRecursos(data);
      } catch (err) {
        console.error("Error al obtener recursos:", err);
      }
    };

    fetchRecursos();
  }, []);

  return (
    <ContextProyect.Provider value={{ recursos }}>
      {children}
    </ContextProyect.Provider>
  );
};