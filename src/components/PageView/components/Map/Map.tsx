/** @format */

import { v4 as uuid } from "uuid";
import { Tile } from "./";

interface Props {
  direction: "Up" | "Down" | "Left" | "Right";
  position: number[];
  map_size: number[];
}

const Map: React.FC<Props> = ({ direction, position, map_size }) => {
  const ROW = 0;
  const COLUMN = 1;

  return (
    <div className="map-body">
      <table>
        <tbody>
          {Array.from({ length: map_size[ROW] }).map((_, i) => (
            <tr key={uuid()}>
              {Array.from({ length: map_size[COLUMN] }).map((_, j) => (
                <td
                  key={uuid()}
                  className="map-tile">
                  {position[ROW] === j && position[COLUMN] === i ? (
                    <Tile
                      direction={direction}
                      type={"robot"}
                    />
                  ) : (
                    <Tile
                      direction={direction}
                      type={"blank"}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Map;
