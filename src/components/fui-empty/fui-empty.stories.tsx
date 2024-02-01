import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FuiEmpty } from './fui-empty';
import FuiIllustrationCat from '../../illustrations/fui-illustration-cat';

const meta = {
  title: ' Components/Empty',
  component: FuiEmpty,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2464-16262'
    },
    docs: {
      description: {
        component: 'Guide people in the absence of content, reducing confusion, encouraging actions, reinforcing branding, and offering friendly tips or tutorials to help people navigate new situations or create content when no data is available.'
      }
    }
  },
  argTypes: {
    title: {
      name: '🔗 title'
    },
    description: {
      name: '🔗 description'
    },
    action: {
      name: '🔗 action',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: { label: 'Try This', hierarchy: 'tertiary' }
      }
    },
    illustration: {
      name: '🔗 illustration',
      control: 'boolean',
      mapping: {
        false: undefined,
        true: <FuiIllustrationCat />
      }
    },
    className: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof FuiEmpty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Basic',
  args: {
    title: 'This is empty',
    description: 'Add content and bring this space to life!'
  }
};

export const WithActionAndIllustration: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2464-16264'
    }
  },
  args: {
    title: 'This is empty',
    description: 'Add content and bring this space to life!',
    action: { label: 'Try This', onClick: () => { console.log('Clicked empty state action'); }, hierarchy: 'tertiary', size: 'medium', actionType: 'neutral' },
    illustration: <FuiIllustrationCat />
  }
};
