import Head from 'next/head';

const SiteHead = (): JSX.Element => {
  return (
    <Head>
      <title>Poképark</title>
      <meta
        name="description"
        content="A space for every Pokémon trainer in need of a chill time!"
      />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content="Welcome to the Poképark!" />
      <meta
        property="og:description"
        content="A space for every Pokémon trainer in need of a chill time!"
      />
      <meta property="og:url" content="https://poke-park.vercel.app/" />
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content="/icon.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://poke-park.vercel.app/" />
      <meta name="twitter:title" content="Welcome to the Poképark!" />
      <meta
        name="twitter:description"
        content="A space for every Pokémon trainer in need of a chill time"
      />
      <meta name="twitter:image" content="/icon.png" />
      <meta name="twitter:creator" content="@Tech_Muffin" key="twhandle" />

      {/* PWA Tags */}
      <meta name="theme-color" content="#fff" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
    </Head>
  );
};

export default SiteHead;
