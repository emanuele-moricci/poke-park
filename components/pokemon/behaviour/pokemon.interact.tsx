import { useEffect, useCallback, Dispatch, SetStateAction } from 'react';

import classNames from 'classnames';

interface IInteractProps {
  interact: boolean;
  setInteract: Dispatch<SetStateAction<boolean>>;
  children: JSX.Element;
}

const Interact = ({
  children,
  interact,
  setInteract,
}: IInteractProps): JSX.Element => {
  const interactWithPokemon = useCallback(() => {
    setInteract(true);
  }, [setInteract]);

  useEffect(() => {
    if (interact) {
      setTimeout(() => {
        setInteract(false);
      }, 1450);
    }
  }, [interact, setInteract]);

  return (
    <div
      className={classNames({ 'animate-bounce': interact })}
      onClick={interactWithPokemon}
    >
      {children}
    </div>
  );
};

export default Interact;
