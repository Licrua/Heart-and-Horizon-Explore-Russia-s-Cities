import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AccordionSectionType = {
  children: ReactNode;
};

function AccordionSection({ children }: AccordionSectionType) {
  return (
    <section className="my-3 ">
      <motion.h2
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 5, x: 5 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, x: 100 }}
        className="mb-3"
      >
        Дополнительная информация
      </motion.h2>
      {children}
    </section>
  );
}

export default AccordionSection;
