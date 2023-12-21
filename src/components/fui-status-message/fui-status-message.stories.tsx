import type { Meta, StoryObj } from '@storybook/react';

import { FuiStatusMessage } from './fui-status-message';

const meta = {
  title: ' Components/StatusMessage',
  component: FuiStatusMessage,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-43025&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['invalid', 'attention', 'success'],
      name: '🔗 type'
    },
    message: {
      name: '🔗 message'
    },
    className: {
      control: {
        disable: true
      }
    },
    ariaLabel: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof FuiStatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    message: "You're doing something right!"
  }
};

export const Invalid: Story = {
  args: {
    type: 'invalid',
    message: 'Something is clearly wrong here'
  }
};

export const Attention: Story = {
  args: {
    type: 'attention',
    message: 'This requires your attention'
  }
};
