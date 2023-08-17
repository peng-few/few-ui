import type { Meta } from '@storybook/react';
import { Modal } from './Modal';
import { useArgs } from '@storybook/preview-api';
import Button from '../Button';

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: ' Modal',
};
export default Story;

export const BackdropOverview = () => {
  const [{ visible }, updateArgs] = useArgs<{ visible: boolean }>();
  const handleClose = () => updateArgs({ visible: !visible });

  return (
    <div>
      <h1>Backdrop</h1>
      <Button
        variant="filled"
        onClick={() => updateArgs({ visible: !visible })}
      >
        opne the modal
      </Button>
      <Modal visible={visible} onClose={handleClose}>
        <p>Modal text</p>
      </Modal>
    </div>
  );
};
