import { motion } from 'framer-motion';

interface NizhnyNovgorodSectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

function NizhnyNovgorodDescSection({
  children,
  sectionVariant,
}: NizhnyNovgorodSectionType) {
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

export default NizhnyNovgorodDescSection;
