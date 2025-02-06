/** @format */

import React from "react";
interface Props {
  direction: "Up" | "Down" | "Left" | "Right";
  position: number[];
  moveRobot: (action: string) => void;
  getPosition?: (e: Event) => void;
}
const ControlPanel: React.FC<Props> = ({ position, moveRobot, direction }) => {
  return (
    <div className="control-panel">
      <div className="control-robot">
        <button onClick={() => moveRobot("Move")}>Move</button>
        <button onClick={() => moveRobot("Left")}>Left</button>
        <button onClick={() => moveRobot("Right")}>Right</button>
      </div>
      <div className="report-position">
        {/* <button onClick={getPosition}>Report</button> */}
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
