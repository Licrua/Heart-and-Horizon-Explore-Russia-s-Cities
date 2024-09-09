import { ReactNode } from 'react';

type cityTypeProp = {
  city: string;
};

// type translationTypeProp = {
//   t: TFunction;
// };

type AccordionSectionChildrenPropType = {
  children: ReactNode;
};
type AccordionSectionPropType = {
  city: string;
};

interface highLightType {
  id: string;
  text: string;
  className?: string;
}

interface CitySectionType {
  children: React.ReactNode;
  sectionVariant: {
    hidden: object;
    visible: object;
  };
}

export type {
  cityTypeProp,
  //   translationTypeProp,
  AccordionSectionChildrenPropType,
  AccordionSectionPropType,
  highLightType,
  CitySectionType,
};
