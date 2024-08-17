import { toast, Bounce } from 'react-toastify'; // Убедитесь, что Bounce правильно импортируется
import i18next from 'i18next';

// Определение типа уведомления
type NotificationType = 'success' | 'error' | 'formSuccess';

const notify = (type: NotificationType): void => {
  switch (type) {
    case 'success':
      toast.success(i18next.t('successNotify', { ns: 'notifyTranslation' }), {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      break;
    case 'error':
      toast.error(i18next.t('errorNotify', { ns: 'notifyTranslation' }), {
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
      break;

    case 'formSuccess':
      toast.success(
        i18next.t('formSuccessNotify', { ns: 'notifyTranslation' }),
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

    default:
      console.warn('Invalid notification type');
  }
};

export default notify;
