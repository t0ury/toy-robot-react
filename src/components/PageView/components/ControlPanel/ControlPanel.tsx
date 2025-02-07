/** @format */

import React from "react";
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
        <button onClick={moveRobot}>Move</button>
        <button onClick={() => turnRobot("Left")}>Left</button>
        <button onClick={() => turnRobot("Right")}>Right</button>
        <div className="set-robot">
          <label>Accept value: Up, Right, Down, Left</label>
          <input
            style={{ textAlign: "center" }}
            placeholder="(X, Y, F)"
            value={`${inputCoordinator}`}
            onChange={setCoordinator}></input>
          <button onClick={setRobot}>Place Toy</button>
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
