import css from './Dropdown.module.css';
import { type FC, useRef, useState } from 'react';
import cn from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';

export interface Option {
  value: string;
  label: string;
  description?: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (option: Option) => void;
  defaultOption?: Option;
  className?: string;
}

export const Dropdown: FC<DropdownProps> = ({ options, onSelect, className, defaultOption }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption || options[0]);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref as React.RefObject<HTMLElement>, handleClickOutside);

  return (
    <div className={cn(css.dropDown, className)} ref={ref}>
      <div
        className={cn(css.dropdownSelected, {
          [css.open]: isOpen,
        })}
        onClick={handleDropdownToggle}
      >
        <>{selectedOption.label}</>
      </div>
      {isOpen && (
        <ul className={css.dropdownOptions}>
          {options.map((option) => (
            <li
              key={option.value}
              className={css.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {
                <>
                  <div className={css.label}>{option.label}</div>
                  <div className={css.description}>{option.description}</div>
                </>
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
