import { useEffect, useState, useMemo, useRef, useCallback } from 'react';

import { randBehaviour, randLocalX, randLocalY } from 'utils/randomFns';
import MovementEffect from 'utils/movementEffect';

interface IMovementProps {
  startCoords: number[];
  children: JSX.Element;
}

type Coords = {
  from: number;
  to: number;
};

type State = {
  x: Coords;
  y: Coords;
  flip: string;
};

const Move = ({ startCoords, children }: IMovementProps): JSX.Element => {
  let startup = useRef<boolean>(true);

  const [state, setState] = useState<State>({
    x: {
      from: startCoords[0],
      to: randLocalX(startCoords[0]),
    },
    y: {
      from: startCoords[1],
      to: randLocalY(startCoords[1]),
    },
    flip: '',
  });

  const behaviorChange = useMemo(() => randBehaviour(), []);
  const behaviourFn = useCallback(() => {
    const nextX = randLocalX(state.x.to);
    const nextY = randLocalY(state.y.to);

    let newFlip = state.flip;
    if (state.x.to < nextX && state.flip !== 'animate-right')
      newFlip = 'animate-right';
    if (
      state.x.to > nextX &&
      state.flip !== 'animate-left' &&
      state.flip !== ''
    )
      newFlip = 'animate-left';

    setState({
      x: { from: state.x.to, to: nextX },
      y: { from: state.y.to, to: nextY },
      flip: newFlip,
    });
  }, [state.flip, state.x.to, state.y.to]);

  useEffect(() => {
    if (startup.current) {
      startup.current = false;
      behaviourFn();
    } else {
      setTimeout(() => behaviourFn(), behaviorChange);
    }
  }, [behaviorChange, behaviourFn]);

  return (
    <MovementEffect
      x={[state.x.from, state.x.to]}
      y={[state.y.from, state.y.to]}
      move={behaviorChange}
      className="absolute"
      style={{ left: `${state.x.from}%`, top: `${state.y.from}%` }}
    >
      <div className={state.flip}>{children}</div>
    </MovementEffect>
  );
};

export default Move;
