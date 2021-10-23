import { Meta, Story } from '@storybook/react';
import React from 'react';
import { aboutData } from '../../fakeData';
import CardLarge, { CardLargeFC } from '../CardLarge';

export default {
  title: 'Components/Card Large',
  component: CardLarge
} as Meta;

const Template: Story<CardLargeFC> = (args) => (
  <CardLarge {...args} data={aboutData} />
);

export const Default = Template.bind({});
