/** @format */
import React from "react";
import { Properties } from "csstype";
import { Direction } from "../../typeDefine";

interface Props {
  direction: Direction;
  styleString: Properties<string | number, string>;
}

const Toy: React.FC<Props> = ({ direction, styleString }) => {
  const agentHeading = {
    UP: "↑",
    DOWN: "↓",
    LEFT: "←",
    RIGHT: "→",
  };
  return (
    <div
      className="toy-agent"
      style={styleString}>
      <span>{agentHeading[direction]}</span>
    </div>
  );
};

export default Toy;
