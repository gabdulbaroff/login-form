import { TextInput } from './TextInput';
import { type ChangeEvent, type FC, type InputHTMLAttributes, useState } from 'react';
import css from './PasswordInput.module.css';
import cn from 'classnames';
import { ValidationType } from './types';
import { ShowPasswordIcon } from '../../icons';
import { Button } from '../Button';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  className?: string;
  validationType?: ValidationType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  error,
  className,
  validationType,
  onChange,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={cn(css.passwordInput, className)}>
      <TextInput
        type={showPassword ? 'text' : 'password'}
        label={label}
        validation={error}
        validationType={validationType || ValidationType.Danger}
        autoComplete='current-password'
        onChange={onPasswordChange}
        {...restProps}
      />
      <Button
        className={css.showPasswordButton}
        onClick={onShowPassword}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        aria-pressed={showPassword}
        type='button'
      >
        <ShowPasswordIcon className={css.showPasswordIcon} />
      </Button>
    </div>
  );
};
