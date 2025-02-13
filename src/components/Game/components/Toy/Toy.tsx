/** @format */
import React from "react";
import { Direction } from "../../../../typeDefine";

interface Props {
  direction: Direction;
}

const Toy: React.FC<Props> = ({ direction }) => {
  const agentHeading = {
    UP: "↑",
    DOWN: "↓",
    LEFT: "←",
    RIGHT: "→",
  };
  return (
    <div className="toy-agent">
      <span>{agentHeading[direction]}</span>
    </div>
  );
};

export default Toy;
