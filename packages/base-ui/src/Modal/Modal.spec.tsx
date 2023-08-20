import { render, screen, fireEvent, waitFor } from '../../test-util';
import { Modal } from './Modal';
import React from 'react';
import { ModalProps } from './Modal.type';

const ModalSimulator = ({
  visible: initVisible = false,
  ...props
}: Partial<ModalProps>) => {
  const [visible, setVisible] = React.useState(initVisible);
  const handleClose = () => setVisible(false);
  return (
    <Modal {...props} visible={visible} onClose={handleClose}>
      text
    </Modal>
  );
};
describe('Modal', () => {
  it('should render successfully', () => {
    render(<ModalSimulator visible={true} />);
    const backdrop = screen.getByText('text');
    expect(backdrop).toBeInTheDocument();
  });

  it('should call onClose handler after clicking', () => {
    const handleClose = jest.fn();
    const { getByRole } = render(<Modal visible onClose={handleClose} />);
    fireEvent.click(getByRole('button'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('should close modal when click close button', async () => {
    const { queryByText, getByRole } = render(
      <ModalSimulator visible={true} />,
    );
    fireEvent.click(getByRole('button'));
    await waitFor(() => {
      expect(expect(queryByText('text')).not.toBeInTheDocument());
    });
  });
  it('should unmount modal when click close button', async () => {
    const { queryByText, getByRole } = render(
      <ModalSimulator visible={true} />,
    );
    fireEvent.click(getByRole('button'));
    await waitFor(() => {
      expect(expect(queryByText('text')).not.toBeInTheDocument());
    });
  });

  it('should not unmount modal when click close button when "unmountOnExit" set to false', async () => {
    const { queryByText, getByRole } = render(
      <ModalSimulator visible={true} />,
    );
    fireEvent.click(getByRole('button'));
    await waitFor(() => {
      expect(expect(queryByText('text')).toBeInTheDocument());
    });
  });
});
