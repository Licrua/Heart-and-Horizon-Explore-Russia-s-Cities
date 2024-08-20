import { selectAllCitites } from '@slices/cities';
import { useAppSelector } from '@store/hooks';
import MainContentCityList from '@components/main/MainCityList';

function MainPage() {
  const cityEntities = useAppSelector(selectAllCitites);

  return <MainContentCityList cityEntities={cityEntities} />;
}
export default MainPage;
