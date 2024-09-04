import { TFunction } from 'i18next';
import { ReactNode } from 'react';

type cityTypeProp = {
  city: string;
};

type translationTypeProp = {
  t: TFunction;
};

type AccordionSectionChildrenPropType = {
  children: ReactNode;
  t: TFunction;
  city: string;
};
type AccordionSectionPropType = {
  t: TFunction;
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
  translationTypeProp,
  AccordionSectionChildrenPropType,
  AccordionSectionPropType,
  highLightType,
  CitySectionType,
};
