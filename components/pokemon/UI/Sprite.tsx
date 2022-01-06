import Image from 'next/image';

interface ISpriteProps {
  sprite: string;
  alt: string;
  animation: string;
}

const Sprite = ({ sprite, alt, animation }: ISpriteProps): JSX.Element => {
  return (
    <Image
      src={sprite}
      alt={alt}
      height="100px"
      width="100px"
      className={animation}
    />
  );
};

export default Sprite;
