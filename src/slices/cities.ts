import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  EntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';
import { log } from 'console';

export type City = {
  name: string;
  id: number;
  foundation_date: number;
  imgName: string;
  population: number;
  description: string;
};
export type citiesState = EntityState<City, number> & {
  isSorted: boolean;
  isThemable: boolean;
  themeColor: string;
  isGreetingButtonPressed: boolean;
};

const citiesAdapter: EntityAdapter<City, number> = createEntityAdapter<City>();

// Используем адаптер для получения начального состояния
const initialState: citiesState = citiesAdapter.getInitialState({
  isThemable: false,
  themeColor: 'white',
  isSorted: true,
  isGreetingButtonPressed: false,
});
const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      citiesAdapter.addOne(state, action.payload);
    },
    // addCities: (state, action: PayloadAction<Record<number, City>>) => {
    //   citiesAdapter.addMany(state, action.payload);
    // },
    setCities: (state, action: PayloadAction<Record<number, City>>) => {
      citiesAdapter.setAll(state, action.payload);
    },
    removeCity: (state, action: PayloadAction<number>) => {
      citiesAdapter.removeOne(state, action.payload);
    },
    sortItems: (state, action: PayloadAction<keyof City>) => {
      const { payload: field } = action;
      const sortOrder = state.isSorted ? 1 : -1;

      const sortedEntities = Object.values(state.entities).sort((a, b) => {
        if (field === 'population') {
          return (a.population - b.population) * sortOrder;
        }
        return (a.foundation_date - b.foundation_date) * sortOrder;
      });
      citiesAdapter.setAll(state, sortedEntities);
      state.isSorted = !state.isSorted; // инвертируем флаг сортировки
    },
    changeThemeColor: (state) => {
      state.themeColor = state.themeColor === 'white' ? 'black' : 'white';
    },
    changeThemableToggler: (state, { payload }: PayloadAction<boolean>) => {
      state.isThemable = payload;
    },
    setGreetingButtonPress: (state, { payload }: PayloadAction<boolean>) => {
      state.isGreetingButtonPressed = payload;
      console.log('BUTTONGREETiNG', state.isGreetingButtonPressed);
    },
  },
});

export const {
  addCity,
  // addCities,
  sortItems,
  changeThemeColor,
  changeThemableToggler,
  setGreetingButtonPress,
  setCities,
} = citiesSlice.actions;
export const {
  selectEntities,
  selectById,
  selectAll: selectAllCitites,
} = citiesAdapter.getSelectors(
  (state: { cities: ReturnType<typeof citiesSlice.reducer> }) => state.cities
);

// export { selectEntities };
export default citiesSlice.reducer;
