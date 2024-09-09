import styles from '@styles/MainComponents/MainText.module.scss';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function MainOpeningText() {
  const { t } = useTranslation(['mainPageTranslation', 'quotesTranslation']);
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
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <h1 className={styles.main_opening_text_header}>
        {introductoryTitleTranslation}
      </h1>
      <div className={styles.text_opening_container}>
        {introductoryTextTranslation.map((paragraph) => (
          <p key={paragraph.id}>
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
