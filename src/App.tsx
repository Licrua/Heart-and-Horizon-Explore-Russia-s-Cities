import routes from '@data/routesData';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '@components/header/HeaderMain';
import FooterMain from '@components/footer/FooterMain';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';
import { changeThemableToggler } from '@slices/cities';
import ScrollToTopArrow from '@components/ScrollToTopArrow';
import WelcomePageMain from '@components/routes/welcomePage/WelcomePageMain';
import MainPage from '@components/main/MainPage';
import NotFound from '@components/routes/NotFound';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {
    data: dataCitiesRu,
    error: errorCitiesRu,
    isLoading: isLoadingCitiesRu,
  } = useGetCitiesDataRuQuery();
  const {
    data: dataCitiesEn,
    error: errorCitiesEn,
    isLoading: isLoadingCitiesEn,
  } = useGetCitiesDataEnQuery();

  const dispatch = useAppDispatch();
  const citiesRuCollection = dataCitiesRu?.record.cities;
  const citiesEnCollection = dataCitiesEn?.record.cities;
  //   const currentGreetingStatus = useAppSelector(
  //     (state) => state.cities.isGreetingButtonPressed
  //   );
  console.log('location', location);
  const isWelcomePageLocation = location.pathname === '/';

  useEffect(() => {
    if (location.pathname !== '/') {
      dispatch(changeThemableToggler(true));
      window.scrollTo(0, 0);
    } else {
      dispatch(changeThemableToggler(false));
    }
  }, [location.pathname, dispatch]);

  return (
    <>
      {!isWelcomePageLocation && <Header />}
      <ScrollToTopArrow />
      <Routes>
        {/* <Route path="/" element={<WelcomePageMain />} /> */}
        <Route path="/" element={<MainPage />} />
        {routes.map((item) => (
          <Route key={item.id} path={item.path} element={<item.element />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isWelcomePageLocation && <FooterMain />}
    </>
  );
}

export default App;
