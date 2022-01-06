import Sprite from './Sprite';

interface ISpriteContainerProps {
  startX: number;
  startY: number;
  sprite: string;
  move: { x: number | null; y: number | null };
  flip: string;
}

const SpriteContainer = ({
  startX,
  startY,
  sprite,
  move: { x, y },
  flip,
}: ISpriteContainerProps): JSX.Element => {
  return (
    <div
      className="absolute"
      style={{ top: `${y ?? startY}%`, left: `${x ?? startX}%` }}
    >
      <div className="animate-chill">
        <Sprite sprite={sprite} alt={sprite} flip={flip} />
      </div>
    </div>
  );
};

export default SpriteContainer;
