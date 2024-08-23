import { useTranslation } from 'react-i18next';
import NizhnyNovgorodCarouselHeader from './NizhnyNovgorodCarouselHeader';
import NizhnyNovgorodCarouselItems from './NizhnyNovgorodCarouselItems';
import NizhnyNovgorodCarouselSection from './NizhnyNovgorodCarouselSection';

function NizhnyNovgorodAttractionCarousel() {
  const { t } = useTranslation('nizhnyNovgorodTranslation');
  return (
    <NizhnyNovgorodCarouselSection>
      <NizhnyNovgorodCarouselHeader t={t} />
      <NizhnyNovgorodCarouselItems t={t} />
    </NizhnyNovgorodCarouselSection>
  );
}

export default NizhnyNovgorodAttractionCarousel;
