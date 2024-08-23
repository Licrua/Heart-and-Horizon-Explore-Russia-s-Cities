import routes from '@data/routesData';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '@components/header/HeaderMain';
import FooterMain from '@components/footer/FooterMain';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';
import {
  toggleThemeSwitcher,
  setCities,
  toggleMapIconShown,
} from '@slices/cities';
import ScrollToTopArrow from '@components/ScrollToTopArrow';
import WelcomePageMain from '@components/routes/welcomePage/WelcomePageMain';
import MainPage from '@components/routes/MainPage';
import NotFound from '@components/routes/NotFound';
import {
  useGetCitiesDataEnQuery,
  useGetCitiesDataRuQuery,
} from '@store/rtkQuery';
import LoadingError from '@components/loading | error/LoadingError';
import LoadingSpinner from '@components/loading | error/LoadingSpinner';
import i18n from './i18n';

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

  const citiesRuCollection = dataCitiesRu?.record.cities;
  const citiesEnCollection = dataCitiesEn?.record.cities;
  const currentLanguage = i18n.language;
  const isWelcomePageLocation = location.pathname === '/';
  const isMainPageLocation = location.pathname === '/main';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isMainPageLocation) {
      dispatch(toggleThemeSwitcher(false));
      dispatch(toggleMapIconShown(true));
    } else {
      dispatch(toggleThemeSwitcher(true));
      dispatch(toggleMapIconShown(false));
    }
  }, [isMainPageLocation, isWelcomePageLocation, dispatch]);

  useEffect(() => {
    if (citiesRuCollection && currentLanguage === 'ru') {
      dispatch(setCities(citiesRuCollection));
    } else if (citiesEnCollection && currentLanguage === 'en') {
      dispatch(setCities(citiesEnCollection));
    }
  }, [dispatch, citiesRuCollection, currentLanguage, citiesEnCollection]);

  if (isLoadingCitiesRu || isLoadingCitiesEn) return <LoadingSpinner />;

  if (errorCitiesRu || errorCitiesEn) {
    return (
      <LoadingError
        errorCitiesRu={errorCitiesRu}
        errorCitiesEn={errorCitiesEn}
      />
    );
  }

  return (
    <>
      {!isWelcomePageLocation && <Header />}
      <ScrollToTopArrow />
      <Routes>
        <Route path="/" element={<WelcomePageMain />} />
        <Route path="/main" element={<MainPage />} />
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
