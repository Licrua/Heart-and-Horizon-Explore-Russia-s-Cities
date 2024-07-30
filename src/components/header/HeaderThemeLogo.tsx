import { Navbar } from 'react-bootstrap';

type themeLogoProps = {
  themeLogo: {
    src: string;
    id: number;
    alt: string;
  };
};

function HeaderTheme({ themeLogo }: themeLogoProps) {
  return (
    <Navbar.Brand>
      <img
        src={themeLogo.src}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt={themeLogo.alt}
      />
    </Navbar.Brand>
  );
}
export default HeaderTheme;
