import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiSwitch } from './fui-switch';

const meta = {
  title: ' Components/Switch',
  component: FuiSwitch,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2540-39847&mode=design&t=jq0JgMhh6dwhuYIm-4'
    },
    docs: {
      description: {
        component: 'Help people choose between two opposing values. Use for options with immediate effects with clear identification through context or labels if needed. Switch has more visual weight than a checkbox, so it looks better when it controls more functionality, so avoid employing it for minor settings.'
      }
    }
  },
  argTypes: {
    on: {
      name: '🔗 on'
    },
    size: {
      name: '🔗 size',
      control: 'select'
    },
    disabled: {
      name: '🔗 disabled'
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
} satisfies Meta<typeof FuiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [on, setOn] = React.useState(args.on);

    React.useEffect(() => {
      setOn(args.on);
    }, [args.on]);

    return (
      <>
        <FuiSwitch {...args} on={on} onChange={setOn} />
      </>
    );
  },
  name: 'Basic',
  args: {
    on: false
  }
};

export const SwitchSizes: Story = {
  render: (args) => {
    const [on, setOn] = React.useState(args.on);

    React.useEffect(() => {
      setOn(args.on);
    }, [args.on]);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fui-space-lg)' }}>
        <FuiSwitch {...args} on={on} onChange={setOn} size='small' />
        <FuiSwitch {...args} on={on} onChange={setOn} size='medium' />
      </div>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2540-14945&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  args: {
    on: true
  }
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fui-space-lg)' }}>
        <FuiSwitch {...args} on={false} />
        <FuiSwitch {...args} size='small' on={true} />
        <FuiSwitch {...args} />
        <FuiSwitch {...args} size='small' />
      </div>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2540-14958&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    }
  },
  args: {
    disabled: true,
    on: false
  }
};
