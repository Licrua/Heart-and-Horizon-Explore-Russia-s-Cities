
import Moscow from '@components/routes/cities/Moscow/Moscow';
import MainPage from '@components/routes/MainPage';
import NotFound from '@components/routes/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/moscow' element={<Moscow/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
