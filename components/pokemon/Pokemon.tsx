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

  useEffect(() => {
    setTimeout(() => {
      startup.current = false;
      setFlip(!flip);
    }, changeBehavior);
  }, [changeBehavior, flip]);

  return (
    <SpriteContainer
      startX={startX}
      startY={startY}
      sprite={sprite}
      flip={classNames({
        'animate-left': !startup.current && !flip,
        'animate-right': flip,
      })}
    />
  );
};

export default Pokemon;
