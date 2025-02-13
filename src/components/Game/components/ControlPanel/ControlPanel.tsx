/** @format */

import React from "react";
import { Button } from "./Button";
import { Direction, Action } from "../../../../typeDefine";
interface Props {
  direction: Direction;
  position: number[];
  moveRobot: () => void;
  getPosition?: () => void;
  turnRobot: (turn: Action) => void;
  setCoordinator: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputCoordinator: Array<number | string>;
  setRobot: () => void;
  setDirection: () => void;
}
const ControlPanel: React.FC<Props> = ({
  moveRobot,
  turnRobot,
  setCoordinator,
  inputCoordinator,
  setRobot,
}) => {
  return (
    <section className="control-panel">
      <div className="control-robot">
        <Button handleClick={moveRobot}>Move</Button>
        <Button handleClick={() => turnRobot("LEFT")}>Left</Button>
        <Button handleClick={() => turnRobot("RIGHT")}>Right</Button>
        <mark>Accept value: Up, Right, Down, Left</mark>
        <div className="set-robot">
          <input
            style={{ textAlign: "center" }}
            placeholder="(X, Y, F)"
            value={`${inputCoordinator}`}
            onChange={setCoordinator}></input>
          <Button handleClick={setRobot}>Place Toy</Button>
        </div>
      </div>
    </section>
  );
};

export default ControlPanel;
