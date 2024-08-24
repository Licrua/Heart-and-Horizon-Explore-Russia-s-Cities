import { useTranslation } from 'react-i18next';
import KazanCarouselHeader from './KazanCarouselHeader';
import KazanCarouselItems from './KazanCarouselItems';
import KazanCarouselSection from './KazanCarouselSection';

function KazanAttractionCarousel() {
  const { t } = useTranslation('kazanTranslation');
  return (
    <KazanCarouselSection>
      <KazanCarouselHeader t={t} />
      <KazanCarouselItems t={t} />
    </KazanCarouselSection>
  );
}

export default KazanAttractionCarousel;
