import { ReactNode } from 'react';

type SpbCarouselSectionType = {
  children: ReactNode;
};

function SpbCarouselSection({ children }: SpbCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default SpbCarouselSection;
