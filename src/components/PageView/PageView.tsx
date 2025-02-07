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
  const [position, setPosition] = useState<number[]>([3, 3]);
  const [direction, setDirection] = useState<Direction>("Up");

  const updatePosition = (x: number, y: number): void => {
    if (x >= 0 && x < map_size[X] && y >= 0 && y < map_size[Y]) {
      setPosition([x, y]);
    }
  };
  const updateDirection = (turn: Direction): void => {
    setDirection(turn);
  };
  const moveRobot = (): void => {
    const [x, y] = position;
    const moveStrategy = {
      Up: [x, y + 1],
      Down: [x, y - 1],
      Left: [x - 1, y],
      Right: [x + 1, y],
    };

    setPosition(moveStrategy[direction]);
  };
  const turnRobot = (action: string): void => {
    const directionList = ["Up", "Right", "Down", "Left"];
    const currentIndex = directionList.indexOf(direction);
    const nextIndex =
      action === "Right"
        ? (currentIndex + 1) % directionList.length
        : (currentIndex + 3) % directionList.length;
    if (action != "Right" && action != "Left") {
      return;
    }
    setDirection(action);
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
        turnRobot={turnRobot}
        position={position}
        direction={direction}
      />
    </div>
  );
};

export default PageView;
