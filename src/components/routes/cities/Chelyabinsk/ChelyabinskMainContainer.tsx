import { Container } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { useTranslation } from 'react-i18next';
import ChelyabinskAttractionCarousel from './ChelyabinskCarousel/ChelyabinskCarouselMain';
import ChelyabinskAccordionInfo from './ChelyabinskAccordion/ChelyabinskAccordionMain';
import ChelyabinskDesc from './ChelyabinskDescription/ChelyabinskDescMain';

function ChelyabinskMainContainer() {
  const { t } = useTranslation('omskTranslation');
  const currentThemeCurrent = useAppSelector(
    (state) => state.cities.themeColor
  );

  return (
    <Container
      className={currentThemeCurrent === 'black' ? 'text-white bg-black' : ''}
    >
      {t('OmskTranslation.peter')}
      <ChelyabinskDesc />
      <ChelyabinskAttractionCarousel />
      <ChelyabinskAccordionInfo />
    </Container>
  );
}
export default ChelyabinskMainContainer;
