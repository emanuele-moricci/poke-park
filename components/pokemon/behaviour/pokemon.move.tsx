import { useEffect, useState, useMemo, useRef } from 'react';

import { randBehaviour, randLocalX, randLocalY } from 'utils/randomFns';
import MovementEffect from 'utils/movementEffect';

interface IMovementProps {
  startCoords: number[];
  children: JSX.Element;
}

const Move = ({ startCoords, children }: IMovementProps): JSX.Element => {
  let startup = useRef<boolean>(true);
  const behaviorChange = useMemo(() => randBehaviour(), []);

  const [x, setX] = useState<number[]>([startCoords[0], startCoords[0]]);
  const [y, setY] = useState<number[]>([startCoords[1], startCoords[1]]);
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
  }, [behaviorChange, flip, setFlip, x, y]);

  return (
    <MovementEffect
      x={x}
      y={y}
      move={behaviorChange}
      className="absolute"
      style={{ top: `${y[0]}%`, left: `${x[0]}%` }}
    >
      <div className={flip}>{children}</div>
    </MovementEffect>
  );
};

export default Move;
