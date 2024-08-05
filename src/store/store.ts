import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from '@slices/cities';
import trial from '@slices/trial';
import { api } from './rtkQuery';

const store = configureStore({
  reducer: {
    cities: citiesSlice,
    citiesTrial: trial,
    [api.reducerPath]: api.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware);
  },
});

store.subscribe(() => {
  const value = store.getState();
  console.log('storeActions', value);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
