import React from 'react';
import { prefix } from '../prefix';
import { FuiStatusMessage, type FuiStatusMessageProps } from '../fui-status-message/fui-status-message';
import FuiIconMinus12x12 from '../../icons/fui-icon-minus-12x12';
import FuiIconPlus12x12 from '../../icons/fui-icon-plus-12x12';
import classnames from 'classnames';

const compPrefix = `${prefix}-stepper`;

export enum FuiStepperDisabled {
  Minus = 'minus',
  Plus = 'plus',
  All = 'all',
};

export interface FuiStepperProps {
  value: number
  onChange: (value: number) => void
  disabled?: FuiStepperDisabled
  label?: string
  status?: FuiStatusMessageProps

  className?: string
  ariaLabel?: string
}

export const FuiStepper = (props: FuiStepperProps) => {
  const isIncDisabled = React.useMemo(() => {
    return props.disabled && [FuiStepperDisabled.All, FuiStepperDisabled.Plus].includes(props.disabled);
  }, [props.disabled]);

  const isDecDisabled = React.useMemo(() => {
    return props.disabled && [FuiStepperDisabled.All, FuiStepperDisabled.Minus].includes(props.disabled);
  }, [props.disabled]);

  const isAllDisabled = React.useMemo(() => {
    return props.disabled && [FuiStepperDisabled.All].includes(props.disabled);
  }, [props.disabled]);

  const inc = React.useCallback(() => {
    if (isIncDisabled) return;
    props.onChange(props.value + 1);
  }, [props.value, props.onChange, props.disabled]);

  const dec = React.useCallback(() => {
    if (isDecDisabled) return;
    props.onChange(props.value - 1);
  }, [props.value, props.onChange, props.disabled]);

  const classNames = classnames(
    `${compPrefix}-wrapper`,
    props.className
  );

  const minusButtonClassNames = classnames(
    `${compPrefix}-minus-container`,
    isDecDisabled ? `${prefix}-disabled` : `${prefix}-interactable`
  );

  const plusButtonClassNames = classnames(
    `${compPrefix}-plus-container`,
    isIncDisabled ? `${prefix}-disabled` : `${prefix}-interactable`
  );

  const valueContainerClassNames = classnames(
    `${compPrefix}-value-container`,
    isAllDisabled ? `${prefix}-disabled` : ''
  );

  const containerStyle = React.useMemo(() => {
    return { width: 102 + ((props.value.toString().length - 1) * 10) };
  }, [props.value]);

  return (
    <div className={classNames}>
      {props.label && <div className={`${compPrefix}-label`}>{props.label}</div>}
      {props.status && <FuiStatusMessage {...props.status} />}
      <div className={`${compPrefix}-container`} style={containerStyle}>
        <button onClick={dec} className={minusButtonClassNames} disabled={isDecDisabled}>
          <FuiIconMinus12x12 />
        </button>
        <div className={valueContainerClassNames}>
          <input type="number" className={`${compPrefix}-input`} value={props.value} onChange={(e) => { props.onChange(Number(e.target.value)); }} disabled={isAllDisabled} />
        </div>
        <button onClick={inc} className={plusButtonClassNames} disabled={isIncDisabled}>
          <FuiIconPlus12x12 />
        </button>
      </div>
    </div>
  );
};
