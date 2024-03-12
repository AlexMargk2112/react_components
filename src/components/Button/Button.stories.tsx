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

/** Pass `'secondary'` to the the `theme` prop.  */
export const WithIcon: Story = {
  args: {
    theme: 'primary'
  },
  render: () => (
    <Button
      theme="secondary"
      label="Google"
      icon={<img className="h-6" src="https://png2.cleanpng.com/sh/8d81f6cea7ba17c4a99ddd1230196ed6/L0KzQoG4UMA5N6NokZH9cnHxg8HokvVvfF5sh9HwbHWwg8bwlPUucZR0hp9wb3BqfLa0ifNwdl46fqlvOUi4c7TrVsBmO186TqoCNEm3RIK9UMIyQWg6UagDNEG1PsH1h5==/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.png" />} 
    />
  )
}