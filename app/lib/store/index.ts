import { configureStore } from '@reduxjs/toolkit';

import glossaryReducer from './glossarySlice';
import boxReducer from './boxSlice';

const store = configureStore({
  reducer: {
    glossary: glossaryReducer,
    box: boxReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
