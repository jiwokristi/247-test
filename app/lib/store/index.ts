import { configureStore } from '@reduxjs/toolkit';

import glossaryReducer from './glossarySlice';

const store = configureStore({
  reducer: {
    glossary: glossaryReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
