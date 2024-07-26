import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from '@slices/cities';
import citiesTrialSlice from '@slices/trial'

const store = configureStore({
  reducer: {
    cities: citiesSlice,
    citiesTrial: citiesTrialSlice
  }
});


store.subscribe(() => {
    const value = store.getState();
    console.log('storeActions', value);
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;