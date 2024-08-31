import { Container } from 'react-bootstrap';
import SocialMediaIcons from '@data/footerData/footerLogosList';
import { useTranslation } from 'react-i18next';
import FooterCopyright from './FooterCopyright';
import FooterSocialNovbar from './FooterSocialNovbar';
import FooterForm from './FooterFormMain';
import FooterPopUpReccomendation from './FooterPopUpRecommendation';

function FooterMain() {
  const { t } = useTranslation('footerPageTranslation');
  return (
    <Container fluid>
      <FooterCopyright t={t} />
      <FooterSocialNovbar socialIcons={SocialMediaIcons} />
      <FooterPopUpReccomendation t={t} />
      <FooterForm t={t} />
    </Container>
  );
}

export default FooterMain;
