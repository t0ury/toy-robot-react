/** @format */
import { Properties } from "csstype";

export const generatePositionStyle = (
  position: number[],
  step: number = 60
): Properties<string | number, string> => {
  const [ROW, COLUMN] = [0, 1];
  return {
    top: step * position[COLUMN],
    left: step * position[ROW],
    margin: "16px",
  };
};

// export const updateRobotPosition = (
//   direction: Direction,
//   position: number[],
//   mapSize: number[],
//   setPosition: React.Dispatch<number[]>
// ): void => {
//   const [x, y] = position;
//   const [lengthX, lengthY] = mapSize;

//   const moveStrategy = {
//     UP: [x, y - 1 < 0 ? lengthY - 1 : y - 1],
//     DOWN: [x, (y + 1) % lengthY],
//     LEFT: [x - 1 < 0 ? lengthX - 1 : x - 1, y],
//     RIGHT: [(x + 1) % lengthX, y],
//   };
//   setPosition(moveStrategy[direction]);
// };

// export const turnRobot = (
//   action: string,
//   direction: Direction,
//   setDirection: React.Dispatch<Direction>
// ): void => {
//   const directionList = ["Up", "Right", "Down", "Left"];
//   const currentIndex = directionList.indexOf(direction);
//   const nextIndex =
//     action === "Right"
//       ? (currentIndex + 1) % directionList.length
//       : (currentIndex + 3) % directionList.length;
//   if (action != "Right" && action != "Left") {
//     return;
//   }

//   setDirection(directionList[nextIndex] as Direction);
// };

// export const setRobot = (inputCoordinator, mapSize): void => {
//   const headSet = new Set(["UP", "RIGHT", "DOWN", "LEFT"]);
//   const [x, y, head] = inputCoordinator;
//   const [ROW, COLUMN] = [0, 1];
//   const temp_head = head.toUpperCase();

//   if (x < 0 || x >= mapSize[ROW] || y < 0 || y >= mapSize[COLUMN]) {
//     setPosition([0, 0]);
//     return;
//   }
//   if (!headSet.has(temp_head)) {
//     setDirection("UP");
//     return;
//   }
//   setPosition([x, y]);
//   setDirection(temp_head as Direction);
// };
