import { ReactNode } from 'react';

type ChelyabinskCarouselSectionType = {
  children: ReactNode;
};

function ChelyabinskCarouselSection({
  children,
}: ChelyabinskCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default ChelyabinskCarouselSection;
