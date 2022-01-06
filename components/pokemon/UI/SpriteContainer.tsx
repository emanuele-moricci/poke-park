import Sprite from './Sprite';

interface ISpriteContainerProps {
  startX: number;
  startY: number;
  sprite: string;
  animation: string;
}

const SpriteContainer = ({
  startX,
  startY,
  sprite,
  animation,
}: ISpriteContainerProps): JSX.Element => {
  return (
    <div
      className="absolute animate-chill"
      style={{ top: `${startY}%`, left: `${startX}%` }}
    >
      <Sprite sprite={sprite} alt={sprite} animation={animation} />
    </div>
  );
};

export default SpriteContainer;
