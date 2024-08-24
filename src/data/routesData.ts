import Moscow from '@routes/cities/Moscow/MoscowMainContainer';
import Spb from '@routes/cities/Spb/SpbMainContainer';
import Omsk from '@routes/cities/Omsk/OmskMainContainer';
// import Ekaterinburg from '@routes/cities/Ekb/EkaterinburgMainContainer';
import Kazan from '@routes/cities/Kazan/KazanMainContainer';
import Novosibirsk from '@routes/cities/Novosibirsk/NovosibirskMainContainer';
import NizhnyNovgorod from '@routes/cities/NijniyNovgorod/NizhnyNovgorodMainContainer';
// import Chelyabinsk from '@routes/cities/Chelybinsk/ChelybinskMainContainer';

const routes = [
  { name: 'Moscow', id: 1, path: '/moscow', element: Moscow },
  { name: 'Spb', id: 2, path: '/spb', element: Spb },
  { name: 'Omsk', id: 3, path: '/omsk', element: Omsk },
  //   { name: 'Ekaterinburg', id: 4, path: '/ekb', element: Ekaterinburg },
  { name: 'Kazan', id: 5, path: '/kazan', element: Kazan },
  {
    name: 'Nizhny Novgorod',
    id: 4,
    path: '/nizhnyNovgorod',
    element: NizhnyNovgorod,
  },
  { name: 'Novosibirsk', id: 6, path: '/novosibirsk', element: Novosibirsk },
  //   {
  //     name: 'Chelyabinsk',
  //     id: 8,
  //     path: '/chelyabinsk',
  //     element: Chelyabinsk,
  //   },
];

export default routes;
