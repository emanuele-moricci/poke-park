import Image from 'next/image';

interface IPokemonProps {
  sprite: string;
  posX?: number;
  posY?: number;
}

const Pokemon = ({
  sprite,
  posX = 0,
  posY = 0,
}: IPokemonProps): JSX.Element => {
  return (
    <div className="absolute" style={{ top: `${posY}%`, left: `${posX}%` }}>
      <Image
        src={sprite}
        alt="Muk Test"
        height="100px"
        width="100px"
        className="animate-chill"
      />
    </div>
  );
};

export default Pokemon;
