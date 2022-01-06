import Sprite from './Sprite';

interface ISpriteContainerProps extends IMovementProps {
  sprite: string;
  flip: string;
}

interface IMovementProps {
  startX: number;
  startY: number;
}

const SpriteContainer = ({
  startX,
  startY,
  sprite,
  flip,
}: ISpriteContainerProps): JSX.Element => {
  return (
    <div className="absolute" style={{ top: `${startY}%`, left: `${startX}%` }}>
      <div className="animate-chill">
        <Sprite sprite={sprite} alt={sprite} flip={flip} />
      </div>
    </div>
  );
};

export default SpriteContainer;
