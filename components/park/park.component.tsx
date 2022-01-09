/**
    __________               __    
  \______   \_____ _______|  | __
   |     ___/\__  \\_  __ \  |/ /
   |    |     / __ \|  | \/    < 
   |____|    (____  /__|  |__|_ \
                  \/           \/

 * This component is responsible for rendering the background image of the park.
 *
 * The current background can switch between `light` and `dark` mode
 *
 */
import { useState } from 'react';
import Image from 'next/image';

import bgLight from 'assets/images/bg/pkmn-bg-1-light.jpg';
import bgDark from 'assets/images/bg/pkmn-bg-1-dark.jpg';

const Park = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <>
      <button
        className="absolute top-[50%] left-[50%] z-50"
        onClick={() => setDarkMode(!darkMode)}
      >
        CLICK MEH
      </button>
      <div className="fixed min-h-screen top-0 bottom-0 left-0 right-0 -z-10">
        <Image
          src={!darkMode ? bgLight : bgDark}
          alt="BG Test"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </>
  );
};

export default Park;
