import React from 'react';
import type { Pokemon } from 'pokenode-ts';

import Typing from './info.typing';
import Stats from './info.stats';
import Sprites from './info.sprites';

interface IContentProps {
  pkmn: Pokemon;
}

const Content = ({ pkmn }: IContentProps) => {
  const { id, name, height, weight, sprites, types, stats } = pkmn;
  console.log(pkmn);

  return (
    <div className="px-4 flex flex-col items-start">
      <Typing types={types} />
      <Sprites name={name} sprites={sprites} />
      <span>ID: {id}</span>
      <span>Height: {(height * 0.1).toFixed(2)} M</span>
      <span>Weight: {(weight * 0.1).toFixed(2)} Kg</span>
      <Stats stats={stats} />
    </div>
  );
};

export default Content;
