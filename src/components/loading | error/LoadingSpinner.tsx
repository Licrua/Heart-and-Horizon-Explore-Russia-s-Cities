import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <>
      <Spinner className="me-3" animation="border" role="status">
        <span className="visually-hidden">Загрузка</span>
      </Spinner>
      <p className="mb-3">Загрузка, подождите пожалуйста</p>
    </>
  );
}

export default LoadingSpinner;
