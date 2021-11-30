import React from "react";
import "./border.css";
import PropTypes from "prop-types";

export const Border = ({ backgroundColor, stitchPadding, children }) => {
  return (
    <div
      className="cross-border"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className="cross-border-inner"
        style={{
          padding: `${stitchPadding / 2}em`,
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
};

Border.defaultProps = {
  backgroundColor: "red",
  stitchPadding: 1,
};
