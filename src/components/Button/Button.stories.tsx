import { type Meta, type StoryObj } from "@storybook/react";
import Button from "./Button";

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

export const Primary: Story = {
  args: {
    theme: 'primary'
  }
}