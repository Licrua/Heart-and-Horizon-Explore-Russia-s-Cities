import {
  createEntityAdapter,
  createSlice,
  current,
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
};

const citiesAdapter: EntityAdapter<City, number> = createEntityAdapter<City>();
console.log('CITIESADAPTER', citiesAdapter);

// Используем адаптер для получения начального состояния
const initialState: citiesState = citiesAdapter.getInitialState({
  isSorted: true,
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      citiesAdapter.addOne(state, action.payload);
    },
    addCities: (state, action: PayloadAction<City[]>) => {
      // исправляем тип на массив
      citiesAdapter.addMany(state, action.payload);
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
  },
});

export const { addCity, addCities, sortItems } = citiesSlice.actions;
export const {
  selectEntities,
  selectById,
  selectAll: selectAllCitites,
} = citiesAdapter.getSelectors(
  (state: { cities: ReturnType<typeof citiesSlice.reducer> }) => state.cities
);

// export { selectEntities };
export default citiesSlice.reducer;
