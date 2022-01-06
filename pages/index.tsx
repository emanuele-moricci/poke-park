import type { GetServerSideProps } from 'next';
import type { Pokemon } from 'pokenode-ts';
import absoluteUrl from 'next-absolute-url';

import Head from 'components/Head';
import Title from 'components/Title';
import Footer from 'components/Footer';

import Park from 'components/park/Park';
import PokemonSpawner from 'components/pokemon/pokemon.spawner';

interface IHomeProps {
  pkmnCount: number;
  pkmnList: Pokemon[];
}

const Home = ({ ...pkmnData }: IHomeProps) => {
  return (
    <div className="home">
      <Head />

      <Park />

      <main className="min-h-screen py-16">
        <Title />

        <PokemonSpawner {...pkmnData} />
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
