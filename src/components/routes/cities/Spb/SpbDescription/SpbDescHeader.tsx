import { motion } from 'framer-motion';
import { TFunction } from 'i18next';
// import { useAppSelector } from '@store/hooks';

type SpbDescHeaderTypes = {
  t: TFunction;
};
function SpbDescHeader({ t }: SpbDescHeaderTypes) {
  return (
    <>
      <h1 className="text-center">{t('spbTranslation.title')}</h1>
      <motion.h2
        className="mb-3"
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{ opacity: 1, x: 10, y: 10 }}
        transition={{ duration: 0.5, type: 'just' }}
        whileHover={{ scale: 1.1, x: 100 }}
      >
        {t('spbTranslation.headers.0.descriptionHeader')}
      </motion.h2>
    </>
  );
}

export default SpbDescHeader;
