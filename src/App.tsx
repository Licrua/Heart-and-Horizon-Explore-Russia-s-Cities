import MainPage from '@components/routes/MainPage';
import NotFound from '@components/routes/NotFound';
import { Route, Routes } from 'react-router-dom';
import Spb from '@components/routes/cities/Spb/Spb';
import MoscowMain from '@components/routes/cities/Moscow/MoscowMain';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/moscow" element={<MoscowMain />} />
      <Route path="/spb" element={<Spb />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
