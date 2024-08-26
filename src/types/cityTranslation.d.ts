interface Header {
  accordionHeader: string;
  carouselHeader: string;
  descriptionHeader: string;
}

interface Highlight {
  id: string;
  text: string;
  className: string;
}

interface AccordionItem {
  eventKey: string;
  title: string;
  text: string;
  highlights?: Highlight[];
  suffix: string;
}

interface DescriptionSection {
  id: string;
  prefix: string;
  text: string;
  highlights?: Highlight[];
  moreHighlights?: Highlight[];
  suffix: string;
}

interface Attraction {
  name: string;
  id: number;
  src: string;
  description: string;
}

interface CityTranslation {
  headers: Header[];
  accordion: AccordionItem[];
  descriptionSection: DescriptionSection[];
  attractions: Attraction[];
}
