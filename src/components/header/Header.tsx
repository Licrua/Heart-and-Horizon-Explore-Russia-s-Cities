import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { selectEntities } from '@slices/cities';
import citiesLogo from '@utils/headerLogos';
import HeaderLogo from './HeaderMainLogo';
import HeaderTheme from './HeaderThemeLogo';
import HeaderLanguageLogo from './HeaderLanguageLogo';
import HeaderCitiesList from './HeaderCitiesList';

function Header() {
  const citiesEntites = useAppSelector((state) => selectEntities(state));
  const [cityLogo, themeLogo, languageLogo, cityDropDownLogo] = citiesLogo;

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-body-tertiary mb-3 border rounded"
    >
      <Container fluid className="me-2 d-flex">
        <HeaderLogo cityLogo={cityLogo} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-flex justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto">
            <HeaderCitiesList
              cities={citiesEntites}
              cityDropDownIcon={cityDropDownLogo}
            />
            <HeaderLanguageLogo languageLogo={languageLogo} />
          </Nav>
        </Navbar.Collapse>
        <HeaderTheme themeLogo={themeLogo} />
      </Container>
    </Navbar>
  );
}
export default Header;
