import React from 'react';
import { prefix } from '../prefix';
import classnames from 'classnames';

const compPrefix = `${prefix}-button`;

export interface Option {
  label: string
  value: string
}

export interface FuiButtonProps {
  size: 'small' | 'medium' | 'large'
  hierarchy: 'primary' | 'secondary' | 'tertiary'
  actionType: 'neutral' | 'success' | 'destructive'
  disabled?: boolean
  label?: string
  icon?: JSX.Element
  iconRight?: JSX.Element
  isLoading?: boolean
  onClick?: () => void

  ariaLabel?: string
  className?: string
}

export const FuiButton = (props: FuiButtonProps) => {
  const classNames = classnames(
    `${compPrefix}`,
    `${compPrefix}--size-${props.hierarchy === 'tertiary' ? 'medium' : props.size}`,
    `${compPrefix}--hierarchy-${props.hierarchy}`,
    `${compPrefix}--action-${props.actionType}`,
    props.disabled ? `${prefix}-disabled` : `${prefix}-interactable`,
    props.className
  );

  return (
    <button
      type="button"
      className={classNames}
      aria-disabled={props.disabled}
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.icon ? <span className={`${compPrefix}-icon`}>{props.icon}</span> : null}
      {props.label ? <div className={`${compPrefix}-label-container`}><span className={`${compPrefix}-label`}>{props.label}</span></div> : null}
      {props.iconRight ? <span className={`${compPrefix}-icon-right`}>{props.iconRight}</span> : null}
      {props.isLoading && <div className={`${compPrefix}__loader`}></div>}
    </button>
  );
};

FuiButton.defaultProps = {
  size: 'medium',
  hierarchy: 'primary',
  actionType: 'neutral'
};
