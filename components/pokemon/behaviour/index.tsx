import { useState } from 'react';

import { randCoords } from 'utils/randomFns';

import Move from './pokemon.move';
import Interact from './pokemon.interact';
import Chill from './pokemon.chill';

import Shadow from '../ui/pokemon.shadow';

interface IBehaviourProps {
  children: JSX.Element;
}

const Behaviour = ({ children }: IBehaviourProps): JSX.Element => {
  const [interact, setInteract] = useState(false);
  const coords = randCoords();

  return (
    <Move startCoords={coords}>
      <Shadow interact={interact}>
        <Interact interact={interact} setInteract={setInteract}>
          <Chill interact={interact}>{children}</Chill>
        </Interact>
      </Shadow>
    </Move>
  );
};

export default Behaviour;
