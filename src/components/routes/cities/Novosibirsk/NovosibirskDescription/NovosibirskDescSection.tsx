import { motion } from 'framer-motion';

interface NovosibirskSectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

function NovosibirskDescSection({
  children,
  sectionVariant,
}: NovosibirskSectionType) {
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

export default NovosibirskDescSection;
