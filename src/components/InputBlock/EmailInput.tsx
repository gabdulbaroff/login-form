import { TextInput, ValidationType } from './TextInput';
import type { FC, InputHTMLAttributes } from 'react';
import css from './EmailInput.module.css';
import cn from 'classnames';
import { Dropdown, type Option } from './Dropdown';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  error: string;
  className?: string;
  userType?: string;
  label?: string;
  changeUserType?: (id: string, value: string, userType: string) => void;
  onDeleteInput?: (id: string) => void;
}

const userTypesOptions = [
  {
    value: 'administrator',
    label: 'Administrator',
    description: 'Can do everything',
  },
  {
    value: 'member',
    label: 'Member',
    description: 'Can edit and merge',
  },
];

export const EmailInput: FC<EmailInputProps> = ({
  label,
  error,
  className,
  userType,
  changeUserType,
  value,
  id,
  onDeleteInput,
  ...inputProps
}) => {
  const handleUserTypeSelect = (option: Option) => {
    if (id && value && userType && changeUserType) {
      changeUserType(id, (value = value), (userType = option.value));
    }
  };

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
      {userType && (
        <div className={css.userTypeContainer}>
          <Dropdown
            className={css.dropdown}
            options={userTypesOptions}
            onSelect={handleUserTypeSelect}
            defaultOption={userTypesOptions[1]}
          />
        </div>
      )}
      {onDeleteInput && (
        <div className={css.closeIconContainer} onClick={() => id && onDeleteInput(id)}>
          {/* <CloseIcon className={css.closeIcon} /> */}
        </div>
      )}
    </div>
  );
};
