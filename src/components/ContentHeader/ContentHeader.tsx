import type { FC } from 'react';
import css from './ContentHeader.module.css';
import cn from 'classnames';

interface ContentHeaderProps {
  label: string;
  content: string;
  className?: string;
}

export const ContentHeader: FC<ContentHeaderProps> = ({ label, content, className }) => {
  return (
    <div className={cn(css.ContentHeader, className)}>
      <div className={css.Label}>{label}</div>
      <div className={css.Content}>{content}</div>
    </div>
  );
};
