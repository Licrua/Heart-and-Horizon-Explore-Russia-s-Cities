import { Accordion } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import accordionData from '../../../../../data/MoscowAttrData/MoscowAccordionData';

function MoscowAccordionItems() {
  const currentTheme = useAppSelector((state) => state.cities.themeColor);

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
            {item.highlights.map((highlight) => (
              <span className={highlight.className}>{highlight.text}</span>
            ))}
            {item.suffix}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </>
  );
}

export default MoscowAccordionItems;
