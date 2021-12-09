import React from "react";
import PropTypes from "prop-types";
import "./text.css";
import pixel from "./assets/cross-pixel.png";
import { characterStructures, å, ä, Å, Ä, Ö } from "./characters";

export const Text = ({ textColor, text, ...props }) => {
  const newText = text.split("");
  let textArr = [];
  newText.forEach((letter) => {
    textArr.push(characterStructures(letter));
  });
  return (
    <div className="cross-text" {...props}>
      {textArr.map((letterStructure, index) => (
        <div className={`cross-letter `} key={index}>
          {JSON.stringify(letterStructure) === JSON.stringify(å) ||
          JSON.stringify(letterStructure) === JSON.stringify(Å) ? (
            <>
              <div
                className="cross-text-pixel outer-top-3"
                style={{
                  backgroundColor: textColor,
                }}
              >
                <img src={pixel} alt="cross-stitch" />
              </div>
            </>
          ) : (
            <></>
          )}
          {JSON.stringify(letterStructure) === JSON.stringify(Ä) ? (
            <>
              <div
                className="cross-text-pixel outer-top-1"
                style={{
                  backgroundColor: textColor,
                }}
              >
                <img src={pixel} alt="cross-stitch" />
              </div>
              <div
                className="cross-text-pixel outer-top-5"
                style={{
                  backgroundColor: textColor,
                }}
              >
                <img src={pixel} alt="cross-stitch" />
              </div>
            </>
          ) : (
            <></>
          )}
          {JSON.stringify(letterStructure) === JSON.stringify(ä) ||
          JSON.stringify(letterStructure) === JSON.stringify(Ö) ? (
            <>
              <div
                className="cross-text-pixel outer-top-2"
                style={{
                  backgroundColor: textColor,
                }}
              >
                <img src={pixel} alt="cross-stitch" />
              </div>
              <div
                className="cross-text-pixel outer-top-4"
                style={{
                  backgroundColor: textColor,
                }}
              >
                <img src={pixel} alt="cross-stitch" />
              </div>
            </>
          ) : (
            <></>
          )}
          {letterStructure.map((stitch, index) => (
            <React.Fragment key={index}>
              {stitch === 1 ? (
                <div
                  className="cross-text-pixel"
                  style={{
                    backgroundColor: textColor,
                  }}
                >
                  <img src={pixel} alt="cross-stitch" />
                </div>
              ) : (
                <div className="cross-text-pixel">
                  <div className="cross-text-pixel-empty" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

Text.propTypes = {
  textColor: PropTypes.string,
  text: PropTypes.string,
};

Text.defaultProps = {
  textColor: "black",
  text: "",
};
