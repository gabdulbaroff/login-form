import cn from 'classnames';
import css from './TextInput.module.css';
import type { FC, InputHTMLAttributes } from 'react';
import { ValidationType } from './types';
import { useId } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number | readonly string[] | undefined;
  label?: string;
  validation: string;
  validationType: ValidationType;
  className?: string;
}

export const TextInput: FC<TextInputProps> = ({
  value,
  label,
  validation,
  validationType,
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
          [css.validation]: validation,
          [css.validationDanger]: validationType === ValidationType.Danger,
          [css.validationWarning]: validationType === ValidationType.Warning,
        })}
        aria-invalid={!!validation}
        aria-describedby={validation ? errorId : undefined}
        {...inputProps}
        value={value}
      />
      {validation && (
        <div id={errorId} className={cn(css.validationDescription)} role='alert'>
          {validation}
        </div>
      )}
    </div>
  );
};
