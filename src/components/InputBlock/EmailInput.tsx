import { TextInput } from './TextInput';
import type { FC, InputHTMLAttributes } from 'react';
import { ValidationType } from './types';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  error: string;
  className?: string;
  label?: string;
}

export const EmailInput: FC<EmailInputProps> = ({
  label,
  error,
  className,
  value,
  ...inputProps
}) => {
  return (
    <div className={className}>
      <TextInput
        type='email'
        label={label}
        value={value}
        validation={error}
        validationType={ValidationType.Danger}
        {...inputProps}
      />
    </div>
  );
};
