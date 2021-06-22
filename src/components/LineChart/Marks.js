/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { curveNatural } from "d3";
import { line } from "d3-shape";
import React from "react";

import "./styles.css";

export const Marks = ({
  data,
  xScale,
  yScale,
  yValue,
  xValue,
  tooltipFormat
}) => {
  return (
    <>
      <g className="marks">
        <path
          fill="none"
          stroke="black"
          d={line()
            .x(d => xScale(xValue(d)))
            .y(d => yScale(yValue(d)))
            .curve(curveNatural)(data)}
        />
        {data.map(d => (
          <circle
            className="mark"
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={4}
          >
            <title>{tooltipFormat(yValue(d))}</title>
          </circle>
        ))}
      </g>
    </>
  );
};
