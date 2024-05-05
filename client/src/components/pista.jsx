import React from 'react';
import './pista.css'; // Archivo CSS para estilos personalizados de la tarjeta Pista

function Pista({ number, title, description }) {
  return (
    <div className="PistaCard">
      <h2 className='tituloPista'>PISTA {number}</h2>
      <p className="PistaDescription">{description}</p>
    </div>
  );
}

export default Pista;
