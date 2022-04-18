import React from 'react';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ActiveButton} from "@components/ActiveButton";


export default {
  title: 'ActiveButton',
  component: ActiveButton,
} as ComponentMeta<typeof ActiveButton>

const Template: ComponentStory<typeof ActiveButton> = (args) => <ActiveButton {...args} />;

export const defaultActiveButton = Template.bind({});
defaultActiveButton.args = {
  isActive: true,
  name: 'test',
  handleClick: () => {
    console.log(`click on ${defaultActiveButton.name}`)
  }
};
