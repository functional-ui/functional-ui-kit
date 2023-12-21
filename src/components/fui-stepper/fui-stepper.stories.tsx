import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiStepper, FuiStepperDisabled } from './fui-stepper';

const meta = {
  title: ' Components/Stepper',
  component: FuiStepper,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-80120&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    disabled: {
      name: '🔗 disabled',
      control: 'select',
      options: [undefined, 'minus', 'plus', 'all']
    },
    status: {
      name: '🔗 status',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: { type: 'invalid', message: 'Invalid Input' }
      }
    },
    value: {
      name: '🔗 value'
    },
    label: {
      name: '🔗 label'
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
} satisfies Meta<typeof FuiStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return (
      <FuiStepper {...args} value={value} onChange={setValue} />
    );
  },
  name: 'Basic',
  args: {
    value: 0
  }
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return (
      <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
        <FuiStepper {...args} value={value} onChange={setValue} disabled={FuiStepperDisabled.Minus} />
        <FuiStepper {...args} value={value} onChange={setValue} disabled={FuiStepperDisabled.Plus} />
        <FuiStepper {...args} value={value} onChange={setValue} disabled={FuiStepperDisabled.All} />
      </div>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-78711&mode=design&t=jq0JgMhh6dwhuYIm-4'
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
    value: 0
  }
};

export const StatusMessage: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);
    return (
      <FuiStepper {...args} value={value} onChange={setValue} />
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-78247&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    label: {
      table: {
        disable: true
      }
    },
    status: {
      table: {
        disable: true
      }
    }
  },
  args: {
    value: 0,
    label: 'Input Field',
    status: { type: 'invalid', message: 'Invalid Value' }
  }
};
