import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragons from './dragons ';
import missions from './missions';
import rockets from './rockets';

const reducer = combineReducers({
  dragons,
  missions,
  rockets,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
