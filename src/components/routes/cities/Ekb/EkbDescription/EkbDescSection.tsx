import { motion } from 'framer-motion';

interface KazanSectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

function KazanDescSection({ children, sectionVariant }: KazanSectionType) {
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

export default KazanDescSection;
