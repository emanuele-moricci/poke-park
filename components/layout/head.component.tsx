import Head from 'next/head';

const SiteHead = (): JSX.Element => {
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

export default SiteHead;
