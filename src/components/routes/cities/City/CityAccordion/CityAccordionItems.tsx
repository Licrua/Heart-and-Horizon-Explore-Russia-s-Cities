import { Accordion } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { TFunction } from 'i18next';

type CityAccordionItemsProps = {
  t: TFunction;
};
interface highLightType {
  id: string;
  text: string;
  className: string;
}

function CityAccordionItems({ t }: CityAccordionItemsProps) {
  const currentTheme = useAppSelector((state) => state.cities.themeColor);
  const accordionData = Object.values(
    t('CityTranslation.accordion', { returnObjects: true })
  );

  return (
    <>
      {accordionData.map((item) => (
        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body
            className={
              currentTheme === 'black' ? 'lh-3 text-white bg-black ' : 'lh-3'
            }
          >
            {item.text}
            {item.highlights.map((highlight: highLightType) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
              </span>
            ))}
            {item.suffix}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </>
  );
}

export default CityAccordionItems;
