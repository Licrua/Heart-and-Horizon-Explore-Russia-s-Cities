import { useTranslation } from 'react-i18next';
import NovosibirskCarouselHeader from './NovosibirskCarouselHeader';
import NovosibirskCarouselItems from './NovosibirskCarouselItems';
import NovosibirskCarouselSection from './NovosibirskCarouselSection';

function NovosibirskAttractionCarousel() {
  const { t } = useTranslation('novosibirskTranslation');
  return (
    <NovosibirskCarouselSection>
      <NovosibirskCarouselHeader t={t} />
      <NovosibirskCarouselItems t={t} />
    </NovosibirskCarouselSection>
  );
}

export default NovosibirskAttractionCarousel;
