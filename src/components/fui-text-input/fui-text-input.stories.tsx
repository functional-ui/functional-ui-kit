import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiTextInput } from './fui-text-input';
import FuiIconPlaceholder16X16 from '../../icons/fui-icon-placeholder-16x16';

const meta = {
  title: ' Components/TextInput',
  component: FuiTextInput,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2547-68586&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    prefix: {
      name: '🔗 prefix',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: <FuiIconPlaceholder16X16 />
      }
    },
    suffix: {
      name: '🔗 suffix',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: <FuiIconPlaceholder16X16 />
      }
    },
    clearable: {
      name: '🔗 clearable'
    },
    disabled: {
      name: '🔗 disabled'
    },
    label: {
      name: '🔗 label'
    },
    placeholder: {
      name: '🔗 placeholder'
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
} satisfies Meta<typeof FuiTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <FuiTextInput {...args} value={value} onChange={setValue} />
    );
  },
  name: 'Basic',
  args: {
    value: '',
    placeholder: 'Placeholder'
  }
};

export const PrefixAndSuffix: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <FuiTextInput {...args} value={value} onChange={setValue} />
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2544-55579&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    suffix: {
      table: {
        disable: true
      }
    },
    prefix: {
      table: {
        disable: true
      }
    }
  },
  args: {
    value: '',
    prefix: <FuiIconPlaceholder16X16 />,
    suffix: <FuiIconPlaceholder16X16 />
  }
};

export const Clearable: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <FuiTextInput {...args} value={value} onChange={setValue} />
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2545-56021&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
    clearable: {
      table: {
        disable: true
      }
    }
  },
  args: {
    value: '',
    clearable: true
  }
};

export const Disabled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <>
        <FuiTextInput {...args} value={value} onChange={setValue} />
        <FuiTextInput {...args} value={value} onChange={setValue} prefix={<FuiIconPlaceholder16X16 />} suffix={<FuiIconPlaceholder16X16 />} />
        <FuiTextInput {...args} value={value} onChange={setValue} label='Text' status={{ message: 'This is the message of this status', type: 'success' }} />
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2545-55880&mode=design&t=jq0JgMhh6dwhuYIm-4'
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
    value: 'Value',
    disabled: true
  }
};

export const LabelAndStatus: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <FuiTextInput {...args} value={value} onChange={setValue} />
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2544-55650&mode=design&t=jq0JgMhh6dwhuYIm-4'
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
    value: '',
    label: 'Input Title',
    status: { type: 'invalid', message: 'Invalid Input' }
  }
};
