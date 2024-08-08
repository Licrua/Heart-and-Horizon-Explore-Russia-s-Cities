
import styles from '@styles/Header/LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center w-100 vh-100 align-items-center">
      <div className={styles.custom_spinner} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
