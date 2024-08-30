import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '@data/routesData';

function NavigationButtons() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

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
    <div>
      <button type="button" onClick={goToPrevious}>
        Previous
      </button>
      <button type="button" onClick={goToNext}>
        Next
      </button>
    </div>
  );
}

export default NavigationButtons;
