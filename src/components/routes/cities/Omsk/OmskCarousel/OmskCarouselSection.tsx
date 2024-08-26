import { ReactNode } from 'react';

type OmskCarouselSectionType = {
  children: ReactNode;
};

function OmskCarouselSection({ children }: OmskCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default OmskCarouselSection;
