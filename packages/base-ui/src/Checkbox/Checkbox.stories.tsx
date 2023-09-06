import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { FontToken } from '../theme';
import { useArgs } from '@storybook/preview-api';
import Button from '../Button';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default Story;

type Story = StoryObj<typeof Checkbox>;
const fontToken: (keyof FontToken)[] = ['xs', 'sm', 'md', 'lg', 'xl'];

type Args = { [k in keyof FontToken]: boolean } & { disabled: boolean };
export const Overview = () => {
  const [args, updateArgs] = useArgs<Args>();
  const checkChange = (name: keyof FontToken) =>
    updateArgs({ [name]: !args[name] });
  return (
    <div>
      {fontToken.map((size: keyof FontToken) => (
        <Checkbox
          key={size}
          checked={args[size]}
          onChange={() => checkChange(size)}
          size={size}
          css={{ marginRight: '10px' }}
          disabled={args.disabled}
        >
          Checkbox
        </Checkbox>
      ))}
      <br /> <br />
      <Button
        size="sm"
        onClick={() => updateArgs({ disabled: !args.disabled })}
      >
        disabled checkbox
      </Button>
    </div>
  );
};
export const Control: Story = {
  name: 'Filled Checkbox',
  args: {
    size: 'md',
    children: 'checkbox',
    disabled: false,
    checked: false,
  },
};
