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
import toggleSortOrderOnPopulation from '@utils/populationSort';
import toggleSortOrderOnDate from '@utils/foundationDateSort';


function MainContentCityList() {

  const onPopulationSortHandler = () => {
    const sortedData =  toggleSortOrderOnPopulation(sortOrder, data);
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const onDateSortHandler = () => {
    const sortedData = toggleSortOrderOnDate(sortOrder, data);
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };


  const cityEntities = useAppSelector((state) => selectEntities(state));
  const [data, setData] = useState(cityEntities);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // const dispatch = useAppDispatch();



  
  return (
    <Container>
      <MainContentFilterIcon filterIcon={filterIcon}
        filterOnFoundationDateClicked={onDateSortHandler}
        filterOnPopulationClicked={onPopulationSortHandler}/> 
      <Row xs={1} md={2} className="g-4">
        {Object.values((data)).map((item) => (
          <Col key={item.id}> 
            <MainCardList cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>);
}

export default MainContentCityList;