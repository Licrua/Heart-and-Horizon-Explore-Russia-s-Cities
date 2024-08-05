import Header from '@components/header/Header';
import styles from '@styles/MainComponent/MainPage.module.css';
import Footer from '@components/footer/Footer';
import { useGetUsersQuery } from '@store/rtkQuery';
import { useEffect } from 'react';
import LoadingError from '@components/loading | error/LoadingError';
import LoadingSpinner from '@components/loading | error/LoadingSpinner';
import { addCities, selectEntities, selectAllCitites } from '@slices/cities';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import MainContentCityList from '@components/main/MainCityList';

function MainPage() {
  const cityEntities = useAppSelector(selectAllCitites);
  const { data, error, isLoading } = useGetUsersQuery();
  const dispatch = useAppDispatch();
  const cities = data?.record.cities;
  console.log('citiesEntites', cityEntities);
  console.log('data', data);

  useEffect(() => {
    if (cities) {
      console.log('Dispatching addManyCities with', cities);
      dispatch(addCities(cities));
    }
  }, [dispatch, cities]);
  if (isLoading) return <LoadingSpinner />;
  if (error) return <LoadingError error={error} />;
  return (
    <div className={styles.container}>
      <Header />
      <MainContentCityList cityEntities={cityEntities} dispatch={dispatch} />
      <Footer />
    </div>
  );
}
export default MainPage;
