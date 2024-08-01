import { Navbar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

type headerLogoProps = {
  cityLogo: {
    alt: string;
    id: number;
    src: string;
  };
};
function HeaderLogo({ cityLogo }: headerLogoProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const handlerOnButton = () => {
    if (location.pathname !== '/') navigate('/');
  };
  return (
    <Navbar.Brand href="#home" onClick={handlerOnButton}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          rotate: [60, 120, 180, 240, 300, 360],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          type: 'just',
          duration: 1,
        }}
        width="40"
        height="40"
        src={cityLogo.src}
        alt={cityLogo.alt}
      />{' '}
      <span className="ms-1 mb-3 fw-italic lh-1">Russian Cities</span>
    </Navbar.Brand>
  );
}

export default HeaderLogo;
