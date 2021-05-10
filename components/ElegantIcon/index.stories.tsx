import { Meta, Story } from '@storybook/react';
import { ElegIcon, ElegIconType } from '../ElegantIcon';

export default {
  title: 'Components/Elegant Icon',
  component: ElegIcon
} as Meta;

const Template: Story<ElegIconType> = (args) => <ElegIcon {...args} />;

export const Default = Template.bind({});
