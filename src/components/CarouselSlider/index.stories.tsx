import { Meta, Story } from '@storybook/react';
import React from 'react';
import { carousels } from '../../fakeData';
import CarouselSlider, { CarouselSliderType } from '../CarouselSlider';

export default {
  title: 'Components/Carousel Slider',
  component: CarouselSlider
} as Meta;

const Template: Story<CarouselSliderType> = (args) => (
  <CarouselSlider {...args} data={carousels} />
);

export const Default = Template.bind({});
