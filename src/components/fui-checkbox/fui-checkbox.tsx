import React from 'react';
import { prefix } from '../prefix';
import FuiIconCheck12X12 from '../../icons/fui-icon-check-12x12';
import classnames from 'classnames';
import FuiIconIntermediateLine2x10 from '../../icons/fui-icon-intermediate-line-2x10';

const compPrefix = `${prefix}-checkbox`;

export interface FuiCheckboxProps {
  checked?: boolean
  intermediate?: boolean
  disabled?: boolean
  onToggle: (isChecked: boolean) => void
  checkLabel?: string

  ariaLabel?: string
  className?: string
}

export const FuiCheckbox = (props: FuiCheckboxProps) => {
  const classNames = classnames(
    `${compPrefix}-wrapper`,
    props.disabled ? `${prefix}-disabled` : `${prefix}-interactable`,
    props.className,
    (props.checked || props.intermediate) ? 'checked' : ''
  );

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    props.onToggle(!props.checked);
  };

  const onSpace = (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
      props.onToggle(!props.checked);
    }
  }

  return (
    <div aria-label={props.ariaLabel} tabIndex={0} onKeyDown={onSpace} className={classNames} onClick={onClick}>
      <div role='checkbox' className={compPrefix} >
        {props.checked ? <FuiIconCheck12X12 /> : props.intermediate ? <FuiIconIntermediateLine2x10 /> : null}
      </div>
      {props.checkLabel && <label>{props.checkLabel}</label>}
    </div>
  );
};
