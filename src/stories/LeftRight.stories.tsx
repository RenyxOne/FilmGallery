import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {LeftRight} from "@components/LeftRight/LeftRight";


export default {
  title: 'LeftRight',
  component: LeftRight,
} as ComponentMeta<typeof LeftRight>

const Template: ComponentStory<typeof LeftRight> = (args) => <LeftRight {...args} />;

export const defaultLeftRight = Template.bind({});
defaultLeftRight.args = {
  left: <div>left</div>,
  right: <div>right</div>
};
