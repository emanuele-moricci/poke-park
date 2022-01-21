import dynamic from 'next/dynamic';
import type { GetServerSideProps, NextPage } from 'next';

import absoluteUrl from 'next-absolute-url';

import wrapper from 'redux/root.store';
import { pokemonActions } from 'redux/pokemon/pokemon.slice';

// Main Layout Components
import Head from 'components/layout/head.component';
import Title from 'components/layout/title.component';
import Footer from 'components/layout/footer.component';

// Main Page Components
import Park from 'components/park/park.component';
import PokemonSpawner from 'components/pokemon/pokemon.spawner';

// Lazy-Loadable Components
const Controller = dynamic(
  () => import('components/controller/controller.component')
);
const Info = dynamic(() => import('components/info/info.component'));

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head />

      <Park />

      <Controller />
      <Info />

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
