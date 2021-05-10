import { Meta, Story } from '@storybook/react';
import React from 'react';
import Footer, { FooterFC } from '../Footer';

export default {
  title: 'Components/Footer',
  component: Footer
} as Meta;

const Template: Story<FooterFC> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
