import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiPopover, type FuiPopoverProps } from './fui-popover';
import { FuiButton } from '../fui-button/fui-button';
import FuiIllustrationCat from '../../illustrations/fui-illustration-cat';
import { FuiRadio } from '../fui-radio/fui-radio';
import { FuiEmpty } from '../fui-empty/fui-empty';

const meta = {
  title: ' Components/Popover',
  component: FuiPopover,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=3079-28605&mode=dev'
    }
  },
  argTypes: {
    header: {
      name: '🔗 header',
      control: 'text'
    },
    body: {
      name: '🔗 body',
      control: {
        disable: true
      }
    },
    footer: {
      name: '🔗 footer',
      control: {
        disable: true
      }
    },
    children: {
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
} satisfies Meta<typeof FuiPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
      setOpen(args.isOpen);
    }, [args.isOpen]);

    const body = (
      <div style={{ padding: getComputedStyle(document.documentElement).getPropertyValue('--fui-space-xlg') }}>
        <FuiEmpty title='This is empty' description='Add content and bring this space to life!' illustration={FuiIllustrationCat()} />
      </div>
    );

    const toggleOpen = () => {
      setOpen(open => !open);
    };

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FuiPopover
          {...args}
          isOpen={open}
          positions={['bottom']}
          onClickOutside={() => { setOpen(false); }}
          body={body}
          containerStyle={{ top: '2px' }}
        >
          <div >
            <FuiButton onClick={toggleOpen} label='Open Popover' />
          </div>
        </FuiPopover>
      </div>
    );
  },
  name: 'Basic',
  args: {
    body: <div />,
    children: <div />,
    isOpen: false
  }
};

export const DismissibleWithTitle: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=3079-19738&mode=dev'
    }
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.isOpen);
    }, [args.isOpen]);

    const body = (
      <div style={{ padding: '16px' }}>
        <FuiEmpty title='This is empty' description='Add content and bring this space to life!' illustration={FuiIllustrationCat()} />
      </div>
    );

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FuiPopover
          {...args}
          isOpen={open}
          positions={['bottom']}
          onClickOutside={() => { setOpen(false); }}
          body={body}
          header={{ titleText: 'Popover Title', dismissible: true, onDismiss: () => { setOpen(false); } }}
        >
          <div>
            <FuiButton onClick={() => { setOpen(!open); }} label='Open Popover' />
          </div>
        </FuiPopover>
      </div >
    );
  },
  args: {
    body: <div />,
    children: <div />,
    isOpen: false
  }
};

export const Position: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<FuiPopoverProps['positions']>(['bottom']);

    React.useEffect(() => {
      setOpen(args.isOpen);
    }, [args.isOpen]);

    const body = (
      <div style={{ padding: '16px' }}>
        <FuiEmpty title='This is empty' description='Add content and bring this space to life!' illustration={FuiIllustrationCat()} />
      </div>
    );

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 'var(--fui-space-lg)', marginTop: '80px', marginBottom: '80px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--fui-space-lg)' }}>
          <FuiRadio checked={position?.includes('bottom')} onClick={() => { setPosition(['bottom']); }} label='Bottom' />
          <FuiRadio checked={position?.includes('left')} onClick={() => { setPosition(['left']); }} label='Left' />
          <FuiRadio checked={position?.includes('right')} onClick={() => { setPosition(['right']); }} label='Right' />
          <FuiRadio checked={position?.includes('top')} onClick={() => { setPosition(['top']); }} label='Top' />
        </div>
        <FuiPopover
          {...args}
          isOpen={open}
          header={{ titleText: 'Popover Title', dismissible: true, onDismiss: () => { setOpen(false); } }}
          positions={position}
          onClickOutside={() => { setOpen(false); }}
          body={body}
        >
          <div>
            <FuiButton onClick={() => { setOpen(!open); }} label='Open Popover' />
          </div>
        </FuiPopover>
      </div>
    );
  },
  name: 'Change Popover Position',
  args: {
    body: <div />,
    children: <div />,
    isOpen: false
  }
};

export const Actions: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=3081-56588&mode=dev'
    }
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.isOpen);
    }, [args.isOpen]);

    const body = (
      <div style={{ padding: '16px' }}>
        <FuiEmpty title='This is empty' description='Add content and bring this space to life!' illustration={FuiIllustrationCat()} />
      </div>
    );

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FuiPopover
          {...args}
          isOpen={open}
          header={{ titleText: 'Popover Title', dismissible: true, onDismiss: () => { setOpen(false); } }}
          onClickOutside={() => { setOpen(false); }}
          positions={['bottom', 'top']}
          body={body}
          footer={{ primaryAction: { label: 'Submit', actionType: 'neutral', hierarchy: 'primary', size: 'medium', onClick: () => { setOpen(false); } }, secondaryAction: { label: 'Cancel', actionType: 'neutral', hierarchy: 'tertiary', size: 'medium', onClick: () => { setOpen(false); } } }}
        >
          <div>
            <FuiButton onClick={() => { setOpen(!open); }} label='Open Popover' />
          </div>
        </FuiPopover>
      </div>
    );
  },
  name: 'Footer Actions',
  args: {
    body: <div />,
    children: <div />,
    isOpen: false
  }
};
