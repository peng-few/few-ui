import React, { ReactElement } from 'react';

export interface ModalProps extends React.ComponentProps<'div'> {
  width?: string;
  top?: string;
  backDrop?: boolean;
  visible: boolean;
  onClose: () => void;
  modalTitle?: ReactElement | string;
  unmountOnExit?: boolean;
}
