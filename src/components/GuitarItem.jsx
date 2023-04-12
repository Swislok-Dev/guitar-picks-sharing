import Image from 'next/image';
import React from 'react';

function GuitarItem({ imageUrl }) {
  const myLoader = () => {
    return `${imageUrl}?w=500&q=75`;
  };

  return (
    <div className="guitar-item rounded p-4  m-2">
      <Image
        loader={myLoader}
        width={500}
        height={800}
        className=" object-scale-down cursor-pointer"
        src={imageUrl}
        alt="guitar photo"
      />
    </div>
  );
}

export default GuitarItem;
