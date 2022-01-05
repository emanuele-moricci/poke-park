import type { NextPage } from 'next';
import Image from 'next/image';

import Seo from 'components/seo';

import mukTest from 'assets/images/muk.png';

const Home: NextPage = () => {
  return (
    <div className="bg-center bg-cover bg-[url('../assets/images/pkmn-test-bg.jpeg')]">
      <Seo />

      <main className="min-h-screen py-16">
        <h1 className="text-center m-0 leading-[5rem] text-6xl animate-pulse">
          Welcome to the Poképark!
        </h1>

        <div className="flex items-end justify-center min-h-[65vh] animate-chill">
          <Image src={mukTest} alt="Muk Test" />
        </div>
      </main>

      <footer className="flex flex-1 flex-row justify-center items-center py-8 fixed bottom-0 w-full">
        <p className="pr-2">Powered by</p>
        <a
          href="https://github.com/emanuele-moricci"
          target="_blank"
          rel="noopener noreferrer"
          className="transition ease-in-out hover:-translate-y-1 hover:text-white"
        >
          @emanuele-moricci
        </a>
      </footer>
    </div>
  );
};

export default Home;
