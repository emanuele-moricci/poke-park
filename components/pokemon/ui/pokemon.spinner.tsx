import Image from 'next/image';

import Loading from 'assets/poke-loading.gif';

const PokemonSpinner = (): JSX.Element => (
  <div className="w-full h-full text-center">
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

export default PokemonSpinner;
