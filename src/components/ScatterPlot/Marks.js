/* eslint-disable react/jsx-key */
import React from "react";

export const Marks = ({
  data,
  xScale,
  yScale,
  yValue,
  xValue,
  tooltipFormat,
  colorCircle,
  fillValue
}) =>
  data.map(d => (
    <circle
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
      fill={colorCircle(fillValue(d))}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
