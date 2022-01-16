import { useEffect, useCallback, Dispatch, SetStateAction } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { infoActions } from 'redux/info/info.slice';
import { selectPkmn } from 'redux/pokemon/pokemon.selectors';

import classNames from 'classnames';

interface IInteractProps {
  interact: boolean;
  setInteract: Dispatch<SetStateAction<boolean>>;
  name: string;
  children: JSX.Element;
}

const Interact = ({
  interact,
  setInteract,
  name,
  children,
}: IInteractProps): JSX.Element => {
  const dispatch = useDispatch();
  const pkmn = useSelector(selectPkmn(name));

  const interactWithPokemon = useCallback(() => {
    dispatch(infoActions.setDrawerOpen(pkmn));
    setInteract(true);
  }, [setInteract, dispatch, pkmn]);

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
