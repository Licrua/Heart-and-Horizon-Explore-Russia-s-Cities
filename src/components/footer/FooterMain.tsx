import { Container } from 'react-bootstrap';
import SocialMediaIcons from '@data/footerData/footerLogosList';
import FooterCopyright from './FooterCopyright';
import FooterSocialNovbar from './FooterSocialNovbar';
import FooterForm from './FooterFormMain';
import FooterPopUpReccomendation from './FooterPopUpRecommendation';

function FooterMain() {
  return (
    <Container fluid>
      <FooterCopyright />
      <FooterSocialNovbar socialIcons={SocialMediaIcons} />
      <FooterPopUpReccomendation />
      <FooterForm />
    </Container>
  );
}

export default FooterMain;
