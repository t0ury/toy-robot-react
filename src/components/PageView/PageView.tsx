/** @format */

import { useState } from "react";
import { useEffect } from "react";
import Map from "./components/Map/Map";
import { ControlPanel } from "./components/ControlPanel";

const PageView = () => {
  type Direction = "Up" | "Down" | "Left" | "Right";
  const map_size = [5, 5];
  const X = 0;
  const Y = 1;
  const [position, setPosition] = useState([3, 3]);
  const [direction, setDirection] = useState<Direction>("Up");

  const updatePosition = (x: number, y: number): void => {
    if (x >= 0 && x < map_size[X] && y >= 0 && y < map_size[Y]) {
      setPosition([x, y]);
    }
  };
  const updateDirection = (turn: Direction): void => {
    setDirection(turn);
  };
  const moveRobot = (action: string): void => {
    if (action === "Move") {
      // TODO: Move robot
    }
    if (action === "Right") {
      // TODO: turn robot
    }
    if (action === "Left") {
      // TODO: turn robot
    }
  };
  // const handleGetPosition = (): number[] => {
  //   return position;
  // };
  return (
    <div className="page-view">
      <Map
        direction={direction}
        position={position}
        map_size={map_size}
      />
      <ControlPanel
        moveRobot={moveRobot}
        position={position}
        direction={direction}
        // getPosition={handleGetPosition}
      />
    </div>
  );
};

export default PageView;
