import { City, sortItems } from '@slices/cities';
import { useAppDispatch } from '@store/hooks';
import { TFunction } from 'i18next';
import { Dropdown } from 'react-bootstrap';

type filterIconType = {
  filterIcon: string;
  t: TFunction;
};

function MainContentFilterIcon({ filterIcon, t }: filterIconType) {
  const dispatch = useAppDispatch();

  const onHandlerSort = (value: keyof City) => dispatch(sortItems(value));

  return (
    <Dropdown>
      <Dropdown.Toggle className="mb-1" variant="link" id="dropdown-basic">
        <img
          src={filterIcon}
          alt="Dropdown Toggle"
          width="30px"
          height="30px"
          loading="lazy"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => onHandlerSort('population')}
          href="#/action-1"
        >
          {t('sortingOrder.sortOnPopulation')}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => onHandlerSort('foundation_date')}
          href="#/action-2"
        >
          {t('sortingOrder.sortOnFoundationDate')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default MainContentFilterIcon;
