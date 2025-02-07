/** @format */

import { useState } from "react";
import Map from "./components/Map/Map";
import { ControlPanel } from "./components/ControlPanel";

const PageView = () => {
  type Direction = "Up" | "Down" | "Left" | "Right";
  const map_size = [5, 5];
  const ROW = 0;
  const COLUMN = 1;
  const [position, setPosition] = useState<number[]>([3, 3]);
  const [direction, setDirection] = useState<Direction>("Up");
  const [inputCoordinator, setInputCoordinator] = useState<
    [number, number, Direction]
  >([0, 0, "Up"]);

  const moveRobot = (): void => {
    const [x, y] = position;
    const [lengthX, lengthY] = map_size;

    const moveStrategy = {
      Up: [x, y - 1 < 0 ? lengthY - 1 : y - 1],
      Down: [x, (y + 1) % lengthY],
      Left: [x - 1 < 0 ? lengthX - 1 : x - 1, y],
      Right: [(x + 1) % lengthX, y],
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

    setDirection(directionList[nextIndex] as Direction);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const [x, y, head] = e.target.value.split(",").map((item) => item.trim());
    setInputCoordinator([parseInt(x), parseInt(y), head as Direction]);
  };
  const setRobot = (): void => {
    const headSet = new Set(["Up", "Right", "Down", "Left"]);
    const [x, y, head] = inputCoordinator;
    const temp_head = head.replace(/^./, (match) => match.toUpperCase());

    if (x < 0 || x >= map_size[ROW] || y < 0 || y >= map_size[COLUMN]) {
      setPosition([0, 0]);
      return;
    }
    if (!headSet.has(temp_head)) {
      setDirection("Up");
      return;
    }
    setPosition([x, y]);
    setDirection(temp_head as Direction);
  };
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
        inputCoordinator={inputCoordinator}
        setCoordinator={handleInputChange}
        setRobot={setRobot}
      />
    </div>
  );
};

export default PageView;
