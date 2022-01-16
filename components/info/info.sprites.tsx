import React from 'react';
import Image from 'next/image';
import type { PokemonSprites } from 'pokenode-ts';

interface ISpritesProps {
  name: string;
  sprites: PokemonSprites;
}

const Sprites = ({
  name,
  sprites: { front_default, front_shiny },
}: ISpritesProps) => {
  return (
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
  );
};

export default Sprites;
