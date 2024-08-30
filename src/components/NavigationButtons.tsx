import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@data/routesData';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function NavigationButtons() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation('navigationButtonsTranslation');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToPrevious = () => {
    const previousIndex = (currentIndex - 1 + routes.length) % routes.length;
    setCurrentIndex(previousIndex);
    navigate(routes[previousIndex].path);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % routes.length;
    setCurrentIndex(nextIndex);
    navigate(routes[nextIndex].path);
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
