import { combineReducers } from 'redux';

import parkReducer from './park/park.slice';

const rootReducer = combineReducers({
  park: parkReducer,
});

export default rootReducer;
