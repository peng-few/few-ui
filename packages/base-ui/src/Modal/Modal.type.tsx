import React from 'react';

export interface ModalProps extends React.ComponentProps<any> {
  width?: string;
  BackDrop?: boolean;
  visible: boolean;
  onClose: () => void;
  title?: string;
}
