import React from 'react';
import { prefix } from '../prefix';
import { FuiButton, type FuiButtonProps } from '../fui-button/fui-button';
import classnames from 'classnames';

const compPrefix = `${prefix}-empty`;

export interface FuiEmptyProps {
  title: string
  description?: string
  action?: FuiButtonProps | JSX.Element
  illustration?: JSX.Element

  className?: string
}

export const FuiEmpty = (props: FuiEmptyProps) => {
  const classNames = classnames(compPrefix, props.className, {
    [`${compPrefix}-with-action`]: !!props.action,
    [`${compPrefix}-with-illustration`]: !!props.illustration
  });

  const action = React.useMemo(() => {
    if (props.action) {
      if (React.isValidElement(props.action)) {
        return props.action;
      } else {
        return <FuiButton {...props.action} />;
      }
    }
    return null;
  }, [props.action]);

  return (
    <div {...props} className={classNames}>
      {props.illustration}
      <div className={`${compPrefix}-content`}>
        <b className={`${compPrefix}-title`}>{props.title}</b>
        <p className={`${compPrefix}-description`}>{props.description}</p>
      </div>
      {action}
    </div>
  );
};
