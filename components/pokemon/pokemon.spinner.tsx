import Image from 'next/image';

import Loading from 'assets/poke-loading.gif';

const PokemonSpawner = (): JSX.Element => (
  <div className="w-screen h-screen text-center">
    <Image
      src={Loading}
      alt={'loading...'}
      height="150px"
      width="150px"
      className="m-auto"
      priority
    />
  </div>
);

export default PokemonSpawner;
