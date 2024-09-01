import { NavDropdown } from 'react-bootstrap';
import setLanguage from '@utils/setLanguage';
import { TFunction } from 'i18next';
import { motion } from 'framer-motion';

type languageLogoProp = {
  languageLogo: {
    src: string;
    id: number;
    alt: string;
  };
  t: TFunction;
};

function HeaderLanguageLogo({ languageLogo, t }: languageLogoProp) {
  return (
    <NavDropdown
      align="end"
      className="mx-5"
      title={
        <motion.img
          loading="lazy"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          width="30"
          height="30"
          src={languageLogo.src}
          alt={languageLogo.alt}
        />
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1" onClick={() => setLanguage('ru')}>
        {t('navigation.language.russian')}
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.2" onClick={() => setLanguage('en')}>
        {t('navigation.language.english')}
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default HeaderLanguageLogo;
