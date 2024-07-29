import { Navbar } from 'react-bootstrap';

type themeLogoProps = {
  themeLogo: string;
};

function HeaderTheme({ themeLogo }: themeLogoProps) {
  return (
    <Navbar.Brand>
      <img
        src={themeLogo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="theme changer"
      />
    </Navbar.Brand>
  );
}
export default HeaderTheme;
