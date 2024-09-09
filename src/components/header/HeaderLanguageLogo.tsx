import { NavDropdown } from 'react-bootstrap';
import setLanguage from '@utils/setLanguage';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type languageLogoProp = {
  languageLogo: {
    src: string;
    id: number;
    alt: string;
  };
};

function HeaderLanguageLogo({ languageLogo }: languageLogoProp) {
  const { t } = useTranslation('headerPageTranslation');
  return (
    <NavDropdown
      align="end"
      className="mx-5"
      title={
        <motion.img
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
