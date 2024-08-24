import { ReactNode } from 'react';

type KazanCarouselSectionType = {
  children: ReactNode;
};

function KazanCarouselSection({ children }: KazanCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default KazanCarouselSection;
