import { NavDropdown } from 'react-bootstrap';

type languageLogoProp = {
  languageLogo: string;
};

function HeaderLanguageLogo({ languageLogo }: languageLogoProp) {
  return (
    <NavDropdown
      className="mx-5"
      title={
        <img
          width="30"
          height="30"
          src={languageLogo}
          alt="language selector"
        />
      }
      id="basic-nav-dropdown"
    >
      <NavDropdown.Item href="#action/3.1">Русский</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.2">Английскй</NavDropdown.Item>
    </NavDropdown>
  );
}

export default HeaderLanguageLogo;
