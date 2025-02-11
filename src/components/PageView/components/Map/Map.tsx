/** @format */

import { v4 as uuid } from "uuid";
import { Tile } from "./";

interface Props {
  children: React.ReactNode;
  map_size: number[];
}

const Map: React.FC<Props> = ({ children, map_size }) => {
  const [ROW, COLUMN] = [0, 1];

  return (
    <section className="map-body">
      <table>
        <tbody>
          <tr>
            <td>{children}</td>
          </tr>
          {Array.from({ length: map_size[ROW] }).map((_, i) => (
            <tr key={uuid()}>
              {Array.from({ length: map_size[COLUMN] }).map((_, j) => (
                <td
                  key={uuid()}
                  id={`r${i}c${j}`}
                  className="map-tile">
                  <Tile type={"land"} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Map;
