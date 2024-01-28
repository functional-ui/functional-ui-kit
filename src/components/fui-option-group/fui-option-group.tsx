import React from 'react';
import { prefix } from '../prefix';
import classNames from 'classnames';

const compPrefix = `${prefix}-option-group`;

export interface Option {
  label: string
  value: string
  prefix?: JSX.Element
  suffix?: JSX.Element
}

export interface OptionGroup {
  label: string
  options: Option[]
}

export interface FuiOptionGroupProps {
  options: (Option | OptionGroup)[]
  className?: string
  onSelect?: (value: string) => void
}

const isOptionGroup = (option: Option | OptionGroup): option is OptionGroup => {
  return (option as OptionGroup).options !== undefined;
};

export const FuiOptionGroup = ({
  options,
  className,
  onSelect,
}: FuiOptionGroupProps) => {
  const classnames = classNames(compPrefix, className);

  const renderMenuOption = (option: Option, index: number) => {
    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === ' ') {
        e.preventDefault();
        onSelect?.(option.value);
      }
    };

    return (
      <div tabIndex={0} onKeyDown={onKeyDown} key={index} className={`${compPrefix}-menu-option ${prefix}-interactable`} onClick={() => { onSelect?.(option.value); }}>
        {option.prefix}
        <div className={`${compPrefix}-menu-option-label`}>{option.label}</div>
        {option.suffix}
      </div>
    );
  };

  const renderOptions = (options: (Option | OptionGroup)[]) => {
    return options.map((option, index) => {
      if (isOptionGroup(option)) {
        return (
          <div key={index} className={`${compPrefix}-menu-group`}>
            <div className={`${compPrefix}-menu-group-label`}>{option.label}</div>
            {option.options.map(renderMenuOption)}
          </div>
        );
      }
      return renderMenuOption(option, index);
    });
  };

  return (
    <div className={classnames}>
      {renderOptions(options)}
    </div>
  );
};