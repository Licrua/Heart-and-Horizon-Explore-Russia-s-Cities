import { ReactNode } from 'react';

type MoscowCarouselSectionType = {
  children: ReactNode;
};

function MoscowCarouselSection({ children }: MoscowCarouselSectionType) {
  return <section className="border-bottom border-2">{children}</section>;
}

export default MoscowCarouselSection;
