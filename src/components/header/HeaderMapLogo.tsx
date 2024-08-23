import { NavbarBrand } from 'react-bootstrap';

type HeaderMapLogo = {
  mapIconLogo: {
    id: number;
    src: string;
    alt: string;
  };
};

function HeaderMapLogo({ mapIconLogo }: HeaderMapLogo) {
  return (
    <NavbarBrand href="#map" className="ms-2">
      <img
        src={mapIconLogo.src}
        width="30"
        height="30"
        className="d-inline-block align-top "
        alt="headerMapLogo"
      />
    </NavbarBrand>
  );
}
export default HeaderMapLogo;
