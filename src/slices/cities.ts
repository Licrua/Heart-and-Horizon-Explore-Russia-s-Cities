import { createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import citiesList from '../data/cities.json'


type City = {
    name: string;
    id: number,
    imgName: string,
    population: string,
    foundation_date: number,
    description: string,
  };
  
  type CitiesData = {
    cities: City[];
  };


const { cities }: CitiesData = citiesList
const citiesAdapter = createEntityAdapter<City>()
const initialState = citiesAdapter.setAll(citiesAdapter.getInitialState(), cities);
  

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addUsers(state, action: PayloadAction<City>) {
          citiesAdapter.addOne(state, action)
        },
        upsertUser(state, action: PayloadAction<City>) {
          citiesAdapter.upsertOne(state, action.payload)
        },
        removeUser: citiesAdapter.removeOne,
    } 
})

export const {addUsers, upsertUser, removeUser} = citiesSlice.actions

export default citiesSlice.reducer