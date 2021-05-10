import { Meta, Story } from '@storybook/react';
import React from 'react';
import { newsTest } from '../../fakeData';
import TrendingTrack, { TrendingTrackType } from '../TrendingTrack';

export default {
  title: 'Components/Trending Track',
  component: TrendingTrack
} as Meta;

const Template: Story<TrendingTrackType> = (args) => (
  <TrendingTrack {...args} title="Example Title" data={newsTest} />
);

export const Default = Template.bind({});
