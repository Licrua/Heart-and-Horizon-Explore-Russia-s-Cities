import { Container } from 'react-bootstrap';
import SocialMediaIcons from '@utils/footerLogos';
import FooterCopyright from './FooterCopyright';
import FooterSocialNovbar from './FooterSocialNovbar';
import FooterForm from './FooterForm';
import FooterPopUpReccomendation from './FooterPopUpReccomendation';

function Footer() {
  return (
    <footer className="bg-light border mt-3 border-1 p-1 d-flex justify-content-center">
      <Container fluid>
        <FooterCopyright />
        <FooterSocialNovbar socialIcons={SocialMediaIcons} />
        <FooterPopUpReccomendation />
        <FooterForm />
      </Container>
    </footer>
  );
}

export default Footer;
