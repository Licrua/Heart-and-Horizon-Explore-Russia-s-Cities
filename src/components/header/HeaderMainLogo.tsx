import { Navbar } from 'react-bootstrap';

type headerLogoProps = {
  cityLogo: {
    alt: string;
    id: number;
    src: string;
  };
};
function HeaderLogo({ cityLogo }: headerLogoProps) {
  return (
    <Navbar.Brand href="#home">
      <img width="40" height="40" src={cityLogo.src} alt={cityLogo.alt} />{' '}
      <span className="ms-1 mb-3 fw-italic lh-1">Russian Cities</span>
    </Navbar.Brand>
  );
}

export default HeaderLogo;
