import routes from '@data/routesData';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useAppDispatch } from '@store/hooks';
import { useEffect, useMemo, lazy, Suspense } from 'react';
import {
  toggleThemeSwitcher,
  setCities,
  toggleMapIconShown,
} from '@slices/cities';
import ScrollToTopArrow from '@components/layout/ScrollToTopArrow';
import {
  useGetCitiesDataEnQuery,
  useGetCitiesDataRuQuery,
} from '@store/rtkQuery';
import LoadingError from '@components/loading | error/LoadingError';
import LoadingSpinner from '@components/loading | error/LoadingSpinner';
import SimpleLayout from '@components/layout/SimpleLayout';
import ucFirst from '@utils/ucFirst';
import i18n from './i18n';
import CompleteLayout from './components/layout/CompleteLayout';

const CityMainContainer = lazy(
  () => import('@components/routes/City/CityMainContainer')
);
const WelcomePageMain = lazy(
  () => import('@components/routes/welcomePage/WelcomePageMain')
);
const MainPage = lazy(() => import('@components/routes/MainPage'));
const NotFound = lazy(() => import('@components/routes/NotFound'));

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

  const citiesRuCollection = useMemo(
    () => dataCitiesRu?.record.cities,
    [dataCitiesRu]
  );
  const citiesEnCollection = useMemo(
    () => dataCitiesEn?.record.cities,
    [dataCitiesEn]
  );
  const currentLanguage = i18n.language;

  const isMainPageLocation = location.pathname === '/main';

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toggleThemeSwitcher(!isMainPageLocation));
    dispatch(toggleMapIconShown(isMainPageLocation));
  }, [isMainPageLocation, dispatch]);

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
      <ScrollToTopArrow />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<CompleteLayout />}>
            <Route path="/main" element={<MainPage />} />
            {routes.map((item) => (
              <Route
                key={item.id}
                path={`/${item.path}`}
                element={<CityMainContainer city={ucFirst(item.name)} />}
              />
            ))}
          </Route>
          <Route path="/" element={<SimpleLayout />}>
            <Route index element={<WelcomePageMain />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
