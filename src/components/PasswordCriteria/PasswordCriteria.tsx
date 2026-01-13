import css from './PasswordCriteria.module.css';
import { v4 as uuid } from 'uuid';
import type { FC } from 'react';
import cn from 'classnames';

export interface CriteriaType {
  label: string;
  isMet: boolean;
}

type PasswordCriteriaProps = {
  criteria: CriteriaType[];
};

export const PasswordCriteria: FC<PasswordCriteriaProps> = ({ criteria }) => {
  return (
    <div className={css.passwordCriteria}>
      <label className={css.label}>Password must content</label>
      <ul className={css.content}>
        {criteria.map((c) => (
          <li key={uuid()} className={cn(css.criteria, { [css.met]: c.isMet })}>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
