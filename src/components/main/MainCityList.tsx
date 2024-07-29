import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { selectEntities } from '@slices/cities';
import { useState } from 'react';
import filterIcon from '@images/navbar-logo/filter.webp';
import toggleSortOrderOnPopulation from '@utils/populationSort';
import toggleSortOrderOnDate from '@utils/foundationDateSort';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function MainContentCityList() {
  const cityEntities = useAppSelector((state) => selectEntities(state));
  const [data, setData] = useState(cityEntities);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const onPopulationSortHandler = () => {
    const sortedData = toggleSortOrderOnPopulation(sortOrder, data);
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const onDateSortHandler = () => {
    const sortedData = toggleSortOrderOnDate(sortOrder, data);
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Container>
      <MainContentFilterIcon
        filterIcon={filterIcon}
        filterOnFoundationDateClicked={onDateSortHandler}
        filterOnPopulationClicked={onPopulationSortHandler}
      />
      <Row xs={1} md={2} className="g-4">
        {Object.values(data).map((item) => (
          <Col key={item.id}>
            <MainCardList cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContentCityList;
