import FooterMain from '@components/footer/FooterMain';
import HeaderMain from '@components/header/HeaderMain';
import { Outlet } from 'react-router-dom';

function CompleteLayout() {
  return (
    <>
      <header>
        <HeaderMain />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-light border mt-3 border-1 p-2 d-flex justify-content-center">
        <FooterMain />
      </footer>
    </>
  );
}

export default CompleteLayout;
