import React from 'react';
import GuitarImage from './guitar/GuitarImage';

function GuitarItem({ imageUrl }) {
  return (
    <div className="guitar-item rounded p-4  m-2">
      <GuitarImage imageUrl={imageUrl} />
    </div>
  );
}

export default GuitarItem;
