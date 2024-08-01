import { motion, useScroll } from 'framer-motion';

export function Spb() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <p style={{ height: '10000px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illum
        qui ullam, esse in error eum aut laboriosam iusto quae sunt quia cum
        totam similique vel quos, vero aperiam inventore!
      </p>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
    </>
  );
}
export default Spb;
