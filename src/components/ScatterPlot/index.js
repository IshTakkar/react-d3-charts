import React from "react";
import { scaleLinear, scaleOrdinal, format, extent } from "d3";
import { useData } from "./useData";

import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = window.innerWidth;
const height = window.innerHeight;
const margin = {
  top: 20,
  bottom: 65,
  left: 100,
  right: 30
};
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;
const tickOffset = 10;

export const Scatter = () => {
  const data = useData();
  if (!data) {
    return <pre>Loading...</pre>;
  }
  console.log(data[0]);

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d.sepal_length;
  const xAxisLabel = "Sepal Length";
  const yValue = d => d.petal_length;
  const yAxisLabel = "Petal Length";
  const fillValue = d => d.species;

  const siFormat = format(".2s");
  const xAxisTickFormat = tickFormat => siFormat(tickFormat).replace("G", "B");

  const xScale = scaleLinear()
    .domain(extent(data, xValue)) //can be replaced by .domain([min(data, xValue), max(data, xValue)])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0]);

  const colorCircle = scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica"])
    .range(["#440154ff", "#21908dff", "#fde725ff"]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={tickOffset}
        />

        <AxisLeft yScale={yScale} innerWidth={innerWidth} />

        <text
          className="axis-label"
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          {xAxisLabel}
        </text>

        <text
          className="axis-label"
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight /
            2}) rotate(270)`}
        >
          {yAxisLabel}
        </text>

        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          yValue={yValue}
          xValue={xValue}
          tooltipFormat={xAxisTickFormat}
          colorCircle={colorCircle}
          fillValue={fillValue}
        />
      </g>
    </svg>
  );
};
