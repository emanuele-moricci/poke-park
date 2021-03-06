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
          'transition-opacity opacity-100 duration-200 translate-x-0': isOpen,
          'transition-all delay-200 opacity-0 translate-x-full': !isOpen,
        }
      )}
    >
      <section
        className={classNames(
          'w-full max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform',
          { 'translate-x-0': isOpen, 'translate-x-full': !isOpen }
        )}
      >
        <div
          className="absolute top-4 right-3 text-xl cursor-pointer z-10 transition ease-in-out hover:scale-125 duration-150"
          onClick={closeDrawer}
        >
          X
        </div>
        <article className="relative w-full max-w-lg pb-10 flex flex-col overflow-y-auto h-full">
          <header className="p-4 font-bold text-lg capitalize">
            {pkmn?.name}
          </header>
          {pkmn && <Content pkmn={pkmn} />}
        </article>
      </section>
      <section
        className="w-full h-full cursor-pointer"
        onClick={closeDrawer}
      ></section>
    </main>
  );
};

export default Drawer;
