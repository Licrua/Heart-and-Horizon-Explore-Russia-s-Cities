import { useTranslation } from 'react-i18next';
import ChelyabinskCarouselHeader from './ChelyabinskCarouselHeader';
import ChelyabinskCarouselItems from './ChelyabinskCarouselItems';
import ChelyabinskCarouselSection from './ChelyabinskCarouselSection';

function ChelyabinskAttractionCarousel() {
  const { t } = useTranslation('chelyabinskTranslation');
  return (
    <ChelyabinskCarouselSection>
      <ChelyabinskCarouselHeader t={t} />
      <ChelyabinskCarouselItems t={t} />
    </ChelyabinskCarouselSection>
  );
}

export default ChelyabinskAttractionCarousel;
