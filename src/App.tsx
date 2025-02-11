/** @format */

import "./App.css";
import "./Toy.css";
import { PageView } from "./components/PageView";

function App() {
  const [WIDTH, HEIGHT] = [5, 5];
  
  return (
    <>
      <PageView mapSize={[WIDTH, HEIGHT]} />
    </>
  );
}

export default App;
