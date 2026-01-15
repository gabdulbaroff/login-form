import cn from 'classnames';
import css from './TextInput.module.css';
import type { FC, InputHTMLAttributes } from 'react';
import { ValidationType } from './types';
import { useId } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number | readonly string[] | undefined;
  label?: string;
  error?: string;
  errorType?: ValidationType;
  className?: string;
}

export const TextInput: FC<TextInputProps> = ({
  value,
  label,
  error,
  errorType = ValidationType.Danger,
  className,
  ...inputProps
}) => {
  const inputId = useId();
  const errorId = useId();

  return (
    <div className={cn(css.textInput, className)}>
      {label && (
        <label htmlFor={inputId} className={css.label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(css.input, {
          [css.validation]: error,
          [css.validationDanger]: errorType === ValidationType.Danger,
          [css.validationWarning]: errorType === ValidationType.Warning,
        })}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
        value={value}
      />
      {error && (
        <div id={errorId} className={cn(css.validationDescription)} role='alert'>
          {error}
        </div>
      )}
    </div>
  );
};
