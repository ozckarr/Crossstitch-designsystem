import React from "react";

import { Text } from "./Text";
import { Wrap } from "../Wrap/Wrap";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    textColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: "black",
  text: "abcdefghijklimnopqrstuvwxyzåäö",
};
