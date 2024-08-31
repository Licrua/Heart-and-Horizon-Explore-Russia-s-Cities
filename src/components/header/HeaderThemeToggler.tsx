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

  const onClickSwitchToggler = () => dispatch(changeThemeColor());
  const onKeySwitchToggle = () => dispatch(changeThemeColor());

  return (
    <div
      aria-label="togglerSwitcher"
      className={styles.themeSwitcher}
      data-colortheme={currentColor}
      role="button"
      tabIndex={0}
      onClick={onClickSwitchToggler}
      onKeyDown={onKeySwitchToggle}
    >
      <motion.div className={styles.motionSlider} layout transition={spring} />
    </div>
  );
}
export default HeaderThemeToggler;
