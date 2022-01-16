import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { randIcon } from 'utils/randomFns';

interface ISpeechProps {
  interact: boolean;
  children: JSX.Element;
}

const PokemonSpeech = ({ interact, children }: ISpeechProps): JSX.Element => {
  const [icon, setIcon] = useState(faComment);

  useEffect(() => {
    setIcon(randIcon());
  }, [interact]);

  return (
    <>
      <FontAwesomeIcon
        icon={faComment}
        className="text-white -mb-[45px] mr-[60px] z-10 text-lg"
        style={{
          transform: 'rotateY(180deg)',
          fontSize: '20px',
          visibility: interact ? 'visible' : 'hidden',
        }}
      />
      <FontAwesomeIcon
        icon={icon}
        className="text-black -mb-[45px] mr-[60px] z-20 absolute top-1"
        fontSize="12px"
        style={{
          fontSize: '10px',
          visibility: interact ? 'visible' : 'hidden',
        }}
      />
      {children}
    </>
  );
};

export default PokemonSpeech;
