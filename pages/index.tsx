import absoluteUrl from 'next-absolute-url';

import type { GetServerSideProps } from 'next';
import type { Pokemon } from 'pokenode-ts';

import Head from 'components/layout/head.component';
import Title from 'components/layout/title.component';
import Footer from 'components/layout/footer.component';

import Controller from 'components/controller/controller.component';
import Park from 'components/park/park.component';
import PokemonSpawner from 'components/pokemon/pokemon.spawner';

interface IHomeProps {
  pkmnList: Pokemon[];
}

const Home = ({ pkmnList }: IHomeProps) => {
  return (
    <div className="home">
      <Head />

      <Controller />
      <Park />

      <main className="min-h-screen py-16">
        <Title />

        <PokemonSpawner pkmnList={pkmnList} />
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
