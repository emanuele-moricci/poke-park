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

import App, { AppInitialProps } from 'next/app';
import { END } from 'redux-saga';

import wrapper, { SagaStore } from 'redux/root.store';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = wrapper.getInitialAppProps(
    (store) => async (context) => {
      // 1. Wait for all page actions to dispatch
      const pageProps = {
        // https://nextjs.org/docs/advanced-features/custom-app#caveats
        ...(await App.getInitialProps(context)).pageProps,
      };

      // 2. Stop the saga if on server
      if (context.ctx.req) {
        store.dispatch(END);
        await (store as SagaStore).sagaTask?.toPromise();
      }

      // 3. Return props
      return { pageProps };
    }
  );

  public render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(WrappedApp);
