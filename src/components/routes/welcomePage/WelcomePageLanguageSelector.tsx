import { NavDropdown } from 'react-bootstrap';
import languageSelector from '@images/navbar-logo/languageSelector.png';
import setLanguage from '@utils/setLanguage';
import { translationTypeProp } from 'types/cityComponenType';

function WelcomePageLanguageSelector({ t }: translationTypeProp) {
  return (
    <NavDropdown
      align="end"
      className="position-absolute top-0 end-0 pt-3 pe-3"
      title={
        <img
          width="50"
          height="50"
          src={languageSelector}
          alt="languageSelector"
        />
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1" onClick={() => setLanguage('ru')}>
        {t('welcomePageTranslation.languageRu')}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={() => setLanguage('en')} href="#action/3.2">
        {t('welcomePageTranslation.languageEn')}
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default WelcomePageLanguageSelector;
