/** @format */

import React from "react";
import { Toy } from "../../../Toy";

interface Prop {
  direction: "Up" | "Down" | "Left" | "Right";
  isRobot: boolean;
}
const Tile: React.FC<Prop> = ({ direction, isRobot }) => {
  if (isRobot) {
    return (
      <div>
        <Toy direction={direction}></Toy>
      </div>
    );
  }

  return <div>T</div>;
};

export default Tile;
