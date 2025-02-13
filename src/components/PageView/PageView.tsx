/** @format */

import { useState } from "react";
import Map from "./components/Map/Map";
import { Toy } from "./components/Toy";
import { ControlPanel } from "./components/ControlPanel";
import { generatePositionStyle } from "../../utils/moveRobot";
import { Direction, Action } from "../../typeDefine";
import { Placement } from "./components/GameLogic";
import { Status } from "./components/Status";

interface pageViewProps {
  mapSize: number[];
}
const PageView: React.FC<pageViewProps> = ({ mapSize }) => {
  const [ROW, COLUMN] = [0, 1];
  const [position, setPosition] = useState<number[]>([2, 3]);
  const [direction, setDirection] = useState<Direction>("UP");
  const [inputCoordinator, setInputCoordinator] = useState<
    [number, number, Direction]
  >([0, 0, "UP"]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const [x, y, head] = e.target.value.split(",").map((item) => item.trim());
    setInputCoordinator([parseInt(x), parseInt(y), head as Direction]);
  };

  const updateRobotPosition = (): void => {
    const [x, y] = position;
    const [lengthX, lengthY] = mapSize;

    const moveStrategy = {
      UP: [x, y - 1 < 0 ? lengthY - 1 : y - 1],
      DOWN: [x, (y + 1) % lengthY],
      LEFT: [x - 1 < 0 ? lengthX - 1 : x - 1, y],
      RIGHT: [(x + 1) % lengthX, y],
    };
    setPosition(moveStrategy[direction]);
  };

  const turnRobot = (action: Action): void => {
    const directionList = ["UP", "RIGHT", "DOWN", "LEFT"];
    const currentIndex = directionList.indexOf(direction);
    const tempAction = action.toUpperCase();
    const nextIndex =
      tempAction === "RIGHT"
        ? (currentIndex + 1) % directionList.length
        : (currentIndex + 3) % directionList.length;
    if (tempAction != "RIGHT" && tempAction != "LEFT") {
      return;
    }

    setDirection(directionList[nextIndex] as Direction);
  };

  const setRobot = (): void => {
    const headSet = new Set(["UP", "RIGHT", "DOWN", "LEFT"]);
    const [x, y, head] = inputCoordinator;
    const tempHeading = head.toUpperCase();

    if (x < 0 || x >= mapSize[ROW] || y < 0 || y >= mapSize[COLUMN]) {
      setPosition([0, 0]);
      return;
    }
    if (!headSet.has(tempHeading)) {
      setDirection("UP");
      return;
    }
    setPosition([x, y]);
    setDirection(tempHeading as Direction);
  };
  return (
    <main className="page-view">
      {position && (
        <Placement position={position}>
          <Toy direction={direction} />
        </Placement>
      )}

      <Map map_size={mapSize} />
      <ControlPanel
        moveRobot={updateRobotPosition}
        turnRobot={turnRobot}
        position={position}
        direction={direction}
        inputCoordinator={inputCoordinator}
        setCoordinator={handleInputChange}
        setRobot={setRobot}
        setDirection={() => setDirection}
      />
      <Status
        position={position}
        direction={direction}
      />
    </main>
  );
};

export default PageView;
