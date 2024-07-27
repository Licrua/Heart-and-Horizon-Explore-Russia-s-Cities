import { createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import citiesList from '../data/cities.json';


export type City = {
    name: string;
    id: number,
    foundation_date: number,
    imgName: string,
    population: number,
    description: string,
  };
  
  type CitiesData = {
    cities: City[];
  };


const { cities }: CitiesData = citiesList;
const citiesAdapter = createEntityAdapter<City>();
const initialState = citiesAdapter.setAll(citiesAdapter.getInitialState(), cities);
  

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addUsers(state, {payload}: PayloadAction<City>) {
      citiesAdapter.addOne(state, payload);
    },
    upsertUser(state, {payload}: PayloadAction<City>) {
      citiesAdapter.upsertOne(state, payload);
    },
    removeUser(state, {payload}: PayloadAction<number>) {
      citiesAdapter.removeOne(state, payload);
    }
  } 
});

export const {addUsers, upsertUser, removeUser} = citiesSlice.actions;
const {
  selectEntities,
} = citiesAdapter.getSelectors((state: { cities: ReturnType<typeof citiesSlice.reducer> }) => state.cities);
console.dir('reducer', citiesSlice.reducer);

export {selectEntities};
export default citiesSlice.reducer;