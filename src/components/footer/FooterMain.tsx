import { Container } from 'react-bootstrap';
import SocialMediaIcons from '@data/footerData/footerLogosList';
import { useTranslation } from 'react-i18next';
import FooterCopyright from './FooterCopyright';
import FooterSocialNovbar from './FooterSocialNovbar';
import FooterForm from './FooterForm';
import FooterPopUpReccomendation from './FooterPopUpReccomendation';

function FooterMain() {
  const { t } = useTranslation('footerPageTranslation');
  return (
    <footer className="bg-light border mt-3 border-1 p-1 d-flex justify-content-center">
      <Container fluid>
        <FooterCopyright t={t} />
        <FooterSocialNovbar socialIcons={SocialMediaIcons} />
        <FooterPopUpReccomendation t={t} />
        <FooterForm t={t} />
      </Container>
    </footer>
  );
}

export default FooterMain;
