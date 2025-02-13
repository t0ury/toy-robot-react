/** @format */

import "./App.css";
import "./Toy.css";
import { Game } from "./components/Game";

function App() {
  const [WIDTH, HEIGHT] = [5, 5];
  
  return (
    <>
      <Game mapSize={[WIDTH, HEIGHT]} />
    </>
  );
}

export default App;
