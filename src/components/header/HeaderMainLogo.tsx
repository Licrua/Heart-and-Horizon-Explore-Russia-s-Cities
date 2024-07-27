

import { Navbar } from 'react-bootstrap';

type headerLogoProps = {
    cityLogo: string,
}
const HeaderLogo = ({ cityLogo }: headerLogoProps) => {
  console.log('cityLogo', typeof cityLogo);
  return (
    <Navbar.Brand href="#home">
      <img width='40' height='40' src={cityLogo} alt="city_logo" />
      {' '}
            Russian Cities
    </Navbar.Brand>
  );
};

export default HeaderLogo;