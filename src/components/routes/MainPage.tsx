import { useGetUsersQuery } from '@store/rtkQuery';
import { useEffect } from 'react';
import LoadingError from '@components/loading | error/LoadingError';
import LoadingSpinner from '@components/loading | error/LoadingSpinner';
import { addCities, selectAllCitites } from '@slices/cities';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import MainGreetingMain from '@components/main/MainGreetingMain';
import MainContentCityList from '@components/main/MainCityList';

function MainPage() {
  const cityEntities = useAppSelector(selectAllCitites);
  const CurrentGreetingState = useAppSelector(
    (state) => state.cities.isGreetingButtonPressed
  );
  const { data, error, isLoading } = useGetUsersQuery();
  const dispatch = useAppDispatch();
  const cities = data?.record.cities;

  useEffect(() => {
    if (cities) {
      dispatch(addCities(cities));
    }
  }, [dispatch, cities]);
  if (isLoading) return <LoadingSpinner />;
  if (error) return <LoadingError error={error} />;
  return CurrentGreetingState === false ? (
    <MainGreetingMain />
  ) : (
    <MainContentCityList cityEntities={cityEntities} />
  );
}
export default MainPage;
