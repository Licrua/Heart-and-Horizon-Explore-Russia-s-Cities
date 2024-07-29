import Header from '@components/header/Header';
import styles from '@styles/MainComponent/MainPage.module.css';
import Footer from '@components/footer/Footer';
import MainContentCityList from '../main/MainCityList';

function MainPage() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContentCityList />
      <Footer />
    </div>
  );
}
export default MainPage;
