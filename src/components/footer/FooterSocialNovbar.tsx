import { TFunction } from 'i18next';
import { Navbar, Row } from 'react-bootstrap';

type FooterSocialNovbarType = {
  socialIcons: {
    alt: string;
    id: number;
    src: string;
    href: string;
  }[];
};

function FooterSocialNovbar({ socialIcons }: FooterSocialNovbarType) {
  return (
    <Row>
      <Navbar bg="light" expand="lg" className="d-flex justify-content-center">
        {socialIcons.map((item) => (
          <Navbar.Brand key={item.id} href={item.href}>
            <img
              src={item.src}
              alt={item.alt}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        ))}
      </Navbar>
    </Row>
  );
}
export default FooterSocialNovbar;
