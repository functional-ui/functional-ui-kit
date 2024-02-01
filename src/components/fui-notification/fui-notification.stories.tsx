import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiNotification } from './fui-notification';
import FuiIconPlaceholder32X32 from '../../icons/fui-icon-placeholder-32x32';

const meta = {
  title: ' Components/Notification',
  component: FuiNotification,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-14321&mode=design&t=jq0JgMhh6dwhuYIm-4'
    },
    docs: {
      description: {
        component: 'Confirm actions, update people about timely events and provide status updates for processes. When providing an action, opt for non-destructive actions and clear distinctions for destructive ones. The information in notifications is valuable but not critical, aiming for quick and concise updates that people can grasp at a glance.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      name: '🔗 title'
    },
    type: {
      name: '🔗 type'
    },
    description: {
      name: '🔗 description'
    },
    action: {
      name: '🔗 action',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: { label: 'Action', onClick: () => { }, hierarchy: 'tertiary', size: 'medium' }
      }
    },
    icon: {
      name: '🔗 icon',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: <FuiIconPlaceholder32X32 />
      }
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
} satisfies Meta<typeof FuiNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Basic',
  args: {
    title: 'Notification Title',
    action: { label: 'Action', onClick: () => { }, hierarchy: 'tertiary', size: 'medium' },
    description: 'This is the notification description, I like.',
    type: 'neutral'
  }
};

export const Types: Story = {
  name: 'Notification Types',
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--fui-space-md)' }}>
      {['neutral', 'attention', 'informative', 'dangerous', 'success'].map((type: any) =>
        <FuiNotification {...args} type={type} />
      )}
    </div>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-14324&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  args: {
    title: 'Notification Title',
    action: { label: 'Action', onClick: () => { }, hierarchy: 'tertiary', size: 'medium' },
    description: 'This is the notification description, I like.',
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  }
};
