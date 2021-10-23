import { Meta, Story } from '@storybook/react';
import React from 'react';
import Header, { HeaderType } from '../Header';

export default {
  title: 'Components/Header',
  component: Header
} as Meta;

const Template: Story<HeaderType> = (args) => <Header {...args} className="" />;

export const Default = Template.bind({});
