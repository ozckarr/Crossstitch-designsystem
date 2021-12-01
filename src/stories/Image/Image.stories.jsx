import React from "react";
import { Wrap } from "../Wrap/Wrap";
import { Image } from "./Image";
import testImg from "./assets/test-img.jpg";

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
};
