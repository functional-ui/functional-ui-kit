import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiButton } from './fui-button';
import FuiIconPlaceholder16X16 from '../../icons/fui-icon-placeholder-16x16';

const meta = {
  title: ' Components/Button',
  component: FuiButton,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-37274'
    },
    docs: {
      description: {
        component: "Help people take action by showing how significant they are using: primary, secondary or tertiary hierarchy. You might also need varying button sizes, depending on the interface's complexity. Use actionType to provide feedback about the outcome of actions."
      }
    }
  },
  argTypes: {
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
    label: {
      name: '🔗 label'
    },
    size: {
      name: '🔗 size'
    },
    hierarchy: {
      name: '🔗 hierarchy'
    },
    actionType: {
      name: '🔗 actionType'
    },
    disabled: {
      name: '🔗 disabled'
    },
    isLoading: {
      name: '🔗 isLoading'
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
} satisfies Meta<typeof FuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Basic',
  args: {
    label: 'Button'
  }
};

export const Icon: Story = {
  args: {
    label: 'Button'
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
        <FuiButton {...args} hierarchy='primary' icon={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='primary' icon={<FuiIconPlaceholder16X16 />} iconRight={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='primary' iconRight={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='primary' icon={<FuiIconPlaceholder16X16 />} label={undefined} />
      </div>
      <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
        <FuiButton {...args} hierarchy='secondary' icon={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='secondary' icon={<FuiIconPlaceholder16X16 />} iconRight={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='secondary' iconRight={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='secondary' icon={<FuiIconPlaceholder16X16 />} label={undefined} />
      </div>
      <div style={{ display: 'flex', gap: 'var(--fui-space-lg)' }}>
        <FuiButton {...args} hierarchy='tertiary' icon={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='tertiary' icon={<FuiIconPlaceholder16X16 />} iconRight={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='tertiary' iconRight={<FuiIconPlaceholder16X16 />} />
        <FuiButton {...args} hierarchy='tertiary' icon={<FuiIconPlaceholder16X16 />} label={undefined} />
      </div>
    </div>
  ),
  name: 'Icon & Icon Right',
  parameters: {
    docs: {
      description: {
        story: 'Pass the `icon` or `iconRight` props to customize your button.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-39431'
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

export const Size: Story = {
  args: {
    label: 'Button'
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)', alignItems: 'center' }}>
      <FuiButton {...args} size='small' />
      <FuiButton {...args} size='medium' />
      <FuiButton {...args} size='large' />
    </div>
  ),
  name: 'Button Sizes',
  parameters: {
    docs: {
      description: {
        story: 'Use the `size` prop to change the size of the button.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-37275'
    }
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    }
  }
};

export const Hierarchy: Story = {
  args: {
    label: 'Button'
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
      <FuiButton {...args} hierarchy='primary' />
      <FuiButton {...args} hierarchy='secondary' />
      <FuiButton {...args} hierarchy='tertiary' />
    </div>
  ),
  name: 'Button Hierarchies',
  parameters: {
    docs: {
      description: {
        story: 'Use the `hierarchy` prop to change the variant of the button.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-37286'
    }
  },
  argTypes: {
    hierarchy: {
      table: {
        disable: true
      }
    }
  }
};

export const Type: Story = {
  args: {
    label: 'Button'
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
        <FuiButton {...args} hierarchy='primary' actionType='neutral' />
        <FuiButton {...args} hierarchy='primary' actionType='success' />
        <FuiButton {...args} hierarchy='primary' actionType='destructive' />
      </div>
      <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
        <FuiButton {...args} hierarchy='secondary' actionType='neutral' />
        <FuiButton {...args} hierarchy='secondary' actionType='success' />
        <FuiButton {...args} hierarchy='secondary' actionType='destructive' />
      </div>
      <div style={{ display: 'flex', gap: 'var(--fui-space-lg)' }}>
        <FuiButton {...args} hierarchy='tertiary' actionType='neutral' />
        <FuiButton {...args} hierarchy='tertiary' actionType='success' />
        <FuiButton {...args} hierarchy='tertiary' actionType='destructive' />
      </div>
    </div>
  ),
  name: 'Button Action Types',
  parameters: {
    docs: {
      description: {
        story: 'Use the `actionType` prop to change the color variant of the button.'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-37915'
    }
  },
  argTypes: {
    actionType: {
      table: {
        disable: true
      }
    }
  }
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
      <FuiButton {...args} size='small' />
      <FuiButton {...args} size='small' isLoading={true} />
      <FuiButton {...args} />
      <FuiButton {...args} size='large' />
      <FuiButton {...args} hierarchy='tertiary' />
    </div>
  ),
  args: {
    label: 'Button',
    disabled: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-50316'
    }
  },
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    }
  }
};

export const Loading: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
      <FuiButton {...args} hierarchy='primary' />
      <FuiButton {...args} hierarchy='secondary' />
      <FuiButton {...args} hierarchy='tertiary' />
    </div>
  ),
  args: {
    label: 'Button',
    isLoading: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2422-41689'
    }
  },
  argTypes: {
    isLoading: {
      table: {
        disable: true
      }
    }
  }
};
