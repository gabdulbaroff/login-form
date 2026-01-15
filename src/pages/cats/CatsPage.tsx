import css from './CatsPage.module.css';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { ContentHeader } from '../../components/ContentHeader';
import Lottie from 'lottie-react';
import catInBoxAnimation from '../../animations/cat-in-box.json';

export const CatsPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login-form');
  };

  return (
    <div className={css.container}>
      <ContentHeader label={`You found me!!!`} content={`Welcome, ${user?.name}!`} />
      <Lottie animationData={catInBoxAnimation} aria-label='Cat animation' role='img' />
      <Button btnType='secondary' onClick={handleLogout} className={css.logoutButton}>
        Logout
      </Button>
    </div>
  );
};
