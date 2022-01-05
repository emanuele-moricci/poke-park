import Head from 'next/head';

const Seo: React.FC = () => {
  return (
    <Head>
      <title>Poképark</title>
      <meta
        name="description"
        content="A space for every Pokémon trainer in need of a chill time"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
