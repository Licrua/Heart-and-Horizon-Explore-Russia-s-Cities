import FooterMain from '@components/footer/FooterMain';
import HeaderMain from '@components/header/HeaderMain';
import { Outlet, useLocation } from 'react-router-dom';
import routes from '@data/routesData';
import { useMemo } from 'react';
import NavigationButtons from './NavigationButtons';

function CompleteLayout() {
  const location = useLocation();
  const routesPath = useMemo(() => routes.map((item) => item.path), []);
  const isCityPath = useMemo(
    () => routesPath.includes(location.pathname),
    [routesPath, location.pathname]
  );

  return (
    <>
      <header>
        <HeaderMain />
      </header>
      <main>
        <Outlet />
      </main>
      {isCityPath && <NavigationButtons />}
      <footer className="bg-light border mt-3 border-1 p-2 d-flex justify-content-center">
        <FooterMain />
      </footer>
    </>
  );
}

export default CompleteLayout;
