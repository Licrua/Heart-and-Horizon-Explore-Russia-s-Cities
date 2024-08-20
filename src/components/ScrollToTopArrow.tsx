import { useState, useEffect } from 'react';
import styles from '@styles/ScrollToTopArrow.module.scss';
import { motion } from 'framer-motion';

function ScrollToTopArrow() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 650) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <motion.button
      className={styles.scroll_arrow}
      onClick={scrollToTop}
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ display: showScroll ? 'block' : 'none' }}
    />
  );
}

export default ScrollToTopArrow;
