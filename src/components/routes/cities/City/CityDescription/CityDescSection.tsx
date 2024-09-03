import { motion } from 'framer-motion';

interface CitySectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

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
