import React from "react";

import { Button } from "./Button";
import { Wrap } from "../Wrap/Wrap";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    labelColor: { control: "color" },
    backgroundColor: { control: "color" },
    backgroundColorHover: { control: "color" },
    backgroundColorClick: { control: "color" },
  },
  decorators: [
    (Story) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelColor: "black",
  backgroundColor: "white",
  backgroundColorHover: "lightgrey",
  backgroundColorClick: "lightSlateGrey",
  borderColor: "black",
  label: "Button",
  type: "default",
};

export const Soft = Template.bind({});
Soft.args = {
  labelColor: "black",
  backgroundColor: "white",
  backgroundColorHover: "lightgrey",
  backgroundColorClick: "lightSlateGrey",
  borderColor: "black",
  label: "Button",
  type: "soft",
};
