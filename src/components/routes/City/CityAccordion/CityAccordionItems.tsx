import { Accordion } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import {
  highLightType,
  AccordionSectionPropType,
} from 'types/cityComponenType';

function CityAccordionItems({ t, city }: AccordionSectionPropType) {
  const currentTheme = useAppSelector((state) => state.cities.themeColor);
  const accordionData = Object?.values(
    t(`${city}.accordion`, { returnObjects: true })
  );

  return (
    <div>
      {accordionData?.map((item) => (
        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body
            className={
              currentTheme === 'black' ? 'lh-3 text-white bg-black ' : 'lh-3'
            }
          >
            {item.text}
            {item.highlights?.map((highlight: highLightType) => (
              <span key={highlight.id} className={highlight.className}>
                {highlight.text}
              </span>
            ))}
            {item.suffix}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </div>
  );
}

export default CityAccordionItems;
