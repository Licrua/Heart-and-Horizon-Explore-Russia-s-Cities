import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  selectEntities,
  City,
  sortCities,
  addManyCities,
  addCities,
  sortDate,
  sortItems,
} from '@slices/cities';
import { useEffect, useState } from 'react';
import filterIcon from '@images/navbar-logo/filter.webp';
// import toggleSortOrderOnPopulation from '@utils/populationSort';
// import toggleSortOrderOnDate from '@utils/foundationDateSort';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { useGetUsersQuery } from '@store/rtkQuery';
import MainSpinner from '../loading | error/LoadingSpinner';
import MainContentFilterIcon from './MainFilterIcon';
import MainCardList from './MainCardList';

function MainContentCityList({ cityEntities, dispatch }) {
  console.log('cittttitititEntites', cityEntities);
  const [order, setOrder] = useState('');

  const onHandlerSort = (value) => {
    dispatch(sortItems(value));
  };

  return (
    <Container>
      <MainContentFilterIcon
        filterIcon={filterIcon}
        sortHandler={onHandlerSort}
      />
      <Row xs={1} md={2} className="g-4">
        {cityEntities.map((item) => (
          <Col key={item.id}>
            <MainCardList cityItem={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MainContentCityList;
