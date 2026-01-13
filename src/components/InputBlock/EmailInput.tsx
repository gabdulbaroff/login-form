import { TextInput, ValidationType } from './TextInput';
import type { FC, InputHTMLAttributes } from 'react';
import css from './EmailInput.module.css';
import cn from 'classnames';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  error: string;
  className?: string;
  label?: string;
  onDeleteInput?: (id: string) => void;
}

export const EmailInput: FC<EmailInputProps> = ({
  label,
  error,
  className,
  value,
  id,
  onDeleteInput,
  ...inputProps
}) => {
  return (
    <div className={cn(css.emailInput, className)}>
      <TextInput
        type='email'
        label={label}
        value={value}
        validation={error}
        validationType={ValidationType.Danger}
        {...inputProps}
      />
      {onDeleteInput && (
        <div className={css.closeIconContainer} onClick={() => id && onDeleteInput(id)}>
          {/* <CloseIcon className={css.closeIcon} /> */}
        </div>
      )}
    </div>
  );
};
