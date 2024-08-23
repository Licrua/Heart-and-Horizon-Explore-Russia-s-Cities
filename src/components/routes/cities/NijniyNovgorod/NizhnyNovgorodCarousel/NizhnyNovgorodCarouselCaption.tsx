import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';

type NizhnyNovgorodCarouselCaptionType = {
  item: {
    name: string;
    description: string;
    id: number;
    src: string;
  };
};

function NizhnyNovgorodCarouselCaption({
  item,
}: NizhnyNovgorodCarouselCaptionType) {
  const captionVariants = {
    hidden: { opacity: 0, scale: 0, y: 20, x: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };
  return (
    <Carousel.Caption
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={captionVariants}
    >
      <motion.h3
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
      >
        {item.name}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="lh-3 f-bold"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0, 0, 1, 0.5), rgba(0, 0, 0, 0))',
        }}
      >
        <strong>{item.description}</strong>
      </motion.p>
    </Carousel.Caption>
  );
}

export default NizhnyNovgorodCarouselCaption;
