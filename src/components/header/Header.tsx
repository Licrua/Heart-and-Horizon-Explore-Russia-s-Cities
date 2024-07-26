import {  Container, Nav, Navbar, NavDropdown  } from "react-bootstrap";
import cityLogo from '@images/city-svgrepo-com.svg'
import themeLogo from '@images/night-svgrepo-com.svg'
import languageLogo from '@images/language-svgrepo-com.svg'

function Header () {
    return (
      <Navbar expand="lg" className="bg-body-tertiary mb-3 border rounded ">
      <Container className="me-2" >
        <Navbar.Brand href="#home">
          <img width='40' height='40' src={cityLogo} alt="city_logo" />
          {' '}
          Russian Cities
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-center" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="mx-5" href="#home">Главная</Nav.Link>
            <NavDropdown className="mx-5" title={'Города'} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Отсортировать по населению</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Отсортировать по дате основания
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="mx-5" title={<img width='30' height='30' src={languageLogo} alt="language selector"/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Русский</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Английскй
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
            <img
              src={themeLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="theme changer"
            />
          </Navbar.Brand>
      </Container>
    </Navbar>
      );
}
export default Header