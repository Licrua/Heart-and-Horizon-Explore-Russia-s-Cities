import { NavDropdown } from 'react-bootstrap';
import { City } from '@slices/cities';

type CityRecord = Record<number, City>;

interface CityListProps {
  cities: CityRecord;
  cityDropDownIcon: {
    id: number;
    alt: string;
    src: string;
  };
}

function HeaderCitiesList({ cities, cityDropDownIcon }: CityListProps) {
  return (
    <NavDropdown
      className="mx-5"
      title={
        <img
          width="30"
          height="30"
          src={cityDropDownIcon.src}
          alt={cityDropDownIcon.alt}
        />
      }
      id="basic-nav-dropdown"
    >
      {Object.values(cities).map((item, index) => {
        const value = Object.values(cities);
        return item.id !== value.length - 1 ? (
          <span key={item.id}>
            <NavDropdown.Item href={`#action/${index}`}>
              {item.name}
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </span>
        ) : (
          <span key={item.id}>
            <NavDropdown.Item href={`#action/${index}`}>
              {item.name}
            </NavDropdown.Item>
          </span>
        );
      })}
    </NavDropdown>
  );
}

export default HeaderCitiesList;
