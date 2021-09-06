import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragonsReducer from './dragons ';
import missionsReducer from './missions';
import rocketsReducer from './rockets';

const reducer = combineReducers({
  dragonsReducer,
  missionsReducer,
  rocketsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
