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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon,
  faSun,
  faVolumeMute,
  faVolumeUp,
  faRecycle,
} from '@fortawesome/free-solid-svg-icons';

const Controller = (): JSX.Element => {
  const dispatch = useDispatch();
  const loading = useSelector(selectPkmnLoading);
  const darkMode = useSelector(selectMode);
  const play = useSelector(selectPlay);

  return (
    <>
      <button
        className="absolute top-[2%] left-[90%] z-50"
        disabled={loading}
        onClick={() => dispatch(pokemonActions.fetchPokemonStart())}
      >
        <FontAwesomeIcon icon={faRecycle} />
      </button>
      <button
        className="absolute top-[2%] left-[93%] z-50"
        onClick={() => dispatch(parkActions.toggleMode())}
      >
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </button>
      <button
        className="absolute top-[2%] left-[96%] z-50"
        onClick={() => dispatch(parkActions.togglePlay())}
      >
        <FontAwesomeIcon
          icon={play !== 'PLAYING' ? faVolumeMute : faVolumeUp}
        />
      </button>
    </>
  );
};

export default Controller;
