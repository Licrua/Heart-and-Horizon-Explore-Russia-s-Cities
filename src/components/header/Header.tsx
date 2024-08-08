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
  const themeToggler = useAppSelector((state) => state.cities.isThemable);

  const [
    cityLogo,
    themeDarkLogo,
    languageLogo,
    cityDropDownLogo,
    themeLightLogo,
  ] = citiesLogo;

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className="bg-body-tertiary mb-3 border rounded"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <HeaderLogo cityLogo={cityLogo} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <HeaderCitiesList
              cities={citiesEntites}
              cityDropDownIcon={cityDropDownLogo}
            />
            <HeaderLanguageLogo languageLogo={languageLogo} />
            {themeToggler && (
              <HeaderTheme
                themeDarkLogo={themeDarkLogo}
                themeLightLogo={themeLightLogo}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
