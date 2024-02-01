import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FuiIconPlaceholder16X16 from '../../icons/fui-icon-placeholder-16x16';
import { FuiSelect } from './fui-select';
import { Clearable } from '../fui-text-input/fui-text-input.stories';

const meta = {
  title: ' Components/Select',
  component: FuiSelect,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2574-19579&mode=design&t=jq0JgMhh6dwhuYIm-4'
    },
    docs: {
      description: {
        component: 'Help people choose single or multiple values from a set of options. Consider select when you have 5 or more options. As an alternative, radio buttons or checkboxes can make the interface cleaner and more accessible.'
      }
    }
  },
  argTypes: {
    disabled: {
      name: '🔗 disabled'
    },
    type: {
      name: '🔗 type'
    },
    label: {
      name: '🔗 label'
    },
    placeholder: {
      name: '🔗 placeholder'
    },
    clearable: {
      name: '🔗 clearable'
    },
    statusMsg: {
      control: 'boolean',
      name: '🔗 statusMsg',
      mapping: {
        false: undefined,
        true: { message: 'This is the message of this status', type: 'invalid' }
      }
    },
    fixedHeight: {
      name: '🔗 fixedHeight'
    },
    value: {
      name: '🔗 value',
      control: {
        disable: true
      }
    },
    options: {
      name: '🔗 options',
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
    }
  }
} satisfies Meta<typeof FuiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value?.toString());
    const [multiValue, setMultiValue] = React.useState<any>([args.value?.toString()]);

    return (
      <FuiSelect {...args} onChange={args.type === 'multi-value' ? setMultiValue : setValue} value={args.type === 'multi-value' ? multiValue : value} />
    );
  },
  name: 'Basic',
  args: {
    type: 'single-value',
    placeholder: 'Select option',
    clearable: true,
    value: '',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' }
    ]
  }
};

export const NativeSelect: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value?.toString());

    return (
      <FuiSelect {...args} onChange={setValue} value={value} />
    );
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    placeholder: {
      table: {
        disable: true
      }
    }
  },
  args: {
    type: 'native',
    value: '1',
    options: [
      { label: 'Group', options: [{ label: 'Option 1', value: '1' }] },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' }
    ]
  }
};

export const SingleSelectGrouped: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value?.toString());

    return (
      <FuiSelect {...args} onChange={setValue} value={value} />
    );
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2556-73873&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  args: {
    type: 'single-value',
    placeholder: 'Select an option',
    value: '1',
    options: [
      { label: 'Group A', options: [{ label: 'Option 1', value: '1a' }, { label: 'Option 2', value: '2a' }, { label: 'Option 3', value: '3a' }] },
      { label: 'Group B', options: [{ label: 'Option 1', value: '1b' }, { label: 'Option 2', value: '2b' }, { label: 'Option 3', value: '3b' }] }
    ]
  }
};

export const MultiSelectGrouped: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value);

    return (
      <FuiSelect {...args} onChange={setValue} value={value} />
    );
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2556-75579&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  args: {
    type: 'multi-value',
    placeholder: 'Select option',
    value: ['1'],
    options: [
      { label: 'Group A', options: [{ label: 'Option 1', value: '1a' }, { label: 'Option 2', value: '2a' }, { label: 'Option 3', value: '3a' }] },
      { label: 'Group B', options: [{ label: 'Option 1', value: '1b' }, { label: 'Option 2', value: '2b' }, { label: 'Option 3', value: '3b' }] },
      { label: 'Option X', value: 'X' },
      { label: 'Option Y', value: 'Y' }
    ]
  }
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value?.toString());
    const [multiValue, setMultiValue] = React.useState<any>([args.value?.toString()]);

    return (
      <FuiSelect {...args} onChange={args.type === 'multi-value' ? setMultiValue : setValue} value={args.type === 'multi-value' ? multiValue : value} />
    );
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    }
  },
  args: {
    type: 'native',
    value: '1',
    disabled: true,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' }
    ]
  }
};

export const CustomOptions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'You can customize your options by passing in a `prefix` (on single select) or `suffix` (on single or multi select).\nYou can also use the `groupLabel` prop to group your options.'
      }
    }
  },
  render: (args) => {
    const [value, setValue] = React.useState<any>(args.value?.toString());
    const [multiValue, setMultiValue] = React.useState<any>([args.value?.toString()]);

    return (
      <FuiSelect {...args} onChange={args.type === 'multi-value' ? setMultiValue : setValue} value={args.type === 'multi-value' ? multiValue : value} />
    );
  },
  argTypes: {
    options: {
      table: {
        disable: true
      }
    }
  },
  args: {
    type: 'single-value',
    value: '1',
    options: [
      { label: 'Option 1', value: '1', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> },
      { label: 'Option 2', value: '2', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> },
      { label: 'Option 3', value: '3', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> }
    ]
  }
};
