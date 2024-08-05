import { motion, useScroll } from 'framer-motion';
import {
  fetchUsers,
  addMany,
  addCity,
  selectAllItems,
  addCityTrial,
  selectEntities,
  selectAll,
  sortCities,
} from '@slices/trial';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useGetUsersQuery } from '@store/rtkQuery';
import { useAppDispatch, useAppSelector } from '@store/hooks';

export function Spb() {
  const { data, error, isLoading } = useGetUsersQuery();
  const citiesData = data?.record.cities;
  console.log('citiesData', citiesData);
  console.log('data', data);
  const items = useAppSelector(selectAll);
  console.log('items', items);
  const dispatch = useAppDispatch();
  if (error) <div>Ошибка</div>;
  if (isLoading) <div>Загрузка</div>;

  useEffect(() => {
    if (data) {
      dispatch(addCityTrial(data.record.cities));
    }
  }, [dispatch, data]);

  const onHandler = () => {
    dispatch(sortCities('asc'));
  };

  return (
    <div>
      <button onClick={onHandler}>Добавить</button>
      {Object.values(items).map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
}
export default Spb;
