import React from "react";
import "./border.css";
import PropTypes from "prop-types";
import { useWindowSize } from "../assets/modules/screenSize";

export const Border = ({
  backgroundColor,
  stitchPadding,
  // Make Border a part of wrap with heightFit and widthFit. Remove afrwewards
  borderSize,
  heightFit,
  widthFit,
  children,
  type,
}) => {
  let { height: screenHeight } = useWindowSize();

  const calcHeightFit = () => {
    //Buffers if the screenHeight is slow
    if (screenHeight === undefined) screenHeight = 600;

    //Height - padding(em) - wrap padding(em*2) / turn to stitchSize
    return (
      Math.floor(
        (screenHeight - stitchPadding * 16 * 2 - borderSize * 16 - 16) / 8
      ) * 8
    );
  };
  return (
    <div
      className={`cross-border ${type}-style`}
      style={{
        backgroundColor: backgroundColor,
        width: widthFit ? "fit-content" : "auto",
        padding: borderSize ? `${borderSize / 2}em` : "1em",
      }}
    >
      <div
        className="cross-border-inner"
        style={{
          padding: `${stitchPadding / 2}em`,
          minHeight: heightFit ? "auto" : calcHeightFit(),
        }}
      >
        {children}
      </div>
    </div>
  );
};

Border.propTypes = {
  backgroundColor: PropTypes.string,
  stitchPadding: PropTypes.number,
  borderSize: PropTypes.number,
  heightFit: PropTypes.bool,
  widthFit: PropTypes.bool,
  type: PropTypes.oneOf(["full", "half", "lean-left", "lean-right"]),
};

Border.defaultProps = {
  backgroundColor: "red",
  stitchPadding: 1,
  borderSize: 1,
  heightFit: false,
  widthFit: false,
  type: "full",
};
