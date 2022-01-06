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

  const [flip, setFlip] = useState(false);
  let startup = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      setFlip(!flip);
      startup.current = false;
    }, randomInteger(1500, 4000));
  }, [flip]);

  return (
    <SpriteContainer
      startX={startX}
      startY={startY}
      sprite={sprite}
      animation={classNames({
        'animate-left': !startup.current && !flip,
        'animate-right': flip,
      })}
    />
  );
};

export default Pokemon;
