import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Color, Variant } from './Button.type';
import { IconSearch } from '../Icon';
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
            <h4 style={{ display: 'inline-block', margin: 0 }}>{color}</h4>
            <div>
              {Object.values(Variant).map((variant) => (
                <Button
                  variant={variant}
                  color={color}
                  style={{ marginRight: '10px' }}
                >
                  Button
                </Button>
              ))}
            </div>
          </>
        ))}
        <h4>icon button</h4>
        <div>
          {Object.values(Variant).map((variant) => (
            <Button
              variant={variant}
              color="primary"
              style={{ marginRight: '10px' }}
              rounded
              icon={IconSearch}
            ></Button>
          ))}
        </div>
        <h4>icon + text button</h4>
        <div>
          {Object.values(Variant).map((variant) => (
            <Button
              variant={variant}
              color="primary"
              style={{ marginRight: '10px' }}
              rounded
              icon={IconSearch}
            >
              button
            </Button>
          ))}
        </div>
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

export const Outlined: Story = {
  name: 'outlined Button',
  args: {
    variant: 'outlined',
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

export const Text: Story = {
  name: 'text Button',
  args: {
    variant: 'text',
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

export const Default: Story = {
  name: 'default Button',
  args: {
    variant: 'default',
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
