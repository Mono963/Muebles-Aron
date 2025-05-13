import React, { createContext, useState, useEffect } from 'react';

export const ContextProyect = createContext();

export const ContextProvider = ({ children }) => {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/recursos")
      .then(res => res.json())
      .then(data => setRecursos(data))
      .catch(err => console.error("Error al obtener recursos:", err));
  }, []);

  return (
    <ContextProyect.Provider value={{ recursos }}>
      {children}
    </ContextProyect.Provider>
  );
};