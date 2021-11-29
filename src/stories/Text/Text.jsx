import React from "react";
import PropTypes from "prop-types";
import "./text.css";
import pixel from "./assets/cross-pixel.png";

/**
 * Primary UI component for user interaction
 */
export const Text = ({ backgroundColor, text, ...props }) => {
  const test = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1];
  return (
    <div className="cross-text" {...props}>
      <div className="cross-letter">
        {test.map((stitch, index) => (
          <React.Fragment key={index}>
            {stitch === 1 ? (
              <div
                className="cross-text-pixel"
                style={{
                  backgroundColor: backgroundColor,
                }}
              >
                <img src={pixel} alt="" />
              </div>
            ) : (
              <div className="cross-text-pixel">
                <div className="cross-text-pixel-empty" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

Text.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
};

Text.defaultProps = {
  backgroundColor: "black",
  text: "",
};
