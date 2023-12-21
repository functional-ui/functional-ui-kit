import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiModal } from './fui-modal';
import { FuiButton } from '../fui-button/fui-button';
import { FuiEmpty } from '../fui-empty/fui-empty';
import FuiIllustrationCat from '../../illustrations/fui-illustration-cat';
import { FuiBadge } from '../fui-badge/fui-badge';
import FuiIconPlaceholder32X32 from '../../icons/fui-icon-placeholder-32x32';

const meta = {
  title: ' Components/Modal',
  component: FuiModal,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2465-46880'
    }
  },
  argTypes: {
    modalHeader: {
      name: '🔗 modalHeader',
      control: 'select',
      options: ['none', 'horizontal', 'vertical'],
      mapping: {
        none: undefined,
        horizontal: {
          modalTitle: 'Modal Title',
          modalSubtitle: 'This is an optional subtitle',
          layout: 'horizontal',
          icon: <FuiIconPlaceholder32X32 />
        },
        vertical: {
          modalTitle: 'Modal Title',
          modalSubtitle: 'This is an optional subtitle',
          layout: 'vertical',
          icon: <FuiIconPlaceholder32X32 />
        }
      }
    },
    modalBody: {
      name: '🔗 modalBody',
      control: {
        disable: true
      }
    },
    divided: {
      name: '🔗 divided'
    },
    modalFooter: {
      name: '🔗 modalFooter',
      control: 'select',
      options: ['none', 'horizontal', 'vertical'],
      mapping: {
        none: undefined,
        horizontal: {
          primaryAction: {
            label: 'Save',
            hierarchy: 'primary',
            actionType: 'neutral',
            size: 'medium'
          },
          secondaryAction: {
            label: 'Cancel',
            hierarchy: 'secondary',
            actionType: 'neutral',
            size: 'medium'
          },
          footerContent: 'Really?',
          layout: 'horizontal'
        },
        vertical: {
          primaryAction: {
            label: 'Save',
            hierarchy: 'primary',
            actionType: 'neutral',
            size: 'medium'
          },
          secondaryAction: {
            label: 'Cancel',
            hierarchy: 'secondary',
            actionType: 'neutral',
            size: 'medium'
          },
          footerContent: 'Really?',
          layout: 'vertical'
        }
      }
    },
    showDismiss: {
      name: '🔗 showDismiss'
    },
    className: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof FuiModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <FuiModal {...args} open={open} onOpenChange={setOpen} />
        <FuiButton onClick={() => { setOpen(true); }} label='Open Modal' />
      </>
    );
  },
  name: 'Basic',
  args: {
    open: false,
    modalHeader: {
      modalTitle: 'Modal Title',
      modalSubtitle: 'This is an optional subtitle',
      layout: 'vertical',
      icon: <FuiIconPlaceholder32X32 />
    },
    showDismiss: true,
    modalBody: <div style={{ padding: '0 var(--fui-space-xxlg) var(--fui-space-xxlg) var(--fui-space-xxlg)', width: 360 }}><FuiEmpty title='Empty State' description='Modal Empty State' illustration={<FuiIllustrationCat />} /></div>,
  }
};

export const Divided: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <FuiModal {...args} open={open} onOpenChange={setOpen} />
        <FuiButton onClick={() => { setOpen(true); }} label='Open Modal' />
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2465-46880'
    }
  },
  argTypes: {
    modalHeader: {
      table: {
        disable: true
      }
    },
    modalFooter: {
      table: {
        disable: true
      }
    }
  },
  args: {
    open: false,
    showDismiss: true,
    modalBody: <div style={{ padding: '0 var(--fui-space-xxlg)', width: 360 }}><FuiEmpty title='Empty State' description='Modal Empty State' illustration={<FuiIllustrationCat />} /></div>,
    divided: true,
    modalHeader: {
      modalTitle: 'Modal Header',
    },
    modalFooter: {
      primaryAction: { label: 'Button', hierarchy: 'primary', actionType: 'neutral', size: 'medium' },
      secondaryAction: { label: 'Button', hierarchy: 'secondary', actionType: 'neutral', size: 'medium' },
    }
  }
};

export const Header: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <FuiModal {...args} open={open} onOpenChange={setOpen} />
        <FuiButton onClick={() => { setOpen(true); }} label='Open Modal' />
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2465-46880'
    }
  },
  argTypes: {
    modalHeader: {
      table: {
        disable: true
      }
    },
    modalFooter: {
      table: {
        disable: true
      }
    }
  },
  args: {
    open: false,
    showDismiss: true,
    modalBody: <div style={{ padding: '0 var(--fui-space-xxlg)', width: 360 }}><FuiEmpty title='Empty State' description='Modal Empty State' illustration={<FuiIllustrationCat />} /></div>,
    modalHeader: {
      modalTitle: 'Modal Header',
      modalSubtitle: 'This is an optional subtitle',
      icon: <FuiIconPlaceholder32X32 />
    },
  }
};

export const Footer: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <FuiModal {...args} open={open} onOpenChange={setOpen} />
        <FuiButton onClick={() => { setOpen(true); }} label='Open Modal' />
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2465-46880'
    }
  },
  argTypes: {
    modalHeader: {
      table: {
        disable: true
      }
    },
    modalFooter: {
      table: {
        disable: true
      }
    }
  },
  args: {
    open: false,
    showDismiss: true,
    modalBody: <div style={{ padding: '0 var(--fui-space-xxlg)', width: 360 }}><FuiEmpty title='Empty State' description='Modal Empty State' illustration={<FuiIllustrationCat />} /></div>,
    modalFooter: {
      primaryAction: { label: 'Button', hierarchy: 'primary', actionType: 'neutral', size: 'medium' },
      secondaryAction: { label: 'Button', hierarchy: 'secondary', actionType: 'neutral', size: 'medium' },
      footerContent: 'Really?',
    },
    modalHeader: {
      modalTitle: 'Modal Header',
      modalSubtitle: 'This is an optional subtitle',
      icon: <FuiIconPlaceholder32X32 />
    },
  }
};

export const CustomHeaderAndFooter: Story = {
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <FuiModal {...args} open={open} onOpenChange={setOpen} />
        <FuiButton onClick={() => { setOpen(true); }} label='Open Modal' />
      </>
    );
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2465-46880'
    }
  },
  argTypes: {
    modalHeader: {
      table: {
        disable: true
      }
    },
    modalFooter: {
      table: {
        disable: true
      }
    }
  },
  args: {
    open: false,
    showDismiss: true,
    modalBody: <div style={{ padding: '0 var(--fui-space-xxlg)', width: 360 }}><FuiEmpty title='Empty State' description='Modal Empty State' illustration={<FuiIllustrationCat />} /></div>,
    modalHeader: <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fui-space-md)', padding: 'var(--fui-space-xxlg)', borderBottom: '1px solid var(--fui-color-divider-soft)', marginBottom: 'var(--fui-space-xxlg)' }}>This is a custom header <FuiBadge label='Custom' /></div>,
    modalFooter: <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--fui-space-md)', padding: 'var(--fui-space-xxlg)', borderTop: '1px solid var(--fui-color-divider-soft)', marginTop: 'var(--fui-space-xxlg)' }}>This is a custom footer <FuiBadge label='Custom' /></div>
  }
};
