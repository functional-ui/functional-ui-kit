import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiRadio } from './fui-radio';

const meta = {
  title: ' Components/Radio',
  component: FuiRadio,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2511-73454&mode=design&t=jq0JgMhh6dwhuYIm-4'
    },
    docs: {
      description: {
        component: 'Radio groups are best for selecting a single option from a short list, while Selects are less efficient due to multiple interactions and hidden options. Radio buttons are preferable for lists of around ten or fewer options, as they require just one quick interaction and ensure all choices are visible and easily comparable. If there isn’t enough space, try a a select instead.'
      }
    }
  },
  argTypes: {
    checked: {
      name: '🔗 checked'
    },
    disabled: {
      name: '🔗 disabled'
    },
    label: {
      name: '🔗 label'
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
} satisfies Meta<typeof FuiRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (props) => {
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
      setChecked(!!props.checked);
    }, [props.checked]);

    return (
      <FuiRadio
        {...props}
        checked={checked}
        onClick={() => { setChecked(!checked); }}
      />
    );
  },
  args: {
  },
  name: 'Basic'
};

export const Disabled: Story = {
  render: (props) => {
    return (
      <div style={{display:'flex', gap: 'var(--fui-space-md)'}}>
        <FuiRadio
          {...props}
          disabled={true}
          />
        <FuiRadio
          {...props}
          disabled={true}
          checked={true}
        />
        <FuiRadio
          {...props}
          label='Label'
          disabled={true}
          />
        <FuiRadio
          {...props}
          label='Label'
          disabled={true}
          checked={true}
        />
      </div>
    );
  },
  args: {
  },
};

export const Group: Story = {
  render: () => {
    const [value, setValue] = React.useState(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--fui-space-md)' }}>
        <FuiRadio onClick={() => { setValue(0); }} checked={value === 0} label='Red' />
        <FuiRadio onClick={() => { setValue(1); }} checked={value === 1} label='Green' />
        <FuiRadio onClick={() => { setValue(2); }} checked={value === 2} label='Blue' />
        <FuiRadio disabled={true} onClick={() => { setValue(3); }} checked={value === 3} label='Yellow' />
      </div>
    );
  },
  args: {
  }
};
