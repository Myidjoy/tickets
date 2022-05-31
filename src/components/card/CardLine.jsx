import React from 'react';

function CardLine({change}) {
  return (
    <div className='card__line'>
      <div className='card__line_elem'/>
      {
        change === 1
          ? null : <div className='change'>1 пересадка</div>
      }
      <div className='card__line_elem'/>
    </div>
  );
};

export default CardLine;