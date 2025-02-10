/** @format */

import React from "react";

interface Prop {
  type: "land" | "water";
}

const Tile: React.FC<Prop> = ({ type }) => {
  const tileType = {
    land: "T",
    water: "W",
  };

  return <>{tileType[type]}</>;
};

export default Tile;
