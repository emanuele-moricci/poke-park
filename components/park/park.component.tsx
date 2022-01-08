/**
    __________               __    
  \______   \_____ _______|  | __
   |     ___/\__  \\_  __ \  |/ /
   |    |     / __ \|  | \/    < 
   |____|    (____  /__|  |__|_ \
                  \/           \/

 * This component is responsible for rendering the background image of the park.
 *
 * TODO: Add a random background image with a choice to change it.
 *
 */
import Image from 'next/image';

import bgTest from 'assets/images/bg/pkmn-bg-1.jpg';

const Park = (): JSX.Element => {
  return (
    <div className="absolute min-h-screen top-0 bottom-0 left-0 right-0 -z-10">
      <Image
        src={bgTest}
        alt="BG Test"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};

export default Park;
