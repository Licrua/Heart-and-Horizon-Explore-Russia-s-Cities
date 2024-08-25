import { ReactNode } from 'react';

type EkbCarouselSectionType = {
  children: ReactNode;
};

function EkbCarouselSection({ children }: EkbCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default EkbCarouselSection;
