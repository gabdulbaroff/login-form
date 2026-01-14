import { ContentHeader } from '../../components/ContentHeader';
import { SignInForm } from './SignInForm';

export const SignInPage = () => {
  return (
    <div>
      <ContentHeader
        label='Sign in to your account'
        content='Sign in using your work email and password'
      />
      <SignInForm />
    </div>
  );
};
