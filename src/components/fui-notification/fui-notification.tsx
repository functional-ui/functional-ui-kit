import React from 'react';
import { prefix } from '../prefix';
import FuiIconExclamationMark16x16 from '../../icons/fui-icon-exclamation-mark-16x16';
import FuiIconCheck16X16 from '../../icons/fui-icon-check-16x16';
import { FuiButton, FuiButtonProps } from '../fui-button/fui-button';
import classnames from 'classnames';

const compPrefix = `${prefix}-notification`;

export interface FuiNotificationProps {
  title: string
  type?: 'neutral' | 'attention' | 'informative' | 'dangerous' | 'success'
  description?: string
  action?: Omit<FuiButtonProps, 'actionType'>
  icon?: JSX.Element

  className?: string
  ariaLabel?: string
}

const renderNotificationIcon = (type: FuiNotificationProps['type']) => {
  if (type === 'attention') {
    const attentionTriangle = (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7639 5.59017C14.6852 3.74755 17.3148 3.74755 18.2361 5.59017L29.382 27.882C30.2131 29.5442 29.0044 31.5 27.1459 31.5H4.8541C2.99565 31.5 1.78691 29.5442 2.61803 27.882L13.7639 5.59017Z" fill="#FFF5D6" stroke="#B26C09" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4837 14.9653C17.5347 14.1197 16.8627 13.4061 16.0156 13.4061C15.1685 13.4061 14.4965 14.1198 14.5475 14.9653L15.0174 22.7682L17.0138 22.7682L17.4837 14.9653ZM16.0156 27.5939C16.8441 27.5939 17.5156 26.9224 17.5156 26.0939C17.5156 25.2655 16.8441 24.5939 16.0156 24.5939C15.1872 24.5939 14.5156 25.2655 14.5156 26.0939C14.5156 26.9224 15.1872 27.5939 16.0156 27.5939Z" fill="#B26C09" />
      </svg>

    );
    return attentionTriangle;
  }
  if (type === 'dangerous') {
    return (<div className={`${compPrefix}-icon-wrapper-dangerous`}><FuiIconExclamationMark16x16 /></div>);
  }
  if (type === 'informative') {
    return (<div className={`${compPrefix}-icon-wrapper-informative`}><FuiIconExclamationMark16x16 /></div>);
  }
  if (type === 'success') {
    return (<div className={`${compPrefix}-icon-wrapper-success`}><FuiIconCheck16X16 /></div>);
  }
};

const getActionType = (type: FuiNotificationProps['type']) => {
  switch (type) {
    case 'attention':
    case 'neutral':
    case 'informative':
      return 'neutral';
    case 'dangerous':
      return 'destructive';
    case 'success':
      return 'success';
  }
};

export const FuiNotification = (props: FuiNotificationProps) => {
  const classNames = classnames(
    compPrefix,
    `${compPrefix}-type-${props.type}`,
    props.className
  );

  return (
    <div className={classNames} aria-label={props.ariaLabel}>
      <div className={`${compPrefix}-container`}>
        {props.icon || renderNotificationIcon(props.type)}
        <div className={`${compPrefix}-text-container`}>
          <div className={`${compPrefix}-title`}>{props.title}</div>
          <div className={`${compPrefix}-description`}>{props.description}</div>
        </div>
      </div>
      {props.action ? <FuiButton {...props.action} actionType={getActionType(props.type)} /> : null}
    </div>
  );
};

FuiNotification.defaultProps = {
  type: 'neutral'
};
