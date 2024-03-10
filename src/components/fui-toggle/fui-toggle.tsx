import React, { useLayoutEffect, useRef, useState } from 'react';
import { prefix } from '../prefix';
import classnames from 'classnames';

const compPrefix = `${prefix}-toggle`;

export interface ToggleSegment {
  label: string
  value: string
  disabled?: boolean
  prefix?: JSX.Element
  suffix?: JSX.Element
}

export interface FuiToggleProps {
  size?: 'large' | 'medium'
  options: ToggleSegment[]
  value: string
  onChange: (value: string) => void
  disabled?: boolean

  className?: string
  ariaLabel?: string
}

export const FuiToggle = (props: FuiToggleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTabLeftLocation, setActiveTabLeftLocation] = useState(0);
  const [activeTabWidth, setactiveTabWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setactiveTabWidth(ref.current.offsetWidth);
      setActiveTabLeftLocation(ref.current.offsetLeft);
    }
  }, [props.value, props.size]);

  const classNames = classnames(
    compPrefix,
    `${compPrefix}-size-${props.size}`,
    props.disabled ? `${prefix}-disabled` : '',
    props.className
  );

  return (
    <fieldset aria-label={props.ariaLabel} className={classNames}>
      <div className={`${compPrefix}-active-bg`} style={{ width: `${activeTabWidth}px`, left: `${activeTabLeftLocation}px` }} />
      {props.options.map((option) => {
        const onChange = () => {
          if (props.disabled) return;
          props.onChange(option.value);
        };
        const checked = option.value === props.value;

        const onSpace = (e: React.KeyboardEvent) => {
          if (e.key === ' ') {
            e.preventDefault();
            onChange();
          }
        };

        return (
          <div ref={checked ? ref : null} key={option.value} className={`${compPrefix}-option-wrapper ${option.disabled && `${prefix}-disabled`}`}>
            <input
              className={`${compPrefix}-input`}
              type="radio"
              id={option.value}
              name={compPrefix}
              checked={checked}
              disabled={props.disabled ?? option.disabled}
              onChange={onChange}
            />
            <label onKeyDown={onSpace} tabIndex={!(props.disabled ?? option.disabled) ? 0 : undefined} htmlFor={option.value} className={`${compPrefix}-option ${checked ? 'checked' : ''} ${!props.disabled ? `${prefix}-interactable` : ''}`}>
              {option.prefix}
              <span className={`${compPrefix}-label`}>{option.label}</span>
              {option.suffix}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

FuiToggle.defaultProps = {
  size: 'medium' as const
};
