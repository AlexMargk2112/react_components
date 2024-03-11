import { type Meta, type StoryObj } from "@storybook/react";
import Button from "./Button";

/** The best button component */
const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    label: {
      description: 'The label of the button'
    }
  },
  args: {
    label: 'Call Me'
  }
}

export default meta;

type Story = StoryObj<typeof Button>;

/** Pass `'primary'` to the the `theme` prop.  */
export const Primary: Story = {
  args: {
    theme: 'primary'
  }
}

/** Pass `'secondary'` to the the `theme` prop.  */
export const Secondary: Story = {
  args: {
    theme: 'secondary'
  }
}