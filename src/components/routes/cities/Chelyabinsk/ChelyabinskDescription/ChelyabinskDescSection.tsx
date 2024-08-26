import { motion } from 'framer-motion';

interface ChelyabinskSectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

function ChelyabinskDescSection({
  children,
  sectionVariant,
}: ChelyabinskSectionType) {
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

export default ChelyabinskDescSection;
