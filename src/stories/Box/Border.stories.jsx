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
        <Story>
          <button>test</button>
        </Story>
      </Wrap>
    ),
  ],
};

const Template = (args) => <Border {...args} />;

export const Default = Template.bind({});
