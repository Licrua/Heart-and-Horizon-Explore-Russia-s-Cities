import { Container, Nav, Navbar } from 'react-bootstrap';
import cityLogo from '@images/navbar-logo/city-svgrepo-com.svg';
import themeLogo from '@images/navbar-logo/night-svgrepo-com.svg';
import languageLogo from '@images/navbar-logo/language-svgrepo-com.svg';
import { useAppSelector } from '@store/hooks';
import { selectEntities } from '@slices/cities';
import HeaderLogo from './HeaderMainLogo';
import HeaderTheme from './HeaderThemeLogo';
import HeaderLanguageLogo from './HeaderLanguageLogo';
import HeaderCitiesList from './HeaderCitiesList';

function Header() {
  const citiesEntites = useAppSelector((state) => selectEntities(state));
  console.log(citiesEntites);

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3 border rounded ">
      <Container className="me-2">
        <HeaderLogo cityLogo={cityLogo} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-flex justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="me-auto">
            <HeaderCitiesList cities={citiesEntites} />
            <HeaderLanguageLogo languageLogo={languageLogo} />
          </Nav>
        </Navbar.Collapse>
        <HeaderTheme themeLogo={themeLogo} />
      </Container>
    </Navbar>
  );
}
export default Header;
