import React from "react";

const Circle = ({ width, height, left, top, zIndex, circleColor }) => {
  let styles = {
    width: width,
    height: height,
    left: left,
    top: top,
    zIndex: zIndex,
    border: `1px solid ${circleColor}`,
  };

  return <div className="circle" style={styles}></div>;
};

export default Circle;
