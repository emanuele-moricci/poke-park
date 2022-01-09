import absoluteUrl from 'next-absolute-url';

import type { GetServerSideProps, NextPage } from 'next';

import Head from 'components/layout/head.component';
import Title from 'components/layout/title.component';
import Footer from 'components/layout/footer.component';

import Controller from 'components/controller/controller.component';
import Park from 'components/park/park.component';
import PokemonSpawner from 'components/pokemon/pokemon.spawner';
import wrapper from 'redux/root.store';
import { pokemonActions } from 'redux/pokemon/pokemon.slice';

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head />

      <Controller />
      <Park />

      <main className="min-h-screen py-16">
        <Title />

        <PokemonSpawner />
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ req }) => {
    const { origin } = absoluteUrl(req);

    store.dispatch({
      type: pokemonActions.setOriginUrl.type,
      payload: origin,
    });

    return {
      props: {},
    };
  });

export default Home;
