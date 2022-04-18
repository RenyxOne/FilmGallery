import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {BackButtonDumb} from "@components/BackButton";

export default {
  title: 'BackButton',
  component: BackButtonDumb,
} as ComponentMeta<typeof BackButtonDumb>

const Template: ComponentStory<typeof BackButtonDumb> = (args) => <BackButtonDumb {...args}/>;

export const defaultBackButton = Template.bind({});
defaultBackButton.args = {
  onClick: () => {}
};
