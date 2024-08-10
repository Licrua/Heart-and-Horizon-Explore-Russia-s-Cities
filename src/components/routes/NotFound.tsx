import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const onMainPageHandler = () => {
    navigate('/');
  };

  return (
    <div>
      <h3>Страница не найдена</h3>
      <p>Проверьте правильность адреса или вернитесь на главную</p>
      <Button onClick={onMainPageHandler}>Вернуться на главную</Button>
    </div>
  );
}
export default NotFound;
