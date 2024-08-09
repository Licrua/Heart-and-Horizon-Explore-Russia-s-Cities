import { Route, Routes, useLocation } from 'react-router-dom';
import routes from '@utils/routes';
import Header from '@components/header/Header';
import Footer from '@components/footer/Footer';
import { useAppDispatch } from '@store/hooks';
import { useEffect } from 'react';
import { changeThemableToggler } from '@slices/cities';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (location.pathname !== '/') dispatch(changeThemableToggler(true));
    else {
      dispatch(changeThemableToggler(false));
    }
  });

  return (
    <div>
      <Header />
      <Routes>
        {routes.map((item) => (
          <Route key={item.id} path={item.path} element={<item.element />} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
