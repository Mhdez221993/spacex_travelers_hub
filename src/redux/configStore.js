import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import dragons from './dragons ';
import missions from './missions';
import rockets from './rockets';

const store = configureStore({
  reducer: {
    dragons,
    missions,
    rockets,
    // additional reducers could be added here
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
