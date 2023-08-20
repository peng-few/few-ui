import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useArgs } from '@storybook/preview-api';
import Button from '../Button';
import { NOOP } from '../util';

const Story: Meta<typeof Modal> = {
  component: Modal,
  title: ' Modal',
};
export default Story;
type Story = StoryObj<typeof Button>;

export const SimpleModal = () => {
  const [{ visible }, updateArgs] = useArgs<{ visible: boolean }>();
  const modalChange = () => updateArgs({ visible: !visible });

  return (
    <div>
      <h1>Modal</h1>
      <Button variant="filled" onClick={modalChange}>
        open the modal
      </Button>
      <Modal visible={visible} onClose={modalChange} title="標題">
        <p>Modal text</p>
      </Modal>
    </div>
  );
};

export const NestedModal = () => {
  const [{ firstVisible, secondVisible }, updateArgs] = useArgs<{
    firstVisible: boolean;
    secondVisible: boolean;
  }>();
  const handleFirstModalChange = () =>
    updateArgs({ firstVisible: !firstVisible, secondVisible });
  const handleSecondModalChange = () =>
    updateArgs({ firstVisible, secondVisible: !secondVisible });

  return (
    <div>
      <h1>Modal</h1>
      <Button variant="filled" onClick={handleFirstModalChange}>
        open the modal
      </Button>
      <Modal
        visible={firstVisible}
        onClose={handleFirstModalChange}
        title="標題"
      >
        <p>This is the first Modal</p>
        <Button variant="filled" onClick={handleSecondModalChange}>
          open second modal
        </Button>
        <Modal
          visible={secondVisible}
          onClose={handleSecondModalChange}
          title="第二層modal"
          width="60%"
        >
          this is the second modal
        </Modal>
      </Modal>
    </div>
  );
};

export const ModalWithControls: Story = {
  name: 'Modal (with controls)',
  args: {
    visible: true,
    onClose: NOOP,
    title: 'this is title',
    children: 'this is the content',
    width: '75%',
    top: '40%',
    unmountOnExit: true,
  },
};
