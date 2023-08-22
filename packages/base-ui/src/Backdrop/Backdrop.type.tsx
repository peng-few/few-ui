import React from 'react';

export interface BackdropProps extends React.ComponentProps<'div'> {
  visible: boolean;
  onClick?: () => void;
}
