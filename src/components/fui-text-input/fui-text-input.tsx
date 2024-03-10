import React from 'react';
import { prefix } from '../prefix';
import FuiIconX12x12 from '../../icons/fui-icon-x-12x12';
import { FuiButton } from '../fui-button/fui-button';
import { FuiStatusMessage, type FuiStatusMessageProps } from '../fui-status-message/fui-status-message';
import classnames from 'classnames';

const compPrefix = `${prefix}-text-input`;

export interface FuiTextInputProps {
  value: string
  onChange: (value: string) => void

  clearable?: boolean
  disabled?: boolean
  label?: string
  placeholder?: string
  status?: FuiStatusMessageProps
  prefix?: JSX.Element
  suffix?: JSX.Element

  ariaLabel?: string
  className?: string
}

export const FuiTextInput = (props: FuiTextInputProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const inputId = React.useMemo(() => `${compPrefix}-input-${Math.random().toString(36).substring(7)}`, []);
  const labelId = React.useMemo(() => `${compPrefix}-label-${Math.random().toString(36).substring(7)}`, []);

  const clearValue = React.useCallback(() => {
    props.onChange('');
  }, [props.onChange]);

  const inputContainerClassNames = classnames(
    `${compPrefix}-input-container`,
    {
      [`${prefix}-disabled`]: props.disabled,
      [`${prefix}-interactable`]: !props.disabled && !isActive,
      [`has-prefix`]: !!props.prefix,
      [`has-suffix`]: !!props.suffix,
    }
  );


  return (
    <div className={`${compPrefix}-wrapper ${props.className}`}>
      {props.label ? <label id={labelId} htmlFor={inputId} className={`${compPrefix}-label`}>{props.label}</label> : null}
      {props.status ? <FuiStatusMessage {...props.status} /> : null}
      <div className={`${compPrefix}-container ${props.disabled ? `${prefix}-disabled` : ''}`}>
        {props.prefix ? <div className={`${compPrefix}-prefix`}>{props.prefix}</div> : null}
        <div className={inputContainerClassNames}>
          <input
            id={inputId}
            aria-labelledby={labelId}
            aria-label={props.ariaLabel}
            type="text"
            value={props.value}
            onChange={(e) => { props.onChange(e.target.value); }}
            placeholder={props.placeholder}
            disabled={props.disabled}
            className={`${compPrefix}-input`}
            onFocus={() => { setIsActive(true); }}
            onBlur={() => { setIsActive(false); }}
          />
        </div>
        {props.clearable ? <FuiButton disabled={props.disabled} onClick={clearValue} actionType='neutral' hierarchy='tertiary' size='medium' icon={<FuiIconX12x12 />} className={`${compPrefix}-clearable-icon-container`} /> : null}
        {props.suffix ? <div className={`${compPrefix}-suffix`}>{props.suffix}</div> : null}
      </div>
    </div >
  );
};
