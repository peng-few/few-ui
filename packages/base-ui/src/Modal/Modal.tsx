import styled from '@emotion/styled';
import Backdrop from '../Backdrop';
import Button from '../Button';

import { ModalProps } from './Modal.type';

const StyledModal = styled.div`
  color: pink;
`;

export function Modal({ visible, children, onClose, title }: ModalProps) {
  return (
    <Backdrop visible={visible} onClick={onClose}>
      <StyledModal>
        <div className="modal-head">
          {title}
          <Button variant="text"></Button>
        </div>
        {children}
      </StyledModal>
    </Backdrop>
  );
}
