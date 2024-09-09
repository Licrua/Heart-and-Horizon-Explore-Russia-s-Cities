import { City, sortItems } from '@slices/cities';
import { useAppDispatch } from '@store/hooks';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

type filterIconType = {
  filterIcon: string;
};

function MainContentFilterIcon({ filterIcon }: filterIconType) {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['mainPageTranslation', 'quotesTranslation']);

  const onHandlerSort = (value: keyof City) => dispatch(sortItems(value));

  return (
    <Dropdown>
      <Dropdown.Toggle className="mb-1" variant="link" id="dropdown-basic">
        <img
          src={filterIcon}
          alt="Dropdown Toggle"
          width="30px"
          height="30px"
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
