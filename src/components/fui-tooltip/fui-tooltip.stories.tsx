import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiTooltip, type FuiTooltipProps } from './fui-tooltip';
import { FuiRadio } from '../fui-radio/fui-radio';
import { FuiButton } from '../fui-button/fui-button';

const meta = {
  title: ' Components/Tooltip',
  component: FuiTooltip,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2542-48551&mode=design&t=jq0JgMhh6dwhuYIm-4'
    },
    docs: {
      description: {
        component: 'Offer concise feedback to inform people about the outcomes of actions or provide brief information about interface components when their cursor interacts with them. Prioritize the specific control, use action-oriented language, and keep the messages brief. Tooltips visually stand out by using contrasting colors with the theme interface.'
      }
    }
  },
  argTypes: {
    tooltipBody: {
      control: 'text',
      name: '🔗 tooltipBody'
    },
    children: {
      control: {
        disable: 'true'
      }
    },
    ariaLabel: {
      control: {
        disable: true
      }
    },
    className: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof FuiTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
        <FuiTooltip {...args} />
      </div>
    );
  },
  name: 'Basic',
  args: {
    tooltipBody: 'Tooltip text',
    children: <FuiButton hierarchy='tertiary' label='Hover me' />,
  }
};

export const Placement: Story = {
  render: (args) => {
    const [placement, setPlacement] = React.useState<FuiTooltipProps['placement']>('top');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 50, gap: 'var(--fui-space-xlg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--fui-space-lg)' }}>
          <FuiRadio label="top" onClick={() => { setPlacement('top'); }} checked={placement === 'top'} />
          <FuiRadio label="bottom" onClick={() => { setPlacement('bottom'); }} checked={placement === 'bottom'} />
          <FuiRadio label="left" onClick={() => { setPlacement('left'); }} checked={placement === 'left'} />
          <FuiRadio label="right" onClick={() => { setPlacement('right'); }} checked={placement === 'right'} />
        </div>
        <FuiTooltip {...args} placement={placement} />
      </div>
    );
  },
  argTypes: {
    placement: {
      table: {
        disable: true
      }
    }
  },
  args: {
    tooltipBody: 'hello there you handsome',
    children: <FuiButton hierarchy='tertiary' label='Hover me' />,
  }
};

export const OpenAndCloseDelay: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
        <FuiTooltip {...args} />
      </div>
    );
  },
  argTypes: {
    closeDelay: {
      table: {
        disable: true
      }
    },
    openDelay: {
      table: {
        disable: true
      }
    }
  },
  args: {
    tooltipBody: 'hello there you handsome',
    children: <FuiButton hierarchy='tertiary' label='Hover me' />,
    closeDelay: 500,
    openDelay: 500
  }
};
