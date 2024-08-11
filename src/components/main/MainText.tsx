import mainTextContent from '@utils/mainRussiaText';
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
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="visible"
      >
        <h1
          style={{ textShadow: '4px 16px 7px rgba(80,80,80,1)' }}
          className="mb-4"
        >
          Россия: Путешествие в бесконечность
        </h1>
        {mainTextContent.map((paragraph) => (
          <p key={paragraph.id}>
            {paragraph.initial && (
              <span className="float-start lh-1 fw-bold fs-1 me-1">
                {paragraph.initial}
              </span>
            )}
            {paragraph.text}
          </p>
        ))}
      </motion.div>
      <hr />
    </>
  );
}

export default MainText;
