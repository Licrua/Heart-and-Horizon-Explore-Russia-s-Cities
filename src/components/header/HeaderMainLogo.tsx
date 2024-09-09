import { Navbar } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type headerLogoProps = {
  cityLogo: {
    alt: string;
    id: number;
    src: string;
  };
};
function HeaderMainLogo({ cityLogo }: headerLogoProps) {
  const { t } = useTranslation('headerPageTranslation');
  const location = useLocation();
  const navigate = useNavigate();
  const handlerOnButton = () => {
    if (location.pathname !== '/') {
      navigate('/main');
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
      <motion.span
        animate={{
          color: ['#ffffff', '#0000ff', '#ff0000', '#ffffff'],
          WebkitTextStroke: '1px #000000',
          textShadow:
            '-1px -1px 0 #00000000, 1px -1px 0 #00000000, -1px 1px 0 #00000000, 1px 1px 0 #0000002a',
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="ms-2 fw-italic"
        style={{ letterSpacing: '2px' }}
      >
        {t('header.title')}
        <em>
          <div style={{ fontSize: '0.6em' }}>{t('header.subtitle')}</div>
        </em>
      </motion.span>
    </Navbar.Brand>
  );
}

export default HeaderMainLogo;
