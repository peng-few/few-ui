import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Color } from './Button.type';
const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

type Story = StoryObj<typeof Button>;
export const Overview: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '100px 1fr',
          gridAutoRows: '50px',
        }}
      >
        {Object.values(Color).map((color) => (
          <>
            <h3 style={{ display: 'inline-block', margin: 0 }}>{color}</h3>
            <div>
              <Button
                variant="default"
                color={color}
                style={{ marginRight: '10px' }}
              >
                Button
              </Button>
              <Button
                variant="filled"
                color={color}
                style={{ marginRight: '10px' }}
              >
                Button
              </Button>
              <Button
                variant="outlined"
                color={color}
                style={{ marginRight: '10px' }}
              >
                Button
              </Button>
              <Button
                variant="text"
                color={color}
                style={{ marginRight: '10px' }}
              >
                Button
              </Button>
            </div>
          </>
        ))}
      </div>
    );
  },
};
export const Filled: Story = {
  name: 'Filled Button',
  args: {
    variant: 'filled',
    color: 'primary',
    children: 'Button',
  },
  argTypes: {
    as: {
      options: ['a', 'button', 'div'],
      description: 'The value of the slider',
    },
    variant: {
      control: false,
      description: 'The value of the slider',
    },
  },
};
