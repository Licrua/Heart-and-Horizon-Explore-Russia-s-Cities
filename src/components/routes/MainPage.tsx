import Header from '@components/header/Header';
import styles from '@styles/MainComponent/MainPage.module.css';
import MainContentCityList from '../main/MainCityList';




const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <MainContentCityList/>
    </div>
  );
};
export default MainPage;