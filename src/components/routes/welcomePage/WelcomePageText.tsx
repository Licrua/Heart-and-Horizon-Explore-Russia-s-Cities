import { useAppDispatch } from '@store/hooks';
import { motion } from 'framer-motion';
import { setGreetingButtonPress } from '@slices/cities';
import { useTranslation } from 'react-i18next';
import WelcomePageLanguageSelector from './WelcomePageLanguageSelector';

type MainGreetingTextType = {
  styles: CSSModuleClasses;
};

function WelcomePageText({ styles }: MainGreetingTextType) {
  const { t } = useTranslation('welcomePageTranslation');
  const dispatch = useAppDispatch();
  const onGrettingTogglerHandler = () => {
    dispatch(setGreetingButtonPress(true));
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 50,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      className={styles.content}
    >
      <h1>{t('welcome')}</h1>
      <WelcomePageLanguageSelector />
      <div className={styles.font}>
        <p>{t('greeting')}</p>
        <p>
          <strong>{t('explore')}</strong>
        </p>
        <p>
          <em>{t('exploreEmphasized')}</em>
        </p>
        <p>{t('enjoy')}</p>
      </div>
      <button
        onClick={onGrettingTogglerHandler}
        type="button"
        className="btn btn-light"
      >
        {t('startExploring')}
      </button>
    </motion.div>
  );
}

export default WelcomePageText;
