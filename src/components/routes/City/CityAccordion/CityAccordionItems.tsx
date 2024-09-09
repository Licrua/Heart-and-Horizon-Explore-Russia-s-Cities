import { Accordion } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { highLightType } from 'types/cityComponenType';
import { useTranslation } from 'react-i18next';

function CityAccordionItems() {
  const currentTheme = useAppSelector((state) => state.cities.themeColor);
  const city = useAppSelector((state) => state.cities.currentCityName);
  const { t } = useTranslation(city);

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
