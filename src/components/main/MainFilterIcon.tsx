import { Dropdown } from 'react-bootstrap';

type filterIconType = {
  filterIcon: string;
};

function MainContentFilterIcon({ filterIcon, sortHandler }: filterIconType) {
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
        <Dropdown.Item href="#/action-1">
          Отсортировать по населению
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          Отсортировать по дате основания
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default MainContentFilterIcon;
