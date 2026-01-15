import css from './SignInForm.module.css';
import { EmailInput } from '../../components/InputBlock';
import { PasswordInput } from '../../components/InputBlock';
import { Button } from '../../components/Button';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../api/auth';
import { useAuth } from '../../context/AuthContext';
import { FormValidation } from '../../components/FormValidation';

interface FormData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormData>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    type: 'error' | 'success';
    text: string;
  } | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formData;

    setErrors({
      email: email ? '' : 'Enter your email',
      password: password ? '' : 'Enter your password',
    });

    if (email && password) {
      setIsLoading(true);
      setFormMessage(null);

      try {
        const response = await signIn(email, password);
        if (response.user) {
          login(response.user);
          setTimeout(() => {
            navigate('/cats');
          }, 1000);
        }
        setFormMessage({
          type: 'success',
          text: response.message,
        });
      } catch (error) {
        setFormMessage({
          type: 'error',
          text: error instanceof Error ? error.message : 'An error occurred',
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={css.signInForm}>
      <form onSubmit={handleSubmit}>
        <fieldset className={css.fieldset}>
          <legend className={css.fieldsetLegend}>Sign in credentials</legend>
          <FormValidation formMessage={formMessage} />
          <EmailInput
            name='email'
            value={formData.email}
            error={errors.email}
            onChange={handleChange}
            label='Email'
            className={css.EmailInput}
          />
          <PasswordInput
            name='password'
            value={formData.password}
            error={errors.password}
            onChange={handleChange}
            label='Password'
            className={css.PasswordInput}
          />
          <div className={css.resetPasswordLink}>
            <Link to='/user/reset-password'>Forgot your password?</Link>
            <Link to='/sign-up'>Sign up for free</Link>
          </div>
          <Button type='submit' btnType='primary' disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </fieldset>
      </form>
    </div>
  );
};
