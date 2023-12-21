import React from 'react';
import { prefix } from '../prefix';
import classnames from 'classnames';

const compPrefix = `${prefix}-badge`;

export type FuiBadgeColor = 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'neutral';

export interface FuiBadgeProps {
  color: FuiBadgeColor
  icon?: JSX.Element
  iconRight?: JSX.Element
  label: string

  ariaLabel?: string
  className?: string
}

export const FuiBadge = (props: FuiBadgeProps) => {
  const classNames = classnames(
    compPrefix,
    `${compPrefix}-color-${props.color}`,
    props.className
  );
  const icon = React.useMemo(() => <div className={`${prefix}-icon`}>{props.icon}</div>, [props.icon]);
  const iconRight = React.useMemo(() => <div className={`${prefix}-badge-icon-right`}>{props.iconRight}</div>, [props.iconRight]);
  const badgeLabel = React.useMemo(() => <div className={`${prefix}-badge-label`}>{props.label}</div>, [props.label]);

  return (
    <div className={classNames} aria-label={props.ariaLabel}>
      {props.icon && icon}
      {props.label}
      {props.iconRight && iconRight}
    </div>
  );
};

FuiBadge.defaultProps = {
  color: 'blue'
};
