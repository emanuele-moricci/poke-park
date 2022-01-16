/**
 .___        _____       
|   | _____/ ____\____  
|   |/    \   __\/  _ \ 
|   |   |  \  | (  <_> )
|___|___|  /__|  \____/ 
         \/             

 * This component is responsable for showing a drawer when the user interacts
 * with a specific Pokemon.
 * The information shown is:
 * * The Pokemon's name
 * * The Pokemon's types
 * * The Pokemon's sprites
 * * The Pokemon's height and weight
 * * The Pokemon's stats
 */
import React from 'react';
import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { selectInfoOpen, selectInfoPkmn } from 'redux/info/info.selectors';
import { infoActions } from 'redux/info/info.slice';

import Content from './info.content';

const Drawer = () => {
  const dispatch = useDispatch();
  const closeDrawer = () => dispatch(infoActions.setDrawerClosed());
  const isOpen = useSelector(selectInfoOpen);
  const pkmn = useSelector(selectInfoPkmn);

  return (
    <main
      className={classNames(
        'fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-[60]',
        {
          'transition-opacity opacity-100 duration-500 translate-x-0': isOpen,
          'transition-all delay-500 opacity-0 translate-x-full': !isOpen,
        }
      )}
    >
      <section
        className={classNames(
          'w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform',
          { 'translate-x-0': isOpen, 'translate-x-full': !isOpen }
        )}
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">{pkmn?.name}</header>
          {pkmn && <Content pkmn={pkmn} />}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={closeDrawer}
      ></section>
    </main>
  );
};

export default Drawer;
