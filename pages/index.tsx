import type { GetServerSideProps } from 'next';
import absoluteUrl from 'next-absolute-url';

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { origin } = absoluteUrl(req);

  const apiResponse = await fetch(`${origin}/api/get-pokemon-list`);

  const data = await apiResponse.json();

  return {
    props: data,
  };
};

export default Home;
