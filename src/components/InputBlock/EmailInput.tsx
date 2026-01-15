import { TextInput } from './TextInput';
import type { FC, InputHTMLAttributes } from 'react';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  error?: string;
  className?: string;
  label?: string;
}

export const EmailInput: FC<EmailInputProps> = ({
  label,
  error,
  className,
  value,
  ...restProps
}) => {
  return (
    <TextInput
      type='email'
      label={label}
      value={value}
      error={error}
      autoComplete='email'
      className={className}
      {...restProps}
    />
  );
};
