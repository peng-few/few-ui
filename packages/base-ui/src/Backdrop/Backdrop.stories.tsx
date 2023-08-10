import type { Meta } from '@storybook/react';
import { Backdrop } from './Backdrop';
import { useArgs } from '@storybook/preview-api';
import { Button } from '../Button';

const Story: Meta<typeof Backdrop> = {
  component: Backdrop,
  title: ' Backdrop',
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
        opne the backdrop
      </Button>
      <Backdrop visible={visible} onClick={handleClose}>
        <p>backdrop text</p>
      </Backdrop>
    </div>
  );
};
