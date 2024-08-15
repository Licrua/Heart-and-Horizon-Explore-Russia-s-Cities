import MainPage from '@components/main/MainPage';
import Moscow from '@routes/cities/Moscow/MoscowMainContainer';
import Spb from '@routes/cities/Spb/Spb';
import Omsk from '@routes/cities/Omsk/OmskMain';
import Ekaterinburg from '@routes/cities/Ekb/EkaterinburgMain';
import Kazan from '@routes/cities/Kazan/KazanMain';
import Novosibirsk from '@routes/cities/Novosibirsk/NovosibirskMain';
import NizhnyNovgorod from '@routes/cities/NijNovgorod/NizhnyNovgorodMain';
import Chelyabinsk from '@routes/cities/Chelybinsk/ChelybinskMain';
import NotFound from '@routes/NotFound';

const routes = [
  { name: 'MainPage', id: 0, path: '/', element: MainPage },
  { name: 'Moscow', id: 1, path: '/moscow', element: Moscow },
  { name: 'Spb', id: 2, path: '/spb', element: Spb },
  { name: 'Omsk', id: 3, path: '/omsk', element: Omsk },
  { name: 'Ekaterinburg', id: 4, path: '/ekb', element: Ekaterinburg },
  { name: 'Kazan', id: 5, path: '/kazan', element: Kazan },
  {
    name: 'Novosibirsk',
    id: 6,
    path: '/novosibirsk',
    element: Novosibirsk,
  },
  {
    name: 'Nizhny Novgorod',
    id: 7,
    path: '/nizhny-novgorod',
    element: NizhnyNovgorod,
  },
  {
    name: 'Chelyabinsk',
    id: 8,
    path: '/chelyabinsk',
    element: Chelyabinsk,
  },
  { name: 'NotFound', id: 9, path: '*', element: NotFound },
];

export default routes;
