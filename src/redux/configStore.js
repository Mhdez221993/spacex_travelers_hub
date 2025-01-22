import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dragons from './dragons ';
import missions from './missions';
import rockets from './rockets';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    dragons,
    missions,
    rockets,
    // additional reducers could be added here
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;