import styles from '@styles/MainComponents/MainText.module.scss';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';

type MainOpeningTextPropsType = {
  t: TFunction;
};

function MainOpeningText({ t }: MainOpeningTextPropsType) {
  const containerVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70 },
    },
  };

  const introductoryTextTranslation = Object.values(
    t('introductoryText', { returnObjects: true })
  );
  const introductoryTitleTranslation = t('introductoryTitle');

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.background_container}
    >
      <div className={styles.background_image} />
      <div className={styles.content}>
        <h1 className={styles.mainOpeningTextheader}>
          {introductoryTitleTranslation}
        </h1>
        {introductoryTextTranslation.map((paragraph) => (
          <p className="px-3" key={paragraph.id}>
            {paragraph.initial && (
              <span className="float-start lh-1 fw-bold fs-1 me-1">
                {paragraph.initial}
              </span>
            )}
            {paragraph.text}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default MainOpeningText;
