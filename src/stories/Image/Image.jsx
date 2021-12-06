import React, { useEffect, useState } from "react";
import "./image.css";
import PropTypes from "prop-types";
import missingImage from "./assets/missing-image.png";
import Pixelify from "./assets/pixelify";
import { setImageSize } from "./assets/setImageSize";
import useDimensions from "react-cool-dimensions";

export const Image = ({ imageUrl, stitchWidth }) => {
  const [imageDimensions, setImageDimensions] = useState({});
  const [imgWidth, setImgWidth] = useState(80);
  const [imgHeight, setImgHeight] = useState(80);

  const { observe /*width, height, entry*/ } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      // Triggered whenever the size of the target is changed...

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
  });

  useEffect(() => {
    setImageSize(setImageDimensions, imageUrl);
    let newDimension = (stitchWidth * 8) / imageDimensions.width;
    setImgWidth(stitchWidth * 8);
    setImgHeight(newDimension * imageDimensions.height);
  }, [imageDimensions.height, imageDimensions.width, imageUrl, stitchWidth]);

  return (
    <div ref={observe} className="cross-image">
      <div
        className="cross-image-inner"
        style={{
          height: imgHeight,
          width: imgWidth,
        }}
      ></div>
      <Pixelify
        src={imageUrl}
        pixelSize={8}
        height={imgHeight}
        width={imgWidth}
      />
    </div>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string,
  stitchWidth: PropTypes.number,
};

Image.defaultProps = {
  imageUrl: missingImage,
  stitchWidth: 40,
};
