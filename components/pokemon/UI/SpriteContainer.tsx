import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

import Sprite from './Sprite';

interface ISpriteContainerProps {
  sprite: string;
  flip: string;
  startX: number;
  startY: number;
}

const SpriteContainer = ({
  startX,
  startY,
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
    <div
      className={classNames('absolute', { 'animate-bounce': interact })}
      style={{ top: `${startY}%`, left: `${startX}%` }}
      onClick={interactWithPokemon}
    >
      <div className={classNames({ 'animate-chill': !interact })}>
        <Sprite sprite={sprite} alt={sprite} flip={flip} />
      </div>
    </div>
  );
};

export default SpriteContainer;
