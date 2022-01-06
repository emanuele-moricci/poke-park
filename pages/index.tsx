import type { NextPage } from 'next';

import Head from 'components/Head';
import Title from 'components/Title';
import Footer from 'components/Footer';

import Pokemon from 'components/pokemon/Pokemon';
import Park from 'components/park/Park';

const Home: NextPage = () => {
  return (
    <div className="home">
      <Head />

      <Park />

      <main className="min-h-screen py-16">
        <Title />

        <Pokemon sprite="https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/muk.png" />
        <Pokemon sprite="https://img.pokemondb.net/sprites/black-white/normal/porygon-z.png" />
        <Pokemon sprite="https://img.pokemondb.net/sprites/sword-shield/normal/exploud.png" />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
