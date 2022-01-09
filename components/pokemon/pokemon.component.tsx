import Image from 'next/image';

import Behaviour from './behaviour';

interface IPokemonProps {
  sprite: string;
  name: string;
}

const Pokemon = ({ sprite, name }: IPokemonProps): JSX.Element => {
  return (
    <div suppressHydrationWarning={true}>
      {process.browser && (
        <Behaviour>
          <Image src={sprite} alt={name} height="80px" width="100px" />
        </Behaviour>
      )}
    </div>
  );
};

export default Pokemon;
