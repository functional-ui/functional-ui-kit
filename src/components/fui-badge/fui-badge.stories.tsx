import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiBadge, type FuiBadgeProps } from './fui-badge';
import FuiIconPlaceholder16X16 from '../../icons/fui-icon-placeholder-16x16';

const meta = {
  title: ' Components/Badge',
  component: FuiBadge as React.FC<FuiBadgeProps>,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2461-2893'
    }
  },
  argTypes: {
    color: { name: '🔗 color' },
    icon: {
      control: 'boolean',
      name: '🔗 icon',
      mapping: {
        false: undefined,
        true: <FuiIconPlaceholder16X16 />
      }
    },
    iconRight: {
      control: 'boolean',
      name: '🔗 iconRight',
      mapping: {
        false: undefined,
        true: <FuiIconPlaceholder16X16 />
      }
    },
    label: { name: '🔗 label' },
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
} satisfies Meta<typeof FuiBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default',
    color: 'blue'
  },
  name: 'Basic'
};

export const Colors: Story = {
  args: {
    label: 'Badge',
    color: 'blue'
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
      {['blue', 'green', 'red', 'purple', 'yellow', 'neutral'].map((color) => (
        <FuiBadge key={color} {...args} color={color as FuiBadgeProps['color']} />
      ))}
    </div>
  ),
  name: 'Badge Color',
  parameters: {
    docs: {
      description: {
        story: 'Pass the `color` props to customize your badge.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2461-2893'
    }
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    }
  }
};

export const Icon: Story = {
  args: {
    label: 'Badge',
    color: 'blue'
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
      <FuiBadge {...args} icon={<FuiIconPlaceholder16X16 />} />
      <FuiBadge {...args} iconRight={<FuiIconPlaceholder16X16 />} />
      <FuiBadge {...args} icon={<FuiIconPlaceholder16X16 />} iconRight={<FuiIconPlaceholder16X16 />} />
    </div>
  ),
  name: 'Icon & Icon Right',
  parameters: {
    docs: {
      description: {
        story: 'Pass the `icon` or `iconRight` props to customize your badge.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2461-2908'
    }
  },
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    },
    iconRight: {
      table: {
        disable: true
      }
    }
  }
};
