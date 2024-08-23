import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  EntityAdapter,
  EntityState,
} from '@reduxjs/toolkit';

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
  isMapIconShown: boolean;
};

const citiesAdapter: EntityAdapter<City, number> = createEntityAdapter<City>();

const initialState: citiesState = citiesAdapter.getInitialState({
  isThemable: false,
  themeColor: 'white',
  isSorted: true,
  isMapIconShown: false,
});
const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      citiesAdapter.addOne(state, action.payload);
    },
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
    toggleThemeSwitcher: (state, { payload }: PayloadAction<boolean>) => {
      state.isThemable = payload;
    },
    toggleMapIconShown: (state, { payload }: PayloadAction<boolean>) => {
      state.isMapIconShown = payload;
    },
  },
});

export const {
  addCity,
  sortItems,
  changeThemeColor,
  toggleThemeSwitcher,
  setCities,
  toggleMapIconShown,
} = citiesSlice.actions;
export const {
  selectEntities,
  selectById,
  selectAll: selectAllCitites,
} = citiesAdapter.getSelectors(
  (state: { cities: ReturnType<typeof citiesSlice.reducer> }) => state.cities
);

export default citiesSlice.reducer;
