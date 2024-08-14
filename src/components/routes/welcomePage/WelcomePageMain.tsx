import styles from '@styles/MainComponent/MainPageGreeting.module.scss';
import WelcomePageText from './WelcomePageText';
import WelcomePageVideo from './WelcomePageVideo';

function WelcomePageMain() {
  return (
    <>
      <WelcomePageVideo styles={styles} />
      <WelcomePageText styles={styles} />
    </>
  );
}

export default WelcomePageMain;
