import css from './SignInForm.module.css';
import { EmailInput } from '../../components/InputBlock';
import { PasswordInput } from '../../components/InputBlock';
import { Button } from '../../components/Button';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../api/auth';

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
        setFormMessage({
          type: 'success',
          text: response.message,
        });
        console.log('Signed in user:', response.user);
      } catch (error: any) {
        setFormMessage({
          type: 'error',
          text: error.message || 'An error occurred',
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
        {formMessage && (
          <div
            style={{
              padding: '12px',
              marginBottom: '16px',
              borderRadius: '4px',
              backgroundColor: formMessage.type === 'error' ? '#ed474a' : '#4caf50',
              color: '#fff',
              fontSize: '14px',
            }}
            role='alert'
          >
            {formMessage.text}
          </div>
        )}
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
      </form>
    </div>
  );
};
