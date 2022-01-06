import type { GetServerSideProps } from 'next';
import randomInteger from 'random-int';

import Head from 'components/Head';
import Title from 'components/Title';
import Footer from 'components/Footer';

import Park from 'components/park/Park';
import PokemonSpawner from 'components/pokemon/pokemon.spawner';

interface IHomeProps {
  pkmnCount: number;
}

const Home = ({ pkmnCount }: IHomeProps) => {
  return (
    <div className="home">
      <Head />

      <Park />

      <main className="min-h-screen py-16">
        <Title />

        <PokemonSpawner pkmnCount={pkmnCount} />
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      pkmnCount: randomInteger(3, 6),
    },
  };
};

export default Home;
