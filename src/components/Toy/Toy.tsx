/** @format */
import React from "react";

interface Props {
  direction: "Up" | "Down" | "Left" | "Right";
}

const Toy: React.FC<Props> = ({ direction }) => {
  const agentHeading = {
    "Up": "↑",
    "Down": "↓",
    "Left": "←",
    "Right": "→",
  };
  return (
    <div className="toy-agent">
      <span>{agentHeading[direction]}</span>
    </div>
  );
};

export default Toy;
