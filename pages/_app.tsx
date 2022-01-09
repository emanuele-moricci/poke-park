/**
 __________       __                              __    
\______   \____ |  | __ ____ ___________ _______|  | __
 |     ___/  _ \|  |/ // __ \\____ \__  \\_  __ \  |/ /
 |    |  (  <_> )    <\  ___/|  |_> > __ \|  | \/    < 
 |____|   \____/|__|_ \\___  >   __(____  /__|  |__|_ \
                     \/    \/|__|       \/           \/

 * Welcome to the Poképark!
 * This is a silly little app made for every Pokémon trainer in need of a break.
 * Watch your Pokémon move around the park, put on some music and just relax 💤
 * 
 */
import 'assets/styles/globals.css';
import type { AppProps } from 'next/app';

import wrapper from 'redux/root.store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
