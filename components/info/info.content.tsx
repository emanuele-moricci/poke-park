import React from 'react';
import type { Pokemon } from 'pokenode-ts';
import Image from 'next/image';

interface IContentProps {
  pkmn: Pokemon;
}

const Content = ({ pkmn }: IContentProps) => {
  const {
    id,
    name,
    height,
    weight,
    sprites: { front_default, front_shiny },
  } = pkmn;

  return (
    <div className="pl-4 flex flex-col items-start">
      <div className="mb-14 flex flex-row items-center justify-center w-full">
        <Image
          src={front_default ?? ''}
          alt={`${name} - Default`}
          height="150px"
          width="180px"
        />
        <Image
          src={front_shiny ?? ''}
          alt={`${name} - Shiny`}
          height="150px"
          width="180px"
        />
      </div>
      <span>ID: {id}</span>
      <span>Height: {height}</span>
      <span>Weight: {weight}</span>
    </div>
  );
};

export default Content;
