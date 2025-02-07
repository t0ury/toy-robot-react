/** @format */

import React from "react";
interface Props {
  direction: "Up" | "Down" | "Left" | "Right";
  position: number[];
  moveRobot: () => void;
  getPosition?: (e: Event) => void;
  turnRobot: (action: string) => void;
}
const ControlPanel: React.FC<Props> = ({
  position,
  moveRobot,
  direction,
  turnRobot,
}) => {
  return (
    <div className="control-panel">
      <div className="control-robot">
        <button onClick={moveRobot}>Move</button>
        <button onClick={() => turnRobot("Left")}>Left</button>
        <button onClick={() => turnRobot("Right")}>Right</button>
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
