import { Meta, Story } from '@storybook/react';
import React from 'react';
import BaseLayout, { BaseLayoutType } from '../BaseLayout';

export default {
  title: 'Components/Base Layout',
  component: BaseLayout
} as Meta;

const Template: Story<BaseLayoutType> = (args) => (
  <BaseLayout {...args}>
    <p>
      Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id
      dui posuere blandit. Praesent sapien massa, convallis a pellentesque nec,
      egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh
      pulvinar a.
    </p>

    <p>
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet
      nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut
      lacinia in, elementum id enim.
    </p>
  </BaseLayout>
);

export const Default = Template.bind({});
