import { Navbar } from 'react-bootstrap';
import { useAppSelector } from '@store/hooks';
import HeaderThemeToggler from './HeaderThemeToggler';

type themeLogoProps = {
  themeDarkLogo: {
    src: string;
    id: number;
    alt: string;
  };
  themeLightLogo: {
    src: string;
    id: number;
    alt: string;
  };
};

function HeaderTheme({ themeDarkLogo, themeLightLogo }: themeLogoProps) {
  const CurrentColor = useAppSelector((state) => state.cities.themeColor);

  return (
    <>
      <HeaderThemeToggler />
      <Navbar.Brand>
        {CurrentColor === 'white' ? (
          <img
            src={themeLightLogo.src}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt={themeLightLogo.alt}
          />
        ) : (
          <img
            src={themeDarkLogo.src}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt={themeDarkLogo.alt}
          />
        )}
      </Navbar.Brand>
    </>
  );
}
export default HeaderTheme;
