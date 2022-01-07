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
  move: number;
}

const SpriteContainer = ({
  x,
  y,
  move,
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
    <Movement
      x={x}
      y={y}
      move={move}
      className="absolute"
      style={{ top: `${y[0]}%`, left: `${x[0]}%` }}
    >
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

const Movement = styled.div`
  animation-name: ${({ x, y }: IMovementProps) => getMoveAnimation(x, y)};
  animation-timing-function: ease-in-out;
  animation-duration: ${({ move }: IMovementProps) => move}ms;
  animation-iteration-count: 1;
`;

const getMoveAnimation = (x: number[], y: number[]) => keyframes`
 100% { top: ${y[1]}%; left: ${x[1]}%; }
`;

export default SpriteContainer;
