/**
  _________                __                .__  .__                
  \_   ___ \  ____   _____/  |________  ____ |  | |  |   ___________ 
  /    \  \/ /  _ \ /    \   __\_  __ \/  _ \|  | |  | _/ __ \_  __ \
  \     \___(  <_> )   |  \  |  |  | \(  <_> )  |_|  |_\  ___/|  | \/
   \______  /\____/|___|  /__|  |__|   \____/|____/____/\___  >__|   
          \/            \/                                  \/        

 * This component is responsable for offering several controls to the user:
 * * A button to toggle the dark mode
 * * A button to toggle the music
 * 
 */
import { useDispatch, useSelector } from 'react-redux';
import { parkActions } from 'redux/park/park.slice';
import { pokemonActions } from 'redux/pokemon/pokemon.slice';
import { selectMode, selectPlay } from 'redux/park/park.selectors';
import { selectPkmnLoading } from 'redux/pokemon/pokemon.selectors';

import {
  faMoon,
  faSun,
  faVolumeMute,
  faVolumeUp,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';

import Button from './controller.button';

const Controller = (): JSX.Element => {
  const dispatch = useDispatch();
  const loading = useSelector(selectPkmnLoading);
  const darkMode = useSelector(selectMode);
  const play = useSelector(selectPlay);

  return (
    <div className="absolute z-50 w-20 flex flex-row justify-between items-center top-[2%] left-[75%] sm:left-[80%] md:left-[85%] lg:left-[90%] xl:left-[95%]">
      <Button
        disabled={loading}
        onClick={() => dispatch(pokemonActions.fetchPokemonStart())}
        icon={faRecycle}
      />
      <Button
        onClick={() => dispatch(parkActions.toggleMode())}
        icon={darkMode ? faMoon : faSun}
      />
      <Button
        onClick={() => dispatch(parkActions.togglePlay())}
        icon={play !== 'PLAYING' ? faVolumeMute : faVolumeUp}
      />
    </div>
  );
};

export default Controller;
