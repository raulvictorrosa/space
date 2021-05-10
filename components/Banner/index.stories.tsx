import { Meta, Story } from '@storybook/react';
import React from 'react';
import { captionTest } from '../../fakeData';
import Banner, { BannerType } from '../Banner';
export default {
  title: 'Components/Banner',
  component: Banner
} as Meta;

const Template: Story<BannerType> = (args) => (
  <Banner
    {...args}
    title={{ primary: 'Space', secondary: '.' }}
    caption={captionTest}
    src="/images/image1.jpg"
  />
);

export const Default = Template.bind({});
