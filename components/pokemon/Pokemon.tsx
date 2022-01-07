import { useEffect, useState, useMemo, useRef } from 'react';
import randomInteger from 'random-int';
import classNames from 'classnames';

import SpriteContainer from './UI/SpriteContainer';

interface IPokemonProps {
  sprite: string;
  startX: number;
  startY: number;
}

const Pokemon = ({ sprite, startX, startY }: IPokemonProps): JSX.Element => {
  const behaviorChange = useMemo(() => randomInteger(3000, 8000), []);
  const [x, setX] = useState<number[]>([startX, startX]);
  const [y, setY] = useState<number[]>([startY, startY]);

  let startup = useRef<boolean>(true);
  const [flip, setFlip] = useState<boolean>(false);

  console.log('START', x, y);
  useEffect(() => {
    if (startup.current) {
      startup.current = false;
    } else {
      setTimeout(() => {
        const newX = [x[1], randomInteger(0, 90)];
        const newY = [y[1], randomInteger(30, 80)];

        console.log('RENDER', newX, newY);

        setFlip(!flip);
        setX(newX);
        setY(newY);
      }, behaviorChange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [behaviorChange, flip]);

  return (
    <SpriteContainer
      x={x}
      y={y}
      behaviorChange={behaviorChange}
      sprite={sprite}
      flip={classNames({
        'animate-left': !startup.current && !flip,
        'animate-right': flip,
      })}
    />
  );
};

export default Pokemon;
