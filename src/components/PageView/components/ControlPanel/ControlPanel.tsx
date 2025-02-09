/** @format */

import React from "react";
import { Button } from "../../../Button";
interface Props {
  direction: "Up" | "Down" | "Left" | "Right";
  position: number[];
  moveRobot: () => void;
  getPosition?: () => void;
  turnRobot: (action: string) => void;
  setCoordinator: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputCoordinator: Array<number | string>;
  setRobot: () => void;
}
const ControlPanel: React.FC<Props> = ({
  position,
  moveRobot,
  direction,
  turnRobot,
  setCoordinator,
  inputCoordinator,
  setRobot,
}) => {
  return (
    <div className="control-panel">
      <div className="control-robot">
        <Button handleClick={moveRobot}>Move</Button>
        <Button handleClick={() => turnRobot("Left")}>Left</Button>
        <Button handleClick={() => turnRobot("Right")}>Right</Button>
        <label>Accept value: Up, Right, Down, Left</label>
        <div className="set-robot">
          <input
            style={{ textAlign: "center" }}
            placeholder="(X, Y, F)"
            value={`${inputCoordinator}`}
            onChange={setCoordinator}></input>
          <Button handleClick={setRobot}>Place Toy</Button>
        </div>
      </div>
      <div className="report-position">
        <label>Position: </label>
        <input
          style={{ textAlign: "center" }}
          placeholder="(X, Y, F)"
          value={`${position},${direction}`}
          readOnly={true}></input>
      </div>
    </div>
  );
};

export default ControlPanel;
