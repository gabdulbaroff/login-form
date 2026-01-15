import type { FC, ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  btnType?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  btnType = 'secondary',
  children,
  ...restProps
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        css.button,
        {
          [css.primary]: btnType === 'primary',
          [css.secondary]: btnType === 'secondary',
        },
        className,
      )}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};
