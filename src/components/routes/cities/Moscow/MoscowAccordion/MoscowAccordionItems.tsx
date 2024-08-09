import { Accordion } from 'react-bootstrap';
import accordionData from '@utils/MoscowAccordionData';
import styles from '@styles/Cities/MoscowAccordionMain.module.css';
import { useAppSelector } from '@store/hooks';

function MoscowAccordionItems() {
  const currentTheme = useAppSelector((state) => state.cities.themeColor);

  return (
    <>
      {accordionData.map((item) => (
        <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body
            className={
              currentTheme === 'black' ? `lh-3 ${styles.accordionBody}` : 'lh-3'
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
