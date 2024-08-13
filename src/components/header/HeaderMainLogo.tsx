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
function HeaderMainLogo({ cityLogo }: headerLogoProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const handlerOnButton = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };
  return (
    <Navbar.Brand href="#home" onClick={handlerOnButton}>
      <motion.img
        style={{ float: 'left' }}
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
        width="50"
        height="50"
        src={cityLogo.src}
        alt={cityLogo.alt}
      />
      <span className="ms-2 fw-italic" style={{ letterSpacing: '2px' }}>
        Heart and Horizon
        <em>
          <div style={{ fontSize: '0.6em' }}>
            -Exploring Russia&apos;s Cities
          </div>
        </em>
      </span>
    </Navbar.Brand>
  );
}

export default HeaderMainLogo;
