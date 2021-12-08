import React from "react";
import "./border.css";
import PropTypes from "prop-types";

export const Border = ({
  backgroundColor,
  stitchPadding,
  borderSize,
  widthFit,
  children,
  type,
}) => {
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
          minHeight: "auto",
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
  type: PropTypes.oneOf(["full", "half", "lean-left", "lean-right"]),
  widthFit: PropTypes.bool,
};

Border.defaultProps = {
  backgroundColor: "red",
  stitchPadding: 1,
  borderSize: 1,
  type: "full",
  widthFit: false,
};
