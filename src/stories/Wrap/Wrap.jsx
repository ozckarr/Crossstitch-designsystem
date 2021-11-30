import React from "react";
import "./wrap.css";
import { useWindowSize } from "../assets/modules/screenSize";

export const Wrap = ({ children }) => {
  const { width: screenWidth } = useWindowSize();
  const paddingRight = screenWidth ? (screenWidth % 8) + 16 : 16;

  return (
    <div className="cross-wrap" style={{ paddingRight: paddingRight }}>
      {children}
    </div>
  );
};
