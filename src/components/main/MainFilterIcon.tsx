import { City, sortItems } from '@slices/cities';
import { useAppDispatch } from '@store/hooks';
import { Dropdown } from 'react-bootstrap';

type filterIconType = {
  filterIcon: string;
};

function MainContentFilterIcon({ filterIcon }: filterIconType) {
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
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => onHandlerSort('population')}
          href="#/action-1"
        >
          Отсортировать по населению
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => onHandlerSort('foundation_date')}
          href="#/action-2"
        >
          Отсортировать по дате основания
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default MainContentFilterIcon;
