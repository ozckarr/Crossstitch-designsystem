import React from "react";
import { Wrap } from "../Wrap/Wrap";

import { Border } from "./Border";

export default {
  title: "Border",
  component: Border,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
};

const Template = (args) => <Border {...args} />;

export const Full = Template.bind({});
Full.args = {
  backgroundColor: "red",
  borderSize: 1,
  type: "full",
};

export const Half = Template.bind({});
Half.args = {
  backgroundColor: "orange",
  borderSize: 2,
  type: "half",
};

export const LeanLeft = Template.bind({});
LeanLeft.args = {
  backgroundColor: "green",
  borderSize: 3,
  type: "lean-left",
};

export const LeanRight = Template.bind({});
LeanRight.args = {
  backgroundColor: "blue",
  borderSize: 3,
  type: "lean-right",
};
