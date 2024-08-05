// src/features/items/itemsSlice.js
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// Создаем адаптер для сущностей
const itemsAdapter = createEntityAdapter();

// Определяем начальное состояние с адаптером
const initialState = itemsAdapter.getInitialState();

// Создаем срез
const citiesTrial = createSlice({
  name: 'citiesTrial',
  initialState,
  reducers: {
    // Добавляем несколько сущностей
    addCityTrial: (state, { payload }) => {
      itemsAdapter.addMany(state, payload);
    },
    // Устанавливаем все сущности
    sortCities: (state, { payload }) => {
      const arrik = Object.values(state.entities);
      if (payload === 'asc') {
        arrik.sort((a, b) => a.foundation_date - b.foundation_date);
      } else if (payload === 'desc') {
        arrik.sort((a, b) => b.foundation_date - a.foundation_date);
      }
      itemsAdapter.setAll(state, arrik);
    },
    // Обновляем или добавляем одну сущность
    upsertCityTrial: (state, action) => {
      itemsAdapter.upsertOne(state, action.payload);
    },
  },
});

// Экспортируем действия
export const { sortCities, addCityTrial, upsertCityTrial } =
  citiesTrial.actions;

// Экспортируем редуктор
export default citiesTrial.reducer;

// Экспортируем селекторы
export const { selectEntities, selectById, selectAll } =
  itemsAdapter.getSelectors(
    (state: { citiesTrial: ReturnType<typeof citiesTrial.reducer> }) =>
      state.citiesTrial
  );
// export const { selectAll: selectAllItems, selectEntities } =
//   itemsAdapter.getSelectors((state) => state.citiesTrial);
