import type { Meta, StoryObj } from '@storybook/react';
import Header from '~/src/components/layout/Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultHeader: Story = {}
