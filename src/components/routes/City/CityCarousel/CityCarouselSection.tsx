import { ReactNode } from 'react';

type CityCarouselSectionType = {
  children: ReactNode;
};

function CityCarouselSection({ children }: CityCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default CityCarouselSection;
