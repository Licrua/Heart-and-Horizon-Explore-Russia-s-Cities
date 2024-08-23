import { ReactNode } from 'react';

type NovosibirskCarouselSectionType = {
  children: ReactNode;
};

function NovosibirskCarouselSection({
  children,
}: NovosibirskCarouselSectionType) {
  return <section className="border-bottom border-3">{children}</section>;
}

export default NovosibirskCarouselSection;
