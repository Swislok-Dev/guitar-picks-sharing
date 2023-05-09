import React from 'react';
import GuitarImage from './guitar/GuitarImage';

function GuitarItem({ guitar }) {
  return (
    <div className="guitar-item rounded p-4  m-2">
      <GuitarImage imageUrl={guitar.imageUrl} alt={`${guitar.brand}\n${guitar.model}`}/>
      <h2>{guitar.brand}</h2>
      <h2>{guitar.model}</h2>
      <h2>{guitar.style}</h2>
      <h2>{guitar.user_id}</h2>

    </div>
  );
}

export default GuitarItem;
