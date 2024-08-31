import { toast, Bounce } from 'react-toastify';
import i18next from 'i18next';

type NotificationType = 'success' | 'error';

const notify = (type: NotificationType): void => {
  switch (type) {
    case 'success':
      toast.success(
        i18next.t('footer.successNotify', { ns: 'footerPageTranslation' }),
        {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        }
      );
      break;
    case 'error':
      toast.error(
        i18next.t('footer.errorNotify', { ns: 'footerPageTranslation' }),
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
          transition: Bounce,
        }
      );
      break;

    default:
      toast.warning('Something wents wrong!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
  }
};

export default notify;
