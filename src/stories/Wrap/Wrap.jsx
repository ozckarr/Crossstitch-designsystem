import React, { useState, useEffect } from "react";
import "./wrap.css";
import { useWindowSize } from "../assets/modules/screenSize";
import PropTypes from "prop-types";

export const Wrap = ({
  backgroundColor,
  stitchPadding,
  borderSize,

  type,
  children,
}) => {
  const { width, height } = useWindowSize();
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(600);

  const calcHeightFit = () => {
    //Height - padding(em) - wrap padding(em*2) / turn to stitchSize
    return (
      Math.floor((screenHeight - stitchPadding * 32 - borderSize * 8 - 8) / 8) *
      8
    );
  };

  useEffect(() => {
    // useWindowSize has a hiccup that temporare sets a temporary undefined,
    // causing errors. This is a buffert
    if (width === undefined) {
      setScreenWidth(0);
    } else {
      setScreenWidth(width);
    }
    if (height === undefined) {
      setScreenHeight(0);
    } else {
      setScreenHeight(height);
    }
  }, [width, height]);

  const paddingRight = (screenWidth % 8) + 8;
  return (
    <div
      className="cross-wrap"
      style={{
        paddingRight: paddingRight,
        backgroundSize: 8 * 2,
        minHeight: screenHeight - 8 * 2,
      }}
    >
      <div
        className={`cross-wrap-border ${type}-style`}
        style={{
          backgroundColor: backgroundColor,
          width: "auto",
          padding: borderSize ? `${borderSize / 2}em` : "1em",
        }}
      >
        <div
          className="cross-border-inner"
          style={{
            padding: `${stitchPadding / 2}em`,
            minHeight: calcHeightFit(),
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Wrap.propTypes = {
  backgroundColor: PropTypes.string,
  stitchPadding: PropTypes.number,
  borderSize: PropTypes.number,
  heightFit: PropTypes.bool,
  widthFit: PropTypes.bool,
  type: PropTypes.oneOf(["full", "half", "lean-left", "lean-right"]),
};

Wrap.defaultProps = {
  backgroundColor: "red",
  stitchPadding: 1,
  borderSize: 1,
  heightFit: false,
  widthFit: false,
  type: "full",
};
