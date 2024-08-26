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

interface SectionDescription {
  id: string;
  prefix: string;
  text: string;
  highlights?: Highlight[];
  suffix: string;
}

interface Attraction {
  name: string;
  id: number;
  src: string;
  description: string;
}

interface CityTranslation {
  headers: {
    accordionHeader: string;
    carouselHeader: string;
    descriptionHeader: string;
  }[];
  accordion: AccordionItem[];
  descriptionSection: SectionDescription[];
  attractions: Attraction[];
}
