import React from "react";
import { Wrap } from "../Wrap/Wrap";
import { Text } from "../Text/Text";

import { Box } from "./Box";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <Wrap>
        <Story>
          <button>test</button>
        </Story>
      </Wrap>
    ),
  ],
};

const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
