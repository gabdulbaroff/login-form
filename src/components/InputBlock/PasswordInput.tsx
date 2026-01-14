import { TextInput } from './TextInput';
import { type ChangeEvent, type FC, type InputHTMLAttributes, useState } from 'react';
import css from './PasswordInput.module.css';
import cn from 'classnames';
import { PasswordCriteria, type CriteriaType } from '../PasswordCriteria';
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
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [criteria, setCriteria] = useState<CriteriaType[]>([
    { label: 'Lowercase letter', isMet: false },
    { label: 'Uppercase letter', isMet: false },
    { label: 'Number', isMet: false },
    { label: '8 symbols at least', isMet: false },
  ]);
  const [showCriteria, setShowCriteria] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onFocus = () => {
    setShowCriteria(true);
  };

  const onBlur = () => {
    setShowCriteria(false);
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(event);
    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasDigits = /\d/.test(value);
    const isLongEnough = value.length >= 8;

    setCriteria([
      { label: 'Lowercase letter', isMet: hasLowercase },
      { label: 'Uppercase letter', isMet: hasUppercase },
      { label: 'Number', isMet: hasDigits },
      { label: '8 symbols at least', isMet: isLongEnough },
    ]);
  };

  return (
    <div className={cn(css.passwordInput, className)}>
      <TextInput
        type={showPassword ? 'text' : 'password'}
        label={label}
        validation={error}
        validationType={validationType || ValidationType.Danger}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete='current-password'
        onChange={onPasswordChange}
        {...inputProps}
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

      {showCriteria && <PasswordCriteria criteria={criteria} />}
    </div>
  );
};
