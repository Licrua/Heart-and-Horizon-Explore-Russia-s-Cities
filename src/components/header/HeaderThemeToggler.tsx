import styles from '@styles/Header/HeaderThemeToggler.module.scss';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { changeThemeColor } from '@slices/cities';

export function HeaderThemeToggler() {
  const dispatch = useAppDispatch();
  const currentColor = useAppSelector((state) => state.cities.themeColor);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  const toggleSwitch = () => dispatch(changeThemeColor());

  return (
    <div
      className={styles.switch}
      data-colorTheme={currentColor}
      onClick={toggleSwitch}
    >
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
}
export default HeaderThemeToggler;
