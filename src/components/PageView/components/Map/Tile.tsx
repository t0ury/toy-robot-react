/** @format */

import React from "react";
import { Toy } from "../../../Toy";

interface Prop {
  direction: "Up" | "Down" | "Left" | "Right";
  type: "robot" | "blank";
}
const Tile: React.FC<Prop> = ({ direction, type }) => {
  const tileType = {
    robot: <Toy direction={direction}></Toy>,
    blank: "T",
  };

  return <>{tileType[type]}</>;
};

export default Tile;
