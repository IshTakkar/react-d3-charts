import React from "react";
// import {  } from "d3";
import { useData } from "./useData";

import { Marks } from "./Marks";
import "./styles.css";

const width = window.innerWidth;
const height = window.innerHeight;

export const WorldMap = () => {
  const data = useData();
  if (!data) {
    return <pre>Loading...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};
