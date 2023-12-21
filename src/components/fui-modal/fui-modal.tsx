import React from 'react';
import { prefix } from '../prefix';
import { FuiButton, type FuiButtonProps } from '../fui-button/fui-button';
import Modal from 'react-modal';
import FuiIconX12x12 from '../../icons/fui-icon-x-16x16';
import classnames from 'classnames';

const compPrefix = `${prefix}-modal`;
export interface ModalAction {
  label: string
  onClick: () => void
}

interface ModalHeaderConfig {
  modalTitle: string
  layout?: 'horizontal' | 'vertical'
  modalSubtitle?: string
  icon?: JSX.Element
}

interface ModalFooterConfig {
  primaryAction: FuiButtonProps
  secondaryAction?: FuiButtonProps
  footerContent?: string
  layout?: 'horizontal' | 'vertical'
}

export interface FuiModalProps {
  open: boolean
  onOpenChange: (nextOpen: boolean) => void
  shouldCloseOnOverlayClick?: boolean
  modalHeader?: JSX.Element | ModalHeaderConfig
  modalBody?: JSX.Element
  modalFooter?: JSX.Element | ModalFooterConfig
  showDismiss?: boolean
  divided?: boolean

  className?: string
}

export const FuiModal = (props: FuiModalProps) => {
  const header = React.useMemo(() => {
    if (!props.modalHeader) return null;
    if (React.isValidElement(props.modalHeader)) return props.modalHeader;
    const { modalTitle, modalSubtitle, icon, layout } = props.modalHeader as ModalHeaderConfig;
    return (
      <div className={`${compPrefix}-header layout-${layout || 'horizontal'}`}>
        {icon && <div className={`${compPrefix}-icon`}>{icon}</div>}
        <div className={`${compPrefix}-header-content-wrapper layout-${layout || 'horizontal'}`}>
          {modalTitle}
          {modalSubtitle && <span className={`${compPrefix}-subtitle`}>{modalSubtitle}</span>}
        </div>
      </div>
    );
  }, [props.modalHeader]);

  const footer = React.useMemo(() => {
    if (!props.modalFooter) return null;
    if (React.isValidElement(props.modalFooter)) return props.modalFooter;
    const { primaryAction, secondaryAction, footerContent, layout } = props.modalFooter as ModalFooterConfig;
    return (
      <div className={`${compPrefix}-footer layout-${layout || 'horizontal'}`}>
        {(footerContent && layout === 'horizontal' || !layout) && <span className={`${compPrefix}-footer-content`}>{footerContent}</span>}
        <div className={`${compPrefix}-footer-actions`}>
          {secondaryAction && <FuiButton {...secondaryAction} />}
          <FuiButton {...primaryAction} />
        </div>
        {footerContent && layout === 'vertical' && <span className={`${compPrefix}-footer-content`}>{footerContent}</span>}
      </div>
    );
  }, [props.modalFooter]);

  const classNames = classnames(
    compPrefix,
    props.className,
    props.divided ? `${compPrefix}-divided` : ''
  );

  return (
    <Modal
      isOpen={props.open}
      onRequestClose={() => { props.onOpenChange(false); }}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      className={classNames}
      overlayClassName={`${compPrefix}-overlay`}
    >
      {props.showDismiss && <FuiButton onClick={() => { props.onOpenChange(false); }} className={`${compPrefix}-dismiss`} hierarchy='tertiary' icon={<FuiIconX12x12 />} />}
      {header}
      {props.modalBody}
      {footer}
    </Modal>
  );
};

FuiModal.defaultProps = {
  shouldCloseOnOverlayClick: true,
  layout: 'horizontal'
};
