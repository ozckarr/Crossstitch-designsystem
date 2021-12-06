import React from "react";
import { Wrap } from "../Wrap/Wrap";
import { Image } from "./Image";
import testImg from "./assets/Alfred_e_neuman.png";

export default {
  title: "Image",
  component: Image,

  decorators: [
    (Story) => (
      <Wrap>
        <Story />
      </Wrap>
    ),
  ],
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: testImg,
  stitchWidth: 40,
};
