import { Route, Routes, useLocation } from 'react-router-dom';
import routes from '@data/routesData';
import Header from '@components/header/HeaderMain';
import FooterMain from '@components/footer/FooterMain';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';
import { changeThemableToggler } from '@slices/cities';
import ScrollToTopArrow from '@components/ScrollToTopArrow';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const currentGreetingStatus = useAppSelector(
    (state) => state.cities.isGreetingButtonPressed
  );

  useEffect(() => {
    if (location.pathname !== '/') {
      dispatch(changeThemableToggler(true));
      window.scrollTo(0, 0);
    } else {
      dispatch(changeThemableToggler(false));
    }
  });

  return (
    <div>
      {currentGreetingStatus && <Header />}
      <ScrollToTopArrow />
      <Routes>
        {routes.map((item) => (
          <Route key={item.id} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      {currentGreetingStatus && <FooterMain />}
    </div>
  );
}

export default App;
