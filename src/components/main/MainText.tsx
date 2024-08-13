import mainTextContent from '@data/mainData/mainTextContent';
import styles from '@styles/MainComponent/MainText.module.scss';
import { motion } from 'framer-motion';

function MainText() {
  const containerVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 70 },
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.background_container}
    >
      <div className={styles.background_image} />
      <div className={styles.content}>
        <h1 className="mb-3 px-3 pt-2">Россия: Путешествие в бесконечность</h1>
        {mainTextContent.map((paragraph) => (
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

export default MainText;
