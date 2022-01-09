import { configureStore } from '@reduxjs/toolkit';
import type { Middleware, Store } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';

import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './root.saga';

import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const makeStore = (context: Context) =>
  configureStore({ reducer: rootReducer, middleware: middlewares });
const store = makeStore({});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});
export default wrapper;
