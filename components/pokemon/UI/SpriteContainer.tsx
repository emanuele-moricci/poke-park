import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

import Sprite from './Sprite';

interface ISpriteContainerProps extends IMovementProps {
  sprite: string;
  flip: string;
}

interface IMovementProps {
  x: number[];
  y: number[];
  behaviorChange: number;
}

const SpriteContainer = ({
  x,
  y,
  behaviorChange,
  sprite,
  flip,
}: ISpriteContainerProps): JSX.Element => {
  const [interact, setInteract] = useState(false);
  const interactWithPokemon = useCallback(() => {
    setInteract(true);
  }, []);

  useEffect(() => {
    if (interact) {
      setTimeout(() => {
        setInteract(false);
      }, 1450);
    }
  }, [interact]);

  return (
    <Movement x={x} y={y} behaviorChange={behaviorChange}>
      <div
        className={classNames({ 'animate-bounce': interact })}
        onClick={interactWithPokemon}
      >
        <div className={classNames({ 'animate-chill': !interact })}>
          <Sprite sprite={sprite} alt={sprite} flip={flip} />
        </div>
      </div>
    </Movement>
  );
};

const getMoveAnimation = (x: number[], y: number[]) => keyframes`
  0% { top: ${y[0]}%; left: ${x[0]}%; }
 100% { top: ${y[1]}%; left: ${x[1]}%; }
`;

const Movement = styled.div`
  animation-name: ${({ x, y }: IMovementProps) => getMoveAnimation(x, y)};
  animation-timing-function: ease-in-out;
  animation-duration: ${({ behaviorChange }: IMovementProps) =>
    behaviorChange}ms;
  animation-iteration-count: 1;

  position: absolute;
  top: ${({ y }: IMovementProps) => y[0]}%;
  left: ${({ x }: IMovementProps) => x[0]}%;
`;

export default SpriteContainer;
