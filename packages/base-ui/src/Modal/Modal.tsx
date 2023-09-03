import styled from '@emotion/styled';
import Backdrop from '../Backdrop';
import Button from '../Button';
import { ModalProps } from './Modal.type';
import { IconClose } from '../Icon';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { modifyColor } from '../util';
import { getThemeMode, useTheme } from '../theme';

const StyledModal = styled.div<Pick<ModalProps, 'width' | 'top'>>(
  ({ theme, width = '650px', top = '40%' }) => {
    const { isDarkMode } = getThemeMode(theme.mode);

    return {
      backgroundColor: modifyColor(theme.palette.background, {
        lighten: isDarkMode ? 10 : 0,
      }),
      color: theme.palette.text,
      width: width,
      maxWidth: '90%',
      borderRadius: '10px',
      position: 'fixed',
      left: '50%',
      top: top,
      transform: 'translateX(-50%) translateY(-50%) scale(0.1)',
      border: '0',
      transformOrigin: '50% 0',
      transition: '160ms cubic-bezier(0, 1.15, 1, 1)',
      opacity: '0.1',
      '&.fade--entering,&.fade--entered': {
        transform: 'translateX(-50%) translateY(-50%)',
        opacity: '1',
      },
      '&.fade--exiting': {
        transition: 'opacity 100ms',
      },
      '&.fade--exited': {
        display: 'none',
      },
      '& .few-modal-head': {
        padding: '17px 15px',
        fontWeight: 'bold',
        letterSpacing: '.1em',
        fontSize: theme.font.lg,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '& .few-modal-body': {
        padding: '0 15px 25px',
        maxHeight: '60vh',
        overflowY: 'auto',
      },
    };
  },
);

export function Modal({
  visible,
  children,
  onClose,
  modalTitle,
  width,
  top,
  backDrop = true,
  unmountOnExit = true,
  ...props
}: ModalProps) {
  const theme = useTheme();
  return createPortal(
    <>
      {backDrop && <Backdrop visible={visible} onClick={onClose} />}
      <Transition
        in={visible}
        timeout={160}
        mountOnEnter
        unmountOnExit={unmountOnExit}
      >
        {(state) => (
          <StyledModal
            {...props}
            width={width}
            top={top}
            className={`fade--${state}`}
            theme={theme}
          >
            <div className="few-modal-head">
              <div css={{ flexGrow: 1 }}>{modalTitle}</div>
              <Button
                variant="text"
                rounded
                style={{ color: theme.palette.grey.main }}
                onClick={onClose}
                icon={IconClose}
              ></Button>
            </div>
            <div className="few-modal-body">{children}</div>
          </StyledModal>
        )}
      </Transition>
    </>,
    document.body,
  );
}

export default Modal;
