import Image from 'next/image';
import React from 'react';

function GuitarImage({ imageUrl }) {
  const myLoader = () => {
    return `${imageUrl}?w=500&q=75`;
  };

  return (
    <>
      <Image
        loader={myLoader}
        width={500}
        height={800}
        className=" object-scale-down cursor-pointer"
        src={imageUrl}
        alt="guitar photo"
      />
    </>
  );
}

export default GuitarImage;
