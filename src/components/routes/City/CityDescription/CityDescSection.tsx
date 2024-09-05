import { motion } from 'framer-motion';
import { CitySectionType } from 'types/cityComponenType';

function CityDescSection({ children, sectionVariant }: CitySectionType) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariant}
      className="border-bottom border-3"
    >
      {children}
    </motion.section>
  );
}

export default CityDescSection;
