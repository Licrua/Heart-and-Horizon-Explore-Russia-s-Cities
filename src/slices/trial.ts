import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import citiesList from '../data/cities.json';

// Создаем адаптер для работы с коллекцией сущностей
const citiesTrialAdapter = createEntityAdapter();


const {cities} = citiesList

// Начальное состояние

const initialState = citiesTrialAdapter.setAll(citiesTrialAdapter.getInitialState(), cities);

// Создаем слайс
const citiesTrialSlice = createSlice({
  name: 'citiesTrial',
  initialState,
  reducers: {
    // Добавляем один объект
    cityAdded: (state, action) => {
        citiesTrialAdapter.addOne(state, action.payload);
    },
    // Удаляем один объект по id
    cityRemoved: (state, action) => {
        citiesTrialAdapter.removeOne(state, action.payload);
    },
    // Обновляем один объект
    cityUpdated: (state, action) => {
        citiesTrialAdapter.updateOne(state, action.payload);
    }
  }
});

// Экспортируем действия
export const { cityAdded, cityRemoved, cityUpdated } = citiesTrialSlice.actions;

// Экспортируем редьюсер
export default citiesTrialSlice.reducer;
