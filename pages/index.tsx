import type { GetServerSideProps } from 'next';

import Head from 'components/Head';
import Title from 'components/Title';
import Footer from 'components/Footer';

import Park from 'components/park/Park';
import PokemonSpawner from 'components/pokemon/pokemon.spawner';

import { server } from 'config';

interface IHomeProps {
  pkmnCount: number;
}

const Home = ({ pkmnCount }: IHomeProps) => {
  console.log(process.env.NODE_ENV);

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
  const apiResponse = await fetch(`${server}/api/get-pokemon-list`);

  const data = await apiResponse.json();

  return {
    props: data,
  };
};

export default Home;
