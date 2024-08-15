import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import { selectEntities } from '@slices/cities';
import citiesLogo from '@data/headerLogos/headerLogosList';
import { useTranslation } from 'react-i18next';
import HeaderMainLogo from './HeaderMainLogo';
import HeaderTheme from './HeaderThemeLogo';
import HeaderLanguageLogo from './HeaderLanguageLogo';
import HeaderCitiesList from './HeaderCitiesListNavigation';

function Header() {
  const citiesEntites = useAppSelector((state) => selectEntities(state));
  const themeToggler = useAppSelector((state) => state.cities.isThemable);
  const { t } = useTranslation('headerPageTranslation');

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
      className="bg-body-tertiary mb-3 border rounded p-1"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <HeaderMainLogo cityLogo={cityLogo} t={t} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="d-flex align-items-center">
            <HeaderCitiesList
              cities={citiesEntites}
              cityDropDownIcon={cityDropDownLogo}
            />
            <HeaderLanguageLogo t={t} languageLogo={languageLogo} />
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
