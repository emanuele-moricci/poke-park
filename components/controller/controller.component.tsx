import { useDispatch, useSelector } from 'react-redux';
import { parkActions } from 'redux/park/park.slice';
import { selectMode } from 'redux/park/park.selectors';

const Controller = (): JSX.Element => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectMode);

  return (
    <button
      className="absolute top-[5%] left-[90%] z-50"
      onClick={() => dispatch(parkActions.toggleMode())}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default Controller;
