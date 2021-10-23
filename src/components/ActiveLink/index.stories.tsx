import { Meta, Story } from '@storybook/react';
import React from 'react';
import ActiveLink, { ActiveLinkType } from '../ActiveLink';

export default {
  title: 'Components/Active Link',
  component: ActiveLink
} as Meta;

const Template: Story<ActiveLinkType> = (args) => (
  <ActiveLink {...args} href="http://example.com">
    <a>Link Test</a>
  </ActiveLink>
);

export const Default = Template.bind({});
