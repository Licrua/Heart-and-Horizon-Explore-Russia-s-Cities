import { useAppSelector } from '@store/hooks';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AccordionSectionChildrenPropType } from 'types/cityComponenType';

function AccordionSection({ children }: AccordionSectionChildrenPropType) {
  const city = useAppSelector((state) => state.cities.currentCityName);
  const { t } = useTranslation(city);
  return (
    <section className="my-3 ">
      <motion.h2
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 5, x: 5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, x: 100 }}
        className="mb-3"
      >
        {t(`${city}.headers.0.accordionHeader`)}
      </motion.h2>
      {children}
    </section>
  );
}

export default AccordionSection;
