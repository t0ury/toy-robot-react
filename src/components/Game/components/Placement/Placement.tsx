/** @format */
import React from "react";
import styles from "./Placement.module.css";
import { Properties } from "csstype";
import { Direction } from "../../../../typeDefine";
interface Props {
  children: React.ReactNode;
  position: number[];
  direction: Direction;
}

const Placement = ({ children, position, direction }: Props) => {
  const [ROW, COLUMN] = [0, 1];
  console.log(`direction: ${direction}`)
  const step = 60;
  const directionList = ["UP", "RIGHT", "DOWN", "LEFT"];
  console.log(directionList.findIndex((dir) => dir === direction));
  const styleString: Properties<string | number, string> = {
    top: step * position[COLUMN],
    left: step * position[ROW],
    margin: "16px",
    position: "relative",
  };

  return (
    <section className={styles.placementContainer}>
      <div style={styleString}>{children}</div>
    </section>
  );
};

export default Placement;
