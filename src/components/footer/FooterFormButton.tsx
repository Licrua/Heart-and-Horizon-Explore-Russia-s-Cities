import { motion } from 'framer-motion';

type SubmitButtonProps = {
  isSubmitting: boolean;
  text: string;
};

function FooterFormButton({ isSubmitting, text }: SubmitButtonProps) {
  return (
    <motion.button
      className="btn btn-primary"
      type="submit"
      disabled={isSubmitting}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
}

export default FooterFormButton;
