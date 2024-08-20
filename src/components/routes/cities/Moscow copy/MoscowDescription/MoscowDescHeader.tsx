import { motion } from 'framer-motion';
import { TFunction } from 'i18next';

type MoscowDescHeaderTypes = {
  t: TFunction;
};
function MoscowDescHeader({ t }: MoscowDescHeaderTypes) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 0, x: 0 }}
      animate={{ opacity: 1, x: 10, y: 10 }}
      transition={{ duration: 0.5, type: 'just' }}
      whileHover={{ scale: 1.1, x: 100 }}
      className="mb-3"
    >
      {t('MoscowTranslation.headers.0.descriptionHeader')}
    </motion.h2>
  );
}

export default MoscowDescHeader;
