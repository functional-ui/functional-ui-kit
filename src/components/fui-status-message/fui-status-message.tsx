import React from 'react';
import { prefix } from '../prefix';
import FuiIconCheck8X8 from '../../icons/fui-icon-check-8x8';
import FuiIconX8x8 from '../../icons/fui-icon-x-8x8';
import classnames from 'classnames';

const compPrefix = `${prefix}-status-message`;

export interface FuiStatusMessageProps {
  type: 'invalid' | 'attention' | 'success'
  message: string

  ariaLabel?: string
  className?: string
}

export const FuiStatusMessage = ({
  ...props
}: FuiStatusMessageProps & React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const classNames = classnames(compPrefix, `${compPrefix}-${props.type}`, props.className);
  const attentionTriangle =
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.32071 1.39811C8.75435 0.346311 7.24565 0.346308 6.67929 1.39811L1.35351 11.2888C0.815401 12.2882 1.5392 13.5 2.67422 13.5H13.3258C14.4608 13.5 15.1846 12.2882 14.6465 11.2889L9.32071 1.39811Z" fill="var(--fui-color-status-attention-subtle)" stroke="var(--fui-color-status-attention)"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V8C7 8.55228 7.44771 9 8 9C8.55228 9 9 8.55229 9 8L9 5ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z" fill="var(--fui-color-status-attention)"/>
    </svg>;
  const renderIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <div className={`${compPrefix}-icon-wrapper-success`}><FuiIconCheck8X8/></div>;
      case 'attention':
        return attentionTriangle;
      case 'invalid':
        return <div className={`${compPrefix}-icon-wrapper-invalid`}><FuiIconX8x8/></div>;
      default:
        break;
    }
  };

  return (
    <div {...props} aria-label={props.ariaLabel} className={classNames}> {renderIcon(props.type)} {props.message}</div>
  );
};
