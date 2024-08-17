import { useState, useEffect } from 'react';
import styles from '@styles/ScrollToTopArrow.module.scss';

function ScrollToTopArrow() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    console.log('windowsscro', window.scrollY);

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
    <button
      className={styles.scroll_arrow}
      onClick={scrollToTop}
      type="button"
      style={{ display: showScroll ? 'block' : 'none' }}
    >
      ↑
    </button>
  );
}

export default ScrollToTopArrow;
