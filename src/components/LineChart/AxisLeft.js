/* eslint-disable react/jsx-key */
import React from "react";

import "./styles.css";

export const AxisLeft = ({ yScale }) =>
  yScale.ticks().map(tickValue => (
    <g className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text key={tickValue} style={{ textAnchor: "end" }} dy="0.32em" x={-3}>
        {tickValue}
      </text>
    </g>
  ));
