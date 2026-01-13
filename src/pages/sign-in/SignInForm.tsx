import css from './SignInForm.module.css';
import { EmailInput } from '../../components/InputBlock/EmailInput';
import { PasswordInput } from '../../components/InputBlock/PasswordInput';
import { Button } from '../../components/Button';
import { useState, type ChangeEvent, type FormEvent } from 'react';
// import { FormValidation } from '../../components/FormValidation/FormValidation';
import { Link } from 'react-router-dom';

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

  const [formValidation, setFormValidation] = useState({
    error: '',
    success: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = formData;

    setErrors({
      email: email ? '' : 'Enter your email',
      password: password ? '' : 'Enter your password',
    });
    if (email && password) {
      const response = await signIn(email, password);

      if ('data' in response) {
      } else {
        // setFormValidation({
        //   ...formValidation,
        //   // @ts-ignore FIXME: Add error to api
        //   error: response.error.data.message,
        // });
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

  const signIn = async (emailOrUsername: string, password: string) => {};

  return (
    <div className={css.signInForm}>
      <form onSubmit={handleSubmit}>
        {/* <FormValidation validation={formValidation} /> */}
        <EmailInput
          name='email'
          value={formData.email}
          error={errors.email}
          onChange={handleChange}
          label='Email'
        />
        <PasswordInput
          name='password'
          value={formData.password}
          error={errors.password}
          onChange={handleChange}
          label='Password'
        />
        <div className={css.resetPasswordLink}>
          <Link to='/user/reset-password'>Forgot your password?</Link>
          <Link to='/sign-up'>Sign up for free</Link>
        </div>
        <Button type='submit' btnType='primary'>
          Sign in
        </Button>
      </form>
    </div>
  );
};
