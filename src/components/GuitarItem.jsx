import React from 'react';

function GuitarItem({ imageUrl }) {
  
  return (
    <div className="border-gray-500 border-2 p-4  m-2">
      <img className="object-scale-down cursor-pointer" src={imageUrl} alt="guitar photo" />
    </div>
  );
}

export default GuitarItem;
