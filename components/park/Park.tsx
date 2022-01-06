import Image from 'next/image';

import bgTest from 'assets/images/pkmn-test-bg.jpeg';

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
