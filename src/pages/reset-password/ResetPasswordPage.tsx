import { ContentHeader } from '../../components/ContentHeader';
import Lottie from 'lottie-react';
import launchingSoonAnimation from '../../animations/launching-soon.json';
import css from './ResetPasswordPage.module.css';

export const ResetPasswordPage = () => {
  return (
    <div>
      <ContentHeader
        label='Stay in touch !!!'
        content='A Reset Password form will appear here soon.'
      />
      <Lottie animationData={launchingSoonAnimation} className={css.lottie} />
    </div>
  );
};
