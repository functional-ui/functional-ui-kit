import React from 'react';
import { prefix } from '../prefix';
import classnames from 'classnames';

export interface FuiRadioProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onClick: () => void

  ariaLabel?: string
  className?: string
}

const compPrefix = `${prefix}-radio`;

export const FuiRadio = (props: FuiRadioProps) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);
  const indicatorClassNames = classnames(
    `${compPrefix}-indicator`,
    props.className,
    props.checked ? 'checked' : '',
  );

  const classNames = classnames(
    compPrefix,
    {
      [`${prefix}-interactable`]: !props.disabled,
      [`${prefix}-disabled`]: props.disabled,
      [`${prefix}-focused`]: focused
    }
  );

  const onClick = () => {
    if (props.disabled) return;
    props.onClick();
    ref.current?.focus();
  };

  const onSpace = (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <div aria-label={props.ariaLabel} role='radio' className={classNames} onClick={onClick}>
      <div role='radio' className={indicatorClassNames} onClick={onClick}>
        <input onKeyDown={onSpace} onBlur={() => { setFocused(false); }} onFocus={() => { setFocused(true); }} disabled={props.disabled} onChange={props.onClick} ref={ref} type='radio' style={{ height: 0 }} />
      </div>
      {props.label && <span className={`${compPrefix}-label`}>
        {props.label}
      </span>}
    </div>
  );
};
