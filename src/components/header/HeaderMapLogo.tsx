import { NavbarBrand } from 'react-bootstrap';
import { motion } from 'framer-motion';

type HeaderMapLogo = {
  mapIconLogo: {
    id: number;
    src: string;
    alt: string;
  };
};

function HeaderMapLogo({ mapIconLogo }: HeaderMapLogo) {
  return (
    <NavbarBrand href="#map" className="ms-2">
      <motion.img
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        src={mapIconLogo.src}
        width="30"
        height="30"
        className="d-inline-block align-top "
        alt="headerMapLogo"
      />
    </NavbarBrand>
  );
}
export default HeaderMapLogo;
