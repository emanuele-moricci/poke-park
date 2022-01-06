import { useEffect, useState, useMemo, useRef } from 'react';
import randomInteger from 'random-int';
import classNames from 'classnames';

import SpriteContainer from './UI/SpriteContainer';

interface IPokemonProps {
  sprite: string;
}

const Pokemon = ({ sprite }: IPokemonProps): JSX.Element => {
  const startX = useMemo(() => randomInteger(0, 90), []);
  const startY = useMemo(() => randomInteger(25, 80), []);
  const changeBehavior = useMemo(() => randomInteger(1500, 4000), []);

  let startup = useRef<boolean>(true);
  const [flip, setFlip] = useState<boolean>(false);
  const [move, setMove] = useState<(number | null)[]>([null, null]);

  useEffect(() => {
    setTimeout(() => {
      startup.current = false;
      setFlip(!flip);
      setMove([randomInteger(0, 90), randomInteger(25, 80)]);
    }, changeBehavior);
  }, [flip, move, changeBehavior]);

  return (
    <SpriteContainer
      startX={startX}
      startY={startY}
      sprite={sprite}
      move={{ x: move[0], y: move[1] }}
      flip={classNames({
        'animate-left': !startup.current && !flip,
        'animate-right': flip,
      })}
    />
  );
};

export default Pokemon;
