import { useDispatch, useSelector } from 'react-redux';
import { parkActions } from 'redux/park/park.slice';
import { selectMode, selectPlay } from 'redux/park/park.selectors';

const Controller = (): JSX.Element => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectMode);
  const play = useSelector(selectPlay);

  return (
    <>
      <button
        className="absolute top-[5%] left-[90%] z-50"
        onClick={() => dispatch(parkActions.toggleMode())}
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
      <button
        className="absolute top-[5%] left-[95%] z-50"
        onClick={() => dispatch(parkActions.togglePlay())}
      >
        {play !== 'PLAYING' ? '🔇' : '🔊'}
      </button>
    </>
  );
};

export default Controller;
