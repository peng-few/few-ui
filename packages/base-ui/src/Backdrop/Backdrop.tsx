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
  color: 'white',
  background: modifyColor(theme.palette.common.black, { setAlpha: 0.8 }),
  opacity: 0,
  transition: '0.1s',
  top: 0,
  left: 0,
  '&.dackdrop--entering,&.backdrop--entered': {
    opacity: 1,
    transitionTimingFunction: 'ease-in',
  },
  '&.dackdrop--exiting,&.dackdrop--exited': {
    opacity: 0,
    transitionTimingFunction: 'ease-out',
  },
}));

export function Backdrop({ visible, onClick = NOOP, children }: BackdropProps) {
  return (
    <Transition in={visible} timeout={100} unmountOnExit={true}>
      {(state) => (
        <StyledBackdrop className={`backdrop--${state}`} onClick={onClick}>
          {children}
        </StyledBackdrop>
      )}
    </Transition>
  );
}

Backdrop.displayName = 'Backdrop';
