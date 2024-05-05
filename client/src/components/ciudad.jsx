import React from 'react';
import './ciudad.css'; // Archivo CSS para estilos personalizados de la tarjeta Ciudad

function Ciudad({number}) {
  return (
    <div className="CiudadCard">
      <h2 className='tituloCiudad'>{number}</h2>
    </div>
  );
}

export default Ciudad;
