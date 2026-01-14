import cn from 'classnames';
import css from './TextInput.module.css';
import type { FC, InputHTMLAttributes } from 'react';
import { ValidationType } from './types';

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
  return (
    <div className={cn(css.textInput, className)}>
      <div>
        {label && <label className={css.label}>{label}</label>}
        <input
          className={cn(css.input, {
            [css.validation]: validation,
            [css.validationPrimary]: validationType === ValidationType.Primary,
            [css.validationDanger]: validationType === ValidationType.Danger,
            [css.validationWarning]: validationType === ValidationType.Warning,
          })}
          {...inputProps}
          value={value}
        />
        {validation && <div className={cn(css.validationDescription)}>{validation}</div>}
      </div>
    </div>
  );
};
