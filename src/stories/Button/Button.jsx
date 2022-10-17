import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Text } from "../Text/Text.jsx";

export const Button = ({
  labelColor,
  backgroundColor,
  backgroundColorHover,
  backgroundColorClick,
  borderColor,
  type,
  // onclick
  label,
  ...props
}) => {
  const [currentColor, setCurrentColor] = useState(backgroundColor);
  return (
    <div
      className="cross-button"
      style={{ backgroundColor: borderColor }}
      onMouseOver={() => setCurrentColor(backgroundColorHover)}
      onMouseOut={() => setCurrentColor(backgroundColor)}
      onMouseDown={() => setCurrentColor(backgroundColorClick)}
      onMouseUp={() => setCurrentColor(backgroundColorHover)}
    >
      {type === "soft" && (
        <>
          <div
            className="cross-button-soft-side cross-button-soft-side-1"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div
            className="cross-button-soft-side cross-button-soft-side-2"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div
            className="cross-button-soft-side cross-button-soft-side-3"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div
            className="cross-button-soft-side cross-button-soft-side-4"
            style={{ backgroundColor: borderColor }}
          ></div>
        </>
      )}
      {type === "round" && (
        <>
          <div
            className="cross-button-round-side cross-button-round-side-1"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div
            className="cross-button-round-side cross-button-round-side-2"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div
            className="cross-button-round-side cross-button-round-side-3"
            style={{ backgroundColor: borderColor }}
          ></div>
          <div
            className="cross-button-round-side cross-button-round-side-4"
            style={{ backgroundColor: borderColor }}
          ></div>
        </>
      )}
      <div
        className="cross-button-inner"
        style={{ backgroundColor: currentColor }}
      >
        <Text textColor={labelColor} text={label} />
      </div>
    </div>
  );
};

Text.propTypes = {
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  backgroundColorClick: PropTypes.string,
  borderColor: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["default", "soft", "round"]),
  label: PropTypes.string,
};

Text.defaultProps = {
  textColor: "black",
  backgroundColor: "white",
  backgroundColorHover: "lightgrey",
  backgroundColorClick: "lightSlateGrey",
  borderColor: "black",
  onClick: undefined,

  label: "",
};
