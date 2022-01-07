import { useEffect, useState, useMemo, useRef } from 'react';
import { randBehaviour } from 'utils/randomFns';
import { randLocalX, randLocalY } from 'utils/randomFns';
import classNames from 'classnames';

import SpriteContainer from './UI/SpriteContainer';

interface IPokemonProps {
  sprite: string;
  startX: number;
  startY: number;
}

const Pokemon = ({ sprite, startX, startY }: IPokemonProps): JSX.Element => {
  const behaviorChange = useMemo(() => randBehaviour(), []);
  const [x, setX] = useState<number[]>([startX, startX]);
  const [y, setY] = useState<number[]>([startY, startY]);

  let startup = useRef<boolean>(true);
  const [flip, setFlip] = useState<string>('');

  useEffect(() => {
    if (startup.current) {
      startup.current = false;
    } else {
      setTimeout(() => {
        const newX = randLocalX(x[1]);
        const newY = randLocalY(y[1]);

        if (x[1] < newX && flip !== 'animate-right') setFlip('animate-right');
        if (x[1] > newX && flip !== 'animate-left' && flip !== '')
          setFlip('animate-left');

        setX([x[1], newX]);
        setY([y[1], newY]);
      }, behaviorChange);
    }
  }, [behaviorChange, flip, x, y]);

  return (
    <SpriteContainer
      x={x}
      y={y}
      move={behaviorChange}
      sprite={sprite}
      flip={classNames(flip)}
    />
  );
};

export default Pokemon;
