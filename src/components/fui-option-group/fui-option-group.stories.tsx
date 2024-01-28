import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FuiIconPlaceholder16X16 from '../../icons/fui-icon-placeholder-16x16';
import { FuiOptionGroup } from './fui-option-group';

const meta = {
  title: ' Components/OptionGroup',
  component: FuiOptionGroup,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/zHutj6e9DcPngHZTDtAL1u/Functional-UI-Kit?type=design&node-id=2574-19579&mode=design&t=jq0JgMhh6dwhuYIm-4'
    }
  },
  argTypes: {
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
  }
} satisfies Meta<typeof FuiOptionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Basic',
  args: {
    options: [
      {
        label: 'Group Title', options: [
          { label: 'Option', value: '1' },
          { label: 'Option', value: '2' },
          { label: 'Option', value: '3' },
        ]
      }
    ]
  }
};

export const CustomOptions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'You can customize your options by passing in a `prefix` (on single select) or `suffix` (on single or multi select).'
      }
    }
  },
  args: {
    options: [
      { label: 'Option 1', value: '1', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> },
      { label: 'Option 2', value: '2', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> },
      { label: 'Option 3', value: '3', prefix: <FuiIconPlaceholder16X16 />, suffix: <FuiIconPlaceholder16X16 /> }
    ]
  }
};
