import Header from '@components/header/Header';
import styles from '../styles/MainComponent/MainComponent.module.css';
import CityList from './mainContent/MainContentCityList';




const MainComponent = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <CityList/>
    </div>
  );
};
export default MainComponent;