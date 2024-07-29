import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import citiesList from '../data/cities.json';

const citiesTrialAdapter = createEntityAdapter();

const { cities } = citiesList;

const initialState = citiesTrialAdapter.setAll(citiesTrialAdapter.getInitialState(), cities);

const citiesTrialSlice = createSlice({
  name: 'citiesTrial',
  initialState,
  reducers: {
    cityAdded: (state, action) => {
      citiesTrialAdapter.addOne(state, action.payload);
    },
    cityRemoved: (state, action) => {
      citiesTrialAdapter.removeOne(state, action.payload);
    },
    cityUpdated: (state, action) => {
      citiesTrialAdapter.updateOne(state, action.payload);
    },
  },
});

export const { cityAdded, cityRemoved, cityUpdated } = citiesTrialSlice.actions;
export default citiesTrialSlice.reducer;
