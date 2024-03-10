import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiCheckbox } from './fui-checkbox';

const meta = {
  title: ' Components/Checkbox',
  component: FuiCheckbox,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2461-15311'
    },
    docs: {
      description: {
        component: 'Checkboxes allow people to select multiple options or toggle a single choice. For single selections, consider radio buttons or drop-downs. Note that checkboxes require a submission step, while switches offer real-time interaction.'
      }
    }
  },
  argTypes: {
    checked: { name: '🔗 checked' },
    indeterminate: { name: '🔗 indeterminate' },
    disabled: { name: '🔗 disabled' },
    checkLabel: { name: '🔗 checkLabel' },
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
} satisfies Meta<typeof FuiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = React.useState<boolean>(!!args.checked);

    React.useEffect(() => {
      setChecked(!!args.checked);
    }, [args.checked]);

    return (
      <FuiCheckbox {...args} checked={checked} onToggle={setChecked} />
    );
  },
  args: {
    checkLabel: 'Label'
  },
  name: 'Basic'
};

export const Disabled: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', gap: 'var(--fui-space-md)' }}>
        <FuiCheckbox {...args} disabled />
        <FuiCheckbox {...args} checked disabled />
        <FuiCheckbox {...args} indeterminate disabled />
        <FuiCheckbox {...args} checkLabel='Label' disabled />
        <FuiCheckbox {...args} checkLabel='Label' checked disabled />
        <FuiCheckbox {...args} checkLabel='Label' indeterminate disabled />
      </div>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2464-15606'
    }
  },
  args: {
  },
  name: 'Disabled Checkbox',
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    },
    checked: {
      table: {
        disable: true
      }
    },
    indeterminate: {
      table: {
        disable: true
      }
    }
  }
};

export const Indeterminate: Story = {
  render: (args) => {
    const [checked1, setChecked1] = React.useState<boolean>(true);
    const [checked2, setChecked2] = React.useState<boolean>(false);

    const onToggleMaster = () => {
      if (checked1 && checked2) {
        setChecked1(false);
        setChecked2(false);
      } else {
        setChecked1(true);
        setChecked2(true);
      }
    };

    return (
      <>
        <FuiCheckbox {...args} checked={checked1 && checked2} indeterminate={checked1 || checked2} onToggle={onToggleMaster} />
        <div style={{ marginLeft: 'var(--fui-space-xxlg)', display: 'flex', flexDirection: 'column', gap: 'var(--fui-space-md)' }}>
          <FuiCheckbox {...args} checked={checked1} onToggle={setChecked1} />
          <FuiCheckbox {...args} checked={checked2} onToggle={setChecked2} />
        </div>
      </>
    );
  },
  args: {
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2461-15326'
    }
  },
  name: 'Indeterminate',
  argTypes: {
    disabled: {
      table: {
        disable: true
      }
    },
    checked: {
      table: {
        disable: true
      }
    },
    indeterminate: {
      table: {
        disable: true
      }
    }
  }
};
