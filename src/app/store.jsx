import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './reducer';
import inputReducer from './inputReducer';

const store = configureStore({
  reducer: {
    ticks: ticketsReducer,
    input: inputReducer
  },
});

export default store;
