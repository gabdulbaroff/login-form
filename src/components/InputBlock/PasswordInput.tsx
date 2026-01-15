import { TextInput } from './TextInput';
import { type ChangeEvent, type FC, type InputHTMLAttributes, useState } from 'react';
import css from './PasswordInput.module.css';
import cn from 'classnames';
import { ValidationType } from './types';
import { ClosePasswordIcon, ShowPasswordIcon } from '../../icons';
import { Button } from '../Button';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  className?: string;
  errorType?: ValidationType;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: FC<PasswordInputProps> = ({
  label,
  error,
  className,
  errorType,
  onChange,
  ...restProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={cn(css.passwordInput, className)}>
      <TextInput
        type={showPassword ? 'text' : 'password'}
        label={label}
        error={error}
        errorType={errorType}
        autoComplete='current-password'
        onChange={onChange}
        {...restProps}
      />
      <Button
        className={css.showPasswordButton}
        onClick={onShowPassword}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        aria-pressed={showPassword}
        type='button'
      >
        {showPassword ? (
          <ShowPasswordIcon className={css.showPasswordIcon} />
        ) : (
          <ClosePasswordIcon className={css.showPasswordIcon} />
        )}
      </Button>
    </div>
  );
};
