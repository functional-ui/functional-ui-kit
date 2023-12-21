import React from 'react';
import { prefix } from '../prefix';
import classnames from 'classnames';

const compPrefix = `${prefix}-switch`;

export interface FuiSwitchProps {
  on: boolean
  onChange: (on: boolean) => void
  size?: 'small' | 'medium'
  disabled?: boolean

  className?: string
  ariaLabel?: string
}

export const FuiSwitch = ({
  size = 'medium',
  ...props
}: FuiSwitchProps) => {
  const classNames = classnames(
    compPrefix,
    `${compPrefix}-size-${size}`,
    props.on ? `${compPrefix}-on` : `${compPrefix}-off`,
    props.disabled ? `${prefix}-disabled` : `${prefix}-interactable`,
    props.className
  );

  return (
    <div onClick={() => { !props.disabled && props.onChange(!props.on); }} role='checkbox' aria-label={props.ariaLabel} className={classNames}>
      <div className={`${compPrefix}-knob`}>
        <div className={`${compPrefix}-thumb`}></div>
      </div>
    </div>
  );
};
