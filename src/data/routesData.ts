import Moscow from '@routes/cities/Moscow/MoscowMainContainer';
import Spb from '@routes/cities/Spb/SpbMainContainer';
import Omsk from '@routes/cities/Omsk/OmskMainContainer';
import Ekaterinburg from '@routes/cities/Ekb/EkbMainContainer';
import Kazan from '@routes/cities/Kazan/KazanMainContainer';
import Novosibirsk from '@routes/cities/Novosibirsk/NovosibirskMainContainer';
import NizhnyNovgorod from '@routes/cities/NijniyNovgorod/NizhnyNovgorodMainContainer';
import Chelyabinsk from '@routes/cities/Chelyabinsk/ChelyabinskMainContainer';

const routes = [
  { name: 'Spb', id: 1, path: '/spb', element: Spb },
  { name: 'Moscow', id: 2, path: '/moscow', element: Moscow },
  { name: 'Novosibirsk', id: 3, path: '/novosibirsk', element: Novosibirsk },
  {
    name: 'Nizhny Novgorod',
    id: 4,
    path: '/nizhnyNovgorod',
    element: NizhnyNovgorod,
  },
  { name: 'Ekaterinburg', id: 5, path: '/ekb', element: Ekaterinburg },
  { name: 'Kazan', id: 6, path: '/kazan', element: Kazan },
  {
    name: 'Chelyabinsk',
    id: 7,
    path: '/chelyabinsk',
    element: Chelyabinsk,
  },
  { name: 'Omsk', id: 8, path: '/omsk', element: Omsk },
];

export default routes;
