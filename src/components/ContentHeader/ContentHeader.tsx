import type { FC } from 'react';
import css from './ContentHeader.module.css';
import cn from 'classnames';

interface ContentHeaderProps {
  label: string;
  content?: string;
  className?: string;
}

export const ContentHeader: FC<ContentHeaderProps> = ({ label, content, className }) => {
  return (
    <div className={cn(css.ContentHeader, className)}>
      <h1 className={css.Label}>{label}</h1>
      {content && <div className={css.Content}>{content}</div>}
    </div>
  );
};
