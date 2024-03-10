import React from 'react';
import type { StoryObj } from '@storybook/react';
import FuiIconCheck12X12 from './fui-icon-check-12x12';
import FuiIconCheck8X8 from './fui-icon-check-8x8';
import FuiIconChevronDown12X12 from './fui-icon-chevron-down-12x12';
import FuiIconExclamationMark16x16 from './fui-icon-exclamation-mark-16x16';
import FuiIconExclamationMark8x8 from './fui-icon-exclamation-mark-8x8';
import FuiIconMinus8x8 from './fui-icon-minus-8x8';
import FuiIconPlaceholder16X16 from './fui-icon-placeholder-16x16';
import FuiIconPlaceholder32X32 from './fui-icon-placeholder-32x32';
import FuiIconX12x12 from './fui-icon-x-12x12';
import FuiIconX8x8 from './fui-icon-x-8x8';
import FuiIconX16x16 from './fui-icon-x-16x16';
import FuiIconIndeterminateLine2x10 from './fui-icon-indeterminate-line-2x10';

const meta = {
  title: ' Components/Icons'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Check8x8: Story = { render: () => <FuiIconCheck8X8/> };
export const Check12x12: Story = { render: () => <FuiIconCheck12X12/> };
export const ChevronDown12X12: Story = { render: () => <FuiIconChevronDown12X12/> };
export const ExclamationMark8x8: Story = { render: () => <FuiIconExclamationMark8x8/> };
export const ExclamationMark16x16: Story = { render: () => <FuiIconExclamationMark16x16/> };
export const Minus8x8: Story = { render: () => <FuiIconMinus8x8/> };
export const Placeholder16X16: Story = { render: () => <FuiIconPlaceholder16X16/> };
export const Placeholder32X32: Story = { render: () => <FuiIconPlaceholder32X32/> };
export const X8x8: Story = { render: () => <FuiIconX8x8/> };
export const X12x12: Story = { render: () => <FuiIconX12x12/> };
export const X16x16: Story = { render: () => <FuiIconX16x16/> };
export const IndeterminateLine2x10: Story = { render: () => <FuiIconIndeterminateLine2x10/> };
