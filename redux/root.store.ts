import { configureStore } from '@reduxjs/toolkit';
import type { Middleware, Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import createSagaMiddleware, { Task } from '@redux-saga/core';
import rootSaga from './root.saga';

import rootReducer from './root.reducer';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const wrapper = createWrapper<Store<RootState>>(makeStore);
export default wrapper;
