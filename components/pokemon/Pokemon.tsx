import { useEffect, useState, useMemo, useRef } from 'react';
import { randBehaviour } from 'utils/randomFns';
import { randX, randY } from 'utils/randomFns';
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
  const [flip, setFlip] = useState<boolean>(false);

  useEffect(() => {
    if (startup.current) {
      startup.current = false;
    } else {
      setTimeout(() => {
        setFlip(!flip);
        setX([x[1], randX()]);
        setY([y[1], randY()]);
      }, behaviorChange);
    }
  }, [behaviorChange, flip, x, y]);

  return (
    <SpriteContainer
      x={x}
      y={y}
      move={behaviorChange}
      sprite={sprite}
      flip={classNames({
        'animate-left': !startup.current && !flip,
        'animate-right': flip,
      })}
    />
  );
};

export default Pokemon;
