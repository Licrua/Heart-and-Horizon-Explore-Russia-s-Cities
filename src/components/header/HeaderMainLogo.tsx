import { Navbar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TFunction } from 'i18next';

type headerLogoProps = {
  cityLogo: {
    alt: string;
    id: number;
    src: string;
  };
  t: TFunction;
};
function HeaderMainLogo({ cityLogo, t }: headerLogoProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const handlerOnButton = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };
  return (
    <Navbar.Brand onClick={handlerOnButton}>
      <motion.img
        className="rounded-circle"
        style={{ float: 'left' }}
        initial={{ scale: 0 }}
        whileHover={{
          scale: 1.1,
          border: '1px solid black',
          boxShadow:
            '-10px 0 10px -5px rgba(0, 0, 0, 0.5), 10px 0 10px -5px rgba(0, 0, 0, 0.5)',
        }}
        animate={{
          scale: 1,
          rotate: [60, 120, 180, 240, 300, 360],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
        transition={{
          type: 'linear',
          duration: 1,
        }}
        width="50"
        height="50"
        src={cityLogo.src}
        alt={cityLogo.alt}
      />
      <motion.span className="ms-2 fw-italic" style={{ letterSpacing: '2px' }}>
        {t('header.title')}
        <em>
          <div style={{ fontSize: '0.6em' }}>{t('header.subtitle')}</div>
        </em>
      </motion.span>
    </Navbar.Brand>
  );
}

export default HeaderMainLogo;
