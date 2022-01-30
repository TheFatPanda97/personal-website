import { configureStore } from '@reduxjs/toolkit';
import tabSlice from './tabSlice';

export const store = configureStore({
  reducer: {
    tabs: tabSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
