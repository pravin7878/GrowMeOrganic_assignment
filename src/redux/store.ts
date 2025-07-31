import { configureStore } from '@reduxjs/toolkit';
import articReducer from './slices/articeSlice'; 

const store = configureStore({
  reducer: {
    artic: articReducer,
  },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
