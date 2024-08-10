import styles from '@styles/MainComponent/MainPageGreeting.module.scss';
import MainGreetingVideo from './MainGreetingVideo';
import MainGreetingText from './MainGreetingText';

function MainGreeting() {
  return (
    <>
      <MainGreetingVideo styles={styles} />
      <MainGreetingText styles={styles} />
    </>
  );
}

export default MainGreeting;
