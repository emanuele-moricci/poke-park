import React from 'react';
import type { Pokemon } from 'pokenode-ts';

interface IContentProps {
  pkmn: Pokemon;
}

const Content = ({ pkmn }: IContentProps) => {
  console.log(pkmn);
  return <></>;
};

export default Content;
