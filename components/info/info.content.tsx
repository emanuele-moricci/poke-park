import React from 'react';
import Image from 'next/image';
import type { Pokemon } from 'pokenode-ts';

import Typing from './info.typing';

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
    types,
    ...rest
  } = pkmn;
  console.log(rest);

  return (
    <div className="pl-4 flex flex-col items-start">
      <Typing types={types} />
      <div className="my-10 flex flex-row items-center justify-center w-full">
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
      <span>Height: {(height * 0.1).toFixed(2)} Meters</span>
      <span>Weight: {(weight * 0.1).toFixed(2)} Kilograms</span>
    </div>
  );
};

export default Content;
