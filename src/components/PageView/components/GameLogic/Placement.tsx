/** @format */
import React from "react";
import styles from "./Placement.module.css";
import { Properties } from "csstype";
interface Props {
  children: React.ReactNode;
  position: number[];
}

const Placement = ({ children, position }: Props) => {
  const [ROW, COLUMN] = [0, 1];
  const step = 60;
  const styleString: Properties<string | number, string> = {
    top: step * position[COLUMN],
    left: step * position[ROW],
    margin: "16px",
  };

  return (
    <section className={styles.placementContainer}>
      <div style={styleString}>{children}</div>
    </section>
  );
};

export default Placement;
