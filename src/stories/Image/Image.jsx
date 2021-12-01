import React, { useEffect, useState } from "react";
import "./image.css";
import PropTypes from "prop-types";
import missingImage from "./assets/missing-image.png";
import Pixelify from "./assets/pixelify";
import { setImageSize } from "./assets/setImageSize";

export const Image = ({ imageUrl, alt }) => {
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    setImageSize(setImageDimensions, imageUrl);
  }, []);

  console.log(imageDimensions);
  return (
    <div>
      <div className="cross-image-inner"></div>
      <Pixelify
        src={imageUrl}
        pixelSize={8}
        width={imageDimensions.width}
        height={imageDimensions.height}
      />
    </div>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  imageUrl: missingImage,
  alt: "cross stitch image",
};
