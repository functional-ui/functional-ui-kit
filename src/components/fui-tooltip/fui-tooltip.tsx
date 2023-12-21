import React from 'react';
import { prefix } from '../prefix';
import { type Placement, useFloating, useHover, useInteractions, offset, FloatingPortal, useTransitionStyles } from '@floating-ui/react';
import classnames from 'classnames';

const compPrefix = `${prefix}-tooltip`;

export interface FuiTooltipProps {
  children: React.ReactNode
  tooltipBody: React.ReactNode
  placement?: Placement
  openDelay?: number
  closeDelay?: number

  ariaLabel?: string
  className?: string
}

export const FuiTooltip = (props: FuiTooltipProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  let timeout: any;

  const onOpenChange = React.useCallback((nextOpen: boolean) => {
    if (timeout) clearTimeout(timeout);
    if (nextOpen) {
      if (props.closeDelay) {
        timeout = setTimeout(() => {
          setIsOpen(nextOpen);
        }, props.openDelay);
      } else {
        setIsOpen(nextOpen);
      }
    } else {
      if (props.closeDelay) {
        timeout = setTimeout(() => {
          setIsOpen(nextOpen);
        }, props.closeDelay);
      } else {
        setIsOpen(nextOpen);
      }
    }
  }, [props.openDelay, props.closeDelay, setIsOpen]);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange,
    placement: props.placement,
    middleware: [offset(7)]
  });

  const { styles } = useTransitionStyles(context);
  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover
  ]);

  const classNames = classnames(
    compPrefix,
    props.className
  );

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {props.children}
      </span>
      {isOpen && (
        <FloatingPortal>
          <div aria-label={props.ariaLabel} className={classNames} ref={refs.setFloating} style={{ ...styles, ...floatingStyles }} {...getFloatingProps()}>
            {props.tooltipBody}
          </div>
        </FloatingPortal>
      )}
    </>
  );
};

FuiTooltip.defaultProps = {
  placement: 'top' as const
};
