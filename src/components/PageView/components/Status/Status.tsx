/** @format */

import { Direction } from "../../../../typeDefine";

interface Props {
  position: number[];
  direction: Direction;
}

const Status = ({ position, direction }: Props) => {
  return (
    <section className="report-position">
      <label>Position: </label>
      <input
        style={{ textAlign: "center" }}
        placeholder="(X, Y, F)"
        value={`${position},${direction}`}
        readOnly={true}></input>
    </section>
  );
};

export default Status;
