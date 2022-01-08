import Image from 'next/image';

import Behaviour from './behaviour';

interface IPokemonProps {
  sprite: string;
  name: string;
}

const Pokemon = ({ sprite, name }: IPokemonProps): JSX.Element => {
  return (
    <Behaviour>
      <Image src={sprite} alt={name} height="80px" width="100px" />
    </Behaviour>
  );
};

export default Pokemon;
