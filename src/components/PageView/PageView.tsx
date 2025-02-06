/** @format */

import React, { act } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Map from "./components/Map/Map";
import { ControlPanel } from "./components/ControlPanel";
const PageView = () => {
  const MAP_SIZE = 5;
  const [position, setPosition] = useState([0, 0]);
  const [direction, setDirection] = useState([
    "NORTH",
    "EAST",
    "SOUTH",
    "WEST",
  ]);
  const updatePosition = (x: number, y: number): void => {
    if (x >= 0 && x < MAP_SIZE && y >= 0 && y < MAP_SIZE) {
      setPosition([x, y]);
    }
  };
  const updateDirection = (currentDirection: string, turn: string): void => {
    setDirection((prevDirection) => {
        
    });
  };
  const moveRobot = (action: string): void => {
    if (action === "Move") {
      // Move robot
    }
    if (action === "Right") {
      // turn robot
    }
    if (action === "Left") {
      // turn robot
    }
  };
  const handleGetPosition = (e: Event): void => {
    return setPosition(e.target?.value); // !Error: Object is possibly 'null'.
  };
  return (
    <div className="page-view">
      <div className="map-view">
        <Map />
      </div>
      <div className="control-panel">
        <ControlPanel
          moveRobot={moveRobot}
          position={position}
          getPosition={handleGetPosition}
        />
      </div>
    </div>
  );
};

export default PageView;
