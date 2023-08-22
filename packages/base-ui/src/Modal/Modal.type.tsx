import React from 'react';

export interface ModalProps extends React.ComponentProps<'div'> {
  width?: string;
  top?: string;
  backDrop?: boolean;
  visible: boolean;
  onClose: () => void;
  title?: string;
  unmountOnExit?: boolean;
}