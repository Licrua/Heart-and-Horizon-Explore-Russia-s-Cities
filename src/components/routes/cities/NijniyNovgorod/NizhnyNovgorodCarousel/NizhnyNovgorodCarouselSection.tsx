import { ReactNode } from 'react';

type NizhnyNovgorodCarouselSectionType = {
  children: ReactNode;
};

function NizhnyNovgorodCarouselSection({
  children,
}: NizhnyNovgorodCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default NizhnyNovgorodCarouselSection;
