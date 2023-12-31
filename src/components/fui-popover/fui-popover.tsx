import React from 'react';
import { prefix } from '../prefix';
import { FuiButton, type FuiButtonProps } from '../fui-button/fui-button';
import FuiIconX12x12 from '../../icons/fui-icon-x-12x12';
import classnames from 'classnames';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Placement } from '@floating-ui/react';

const compPrefix = `${prefix}-popover`;

interface PopoverHeaderConfig {
  titleText: string
  dismissible?: boolean
  onDismiss?: () => void
}

interface PopoverFooterConfig {
  primaryAction: FuiButtonProps
  secondaryAction?: FuiButtonProps
  footerContent?: string
}

export type FuiPopoverProps = {
  body: JSX.Element
  header?: JSX.Element | PopoverHeaderConfig
  footer?: JSX.Element | PopoverFooterConfig
  ariaLabel?: string
  className?: string
  placement?: Placement
  children: React.ReactNode
  isOpen: boolean
  onClickOutside?: () => void
};

export const FuiPopover = (props: FuiPopoverProps) => {
  const header = React.useMemo(() => {
    if (props.header) {
      if (!React.isValidElement(props.header)) {
        const { titleText, dismissible, onDismiss } = props.header as PopoverHeaderConfig;
        const dismissButton = (
          <FuiButton className={`${compPrefix}-title-dismiss`} icon={<FuiIconX12x12 />} onClick={onDismiss} hierarchy='tertiary' actionType='neutral' size='medium' />
        );
        return (
          <div className={`${compPrefix}-title`}>
            <span className={`${compPrefix}-title-text`}>{titleText}</span>
            {dismissible ? dismissButton : null}
          </div>
        );
      }
      return props.header;
    }
  }, [props.header]);

  const footer = React.useMemo(() => {
    if (!props.footer) return null;
    if (React.isValidElement(props.footer)) {
      return props.footer;
    }
    const { primaryAction, secondaryAction } = props.footer as PopoverFooterConfig;
    if (primaryAction ?? secondaryAction) {
      return (
        <div className={`${compPrefix}-footer`}>
          {secondaryAction && <FuiButton className={`${compPrefix}-footer-secondary`} {...secondaryAction} />}
          {primaryAction && <FuiButton className={`${compPrefix}-footer-primary`} {...primaryAction} />}
        </div>
      );
    }
  }, [props.footer]);

  const content = React.useMemo(() => {
    return (
      <div className={classnames(compPrefix, props.className)}>
        {header}
        {props.body}
        {footer}
      </div>
    );
  }, [props.body]);

  return (
    <div className={props.isOpen ? 'fui-popover' : 'fui-popover fui-popover-is-open'}>
      <Popover open={props.isOpen} onOpenChange={props.onClickOutside} placement={props.placement}>
        <PopoverTrigger asChild={true}>
          {props.children}
        </PopoverTrigger>
        <PopoverContent className="Popover">
          {content}
        </PopoverContent>
      </Popover>
    </div>
  );
};
