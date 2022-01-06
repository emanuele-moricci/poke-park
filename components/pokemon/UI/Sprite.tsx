import Image from 'next/image';

interface ISpriteProps {
  sprite: string;
  alt: string;
  flip: string;
}

const Sprite = ({ sprite, alt, flip }: ISpriteProps): JSX.Element => {
  return (
    <Image
      src={sprite}
      alt={alt}
      height="80px"
      width="100px"
      className={flip}
    />
  );
};

export default Sprite;
