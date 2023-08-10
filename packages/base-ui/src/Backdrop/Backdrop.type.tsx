import React from 'react';

export interface BackdropProps extends React.ComponentProps<any> {
  visible: boolean;
  onClick?: () => void;
}
