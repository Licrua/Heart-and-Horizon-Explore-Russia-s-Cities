import { motion } from 'framer-motion';

interface MoscowSectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

function MoscowDescSection({ children, sectionVariant }: MoscowSectionType) {
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

export default MoscowDescSection;
