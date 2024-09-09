import { useAppSelector } from '@store/hooks';
import { motion } from 'framer-motion';
import { useAccordionButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import { AccordionSectionPropType } from 'types/cityComponenType';

function CityDescHeader() {
  const city = useAppSelector((state) => state.cities.currentCityName);
  const { t } = useTranslation(city);
  return (
    <>
      <h1 className="text-center">{t(`${city}.title`)}</h1>
      <motion.h2
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{ opacity: 1, x: 10, y: 10 }}
        transition={{ duration: 0.5, type: 'just' }}
        whileHover={{ scale: 1.1, x: 100 }}
        className="mb-3"
      >
        {t(`${city}.headers.0.descriptionHeader`)}
      </motion.h2>
    </>
  );
}

export default CityDescHeader;
