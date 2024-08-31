import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import routes from '@data/routesData';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { setCurrentCityIndex } from '@slices/cities';
import { useAppDispatch, useAppSelector } from '@store/hooks';

function NavigationButtons() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('navigationButtonsTranslation');
  const currentCityIndex = useAppSelector(
    (state) => state.cities.currentCityIndex
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const index = routes.findIndex((route) => route.path === location.pathname);
    if (index !== -1) {
      dispatch(setCurrentCityIndex(index));
    }
  }, [location.pathname, dispatch]);

  const goToPrevious = () => {
    const updatedIndex = (currentCityIndex - 1 + routes.length) % routes.length;
    navigate(routes[updatedIndex].path);
  };

  const goToNext = () => {
    const updatedIndex = (currentCityIndex + 1) % routes.length;
    navigate(routes[updatedIndex].path);
  };

  return (
    <div className="d-flex justify-content-between m-3">
      <Button type="button" onClick={goToPrevious}>
        {t('buttons.prevPage')}
      </Button>
      <Button type="button" onClick={goToNext}>
        {t('buttons.nextPage')}
      </Button>
    </div>
  );
}

export default NavigationButtons;
