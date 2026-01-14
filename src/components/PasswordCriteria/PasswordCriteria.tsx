import css from './PasswordCriteria.module.css';
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
    <div className={css.passwordCriteria} role='status' aria-live='polite'>
      <div className={css.label}>Password must contain</div>
      <ul className={css.content}>
        {criteria.map((c) => (
          <li key={c.label} className={cn(css.criteria, { [css.met]: c.isMet })}>
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
