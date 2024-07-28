import {  Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeUser } from '@slices/cities';
import { selectEntities } from '@slices/cities';
import { useState } from 'react';
import filterIcon from '@images/navbar-logo/filter.webp';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';

function MainContentCityList() {
  const cityEntities = useAppSelector((state) => selectEntities(state));
  const sortedPopulationCityEntites = [...Object.values(cityEntities)].sort((a,b) => b.population - a.population);
  const sortedFoundationDateCityEntites = [...Object.values(cityEntities)].sort((a,b) => b.foundation_date - a.foundation_date);
  const [isPopulaitonSorted, setPopulationSorted] = useState<boolean>(false);
  const [isFoundationDataSorted, setFoundationDataSorted] = useState<boolean>(false);
  // const dispatch = useAppDispatch();
  console.log('isFoundationDataSorted', isFoundationDataSorted);


  const populationFilterHandler = () => {
    setPopulationSorted(!isPopulaitonSorted);
  };
  const foundationDataFilterHandler = () => {
    setFoundationDataSorted(!isFoundationDataSorted);
  };
  
  return (
    <Container>
      <MainContentFilterIcon filterIcon={filterIcon} filterOnFoundationDateClicked={foundationDataFilterHandler} filterOnPopulationClicked={populationFilterHandler}/> 
      <Row xs={1} md={2} className="g-4">
        {Object.values((isPopulaitonSorted ? sortedPopulationCityEntites : isFoundationDataSorted ? sortedFoundationDateCityEntites: cityEntities)).map((item) => (
          <Col key={item.id}> 
            <MainCardList cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContentCityList;