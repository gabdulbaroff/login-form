import { ContentHeader } from '../../components/ContentHeader';
import Lottie from 'lottie-react';
import launchingSoonAnimation from '../../animations/launching-soon.json';
import css from './ResetPasswordPage.module.css';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/login-form');
  };
  return (
    <div>
      <ContentHeader label='Stay in touch' content='A Reset Password form will appear here soon' />
      <Lottie
        animationData={launchingSoonAnimation}
        className={css.lottie}
        aria-label='Launching soon animation'
        role='img'
      />
      <Button btnType='secondary' onClick={handleBack} className={css.logoutButton}>
        Back to sign in
      </Button>
    </div>
  );
};
