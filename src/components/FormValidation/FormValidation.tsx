import type { FC } from 'react';
import css from './FormValidation.module.css';
import cn from 'classnames';
interface FormValidationProps {
  formMessage: {
    type: 'error' | 'success';
    text: string;
  } | null;
}

export const FormValidation: FC<FormValidationProps> = ({ formMessage }) => {
  if (!formMessage) return null;

  return (
    <div
      className={cn(css.formValidation, {
        [css.error]: formMessage.type === 'error',
        [css.success]: formMessage.type === 'success',
      })}
      role='alert'
    >
      {formMessage.text}
    </div>
  );
};
