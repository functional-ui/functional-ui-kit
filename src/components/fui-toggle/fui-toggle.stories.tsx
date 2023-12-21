import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiToggle } from './fui-toggle';
import FuiIconPlaceholder16X16 from '../../icons/fui-icon-placeholder-16x16';

const meta = {
  title: ' Components/Toggle',
  component: FuiToggle,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2541-41544&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    size: {
      control: 'select',
      name: '🔗 size'
    },
    disabled: {
      name: '🔗 disabled'
    },
    options: {
      control: {
        disable: true
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
    },
    value: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof FuiToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <>
        <FuiToggle {...args} value={value} onChange={setValue} />
      </>
    );
  },
  name: 'Basic',
  args: {
    options: [
      { label: 'Label', value: '1' },
      { label: 'Label', value: '2' },
      { label: 'Label', value: '3' }
    ],
    value: '1'
  }
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <>
        <FuiToggle {...args} value={value} onChange={setValue} />
        <FuiToggle {...args} value={value} onChange={setValue} disabled={false} />
      </>
    );
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2541-43091&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3', disabled: true },
      { label: 'Option 4', value: '4' }
    ],
    disabled: true,
    value: '1'
  }
};

export const ToggleSizes: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fui-space-lg)' }}>
        <FuiToggle {...args} value={value} onChange={setValue} size='medium' />
        <FuiToggle {...args} value={value} onChange={setValue} size='large' />
      </div>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2541-41547&mode=design&t=jq0JgMhh6dwhuYIm-4'
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
    options: [
      { label: 'Label', value: '7' },
      { label: 'Label', value: '8' },
      { label: 'Label', value: '9' }
    ],
    value: '7'
  }
};

export const PrefixAndSuffix: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);
    return (
      <>
        <FuiToggle {...args} value={value} onChange={setValue} />
      </>
    );
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  },
  args: {
    options: [
      { label: 'Label', value: '4', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> },
      { label: 'Label', value: '5', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 />, disabled: true },
      { label: 'Label', value: '6', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> }
    ],
    value: '4'
  }
};
