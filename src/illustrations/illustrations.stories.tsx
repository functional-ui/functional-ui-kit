
import React from 'react';
import { type StoryObj } from '@storybook/react';
import FuiIllustrationCat from './fui-illustration-cat';

const meta = {
  title: ' Components/Illustrations'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Cat: Story = { render: () => <FuiIllustrationCat/> };
