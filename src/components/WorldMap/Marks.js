/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { geoNaturalEarth1, geoPath, geoGraticule } from "d3-geo";
import React from "react";

import "./styles.css";

export const Marks = ({ data: { land, interiors } }) => {
  const projection = geoNaturalEarth1();
  const path = geoPath(projection);
  const graticule = geoGraticule();
  return (
    <g className="marks">
      <path className="sphere" d={path({ type: "Sphere" })} />
      <path className="graticules" d={path(graticule())} />
      {land.features.map(feature => (
        <path className="land" d={path(feature)} />
      ))}
      <path className="interiors" d={path(interiors)} />
    </g>
  );
};
