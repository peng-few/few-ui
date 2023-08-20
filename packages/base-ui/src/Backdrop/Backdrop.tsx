import styled from '@emotion/styled';
import { BackdropProps } from './Backdrop.type';
import { modifyColor, NOOP } from '../util';
import { Transition } from 'react-transition-group';

const StyledBackdrop = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  background: modifyColor(theme.palette.common.black, { setAlpha: 0.7 }),
  opacity: 0,
  transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1)',
  top: 0,
  left: 0,
  '&.backdrop--entering,&.backdrop--entered': {
    opacity: 1,
  },
  '&.dackdrop--exiting,&.dackdrop--exited': {
    opacity: 0,
  },
}));

export function Backdrop({ visible, onClick = NOOP, children }: BackdropProps) {
  return (
    <Transition in={visible} timeout={225} unmountOnExit={true}>
      {(state) => (
        <StyledBackdrop className={`backdrop--${state}`} onClick={onClick}>
          {children}
        </StyledBackdrop>
      )}
    </Transition>
  );
}

Backdrop.displayName = 'Backdrop';
