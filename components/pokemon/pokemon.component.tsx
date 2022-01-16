/**
  __________       __                                 
  \______   \____ |  | __ ____   _____   ____   ____  
  |     ___/  _ \|  |/ // __ \ /     \ /  _ \ /    \ 
  |    |  (  <_> )    <\  ___/|  Y Y  (  <_> )   |  \
  |____|   \____/|__|_ \\___  >__|_|  /\____/|___|  /
                      \/    \/      \/            \/ 

 * This component is responsible for rendering a pokemon sprite with its behaviour.
 *
 * The pokemon, created by the spawner, which data is fetched by the API,
 * will be instanced with the following behaviours:
 * * A random walk logic
 * * A random idle animation
 * * A random interaction animation
 *
 */
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
        <Behaviour name={name}>
          <Image src={sprite} alt={name} height="80px" width="100px" />
        </Behaviour>
      )}
    </div>
  );
};

export default Pokemon;
