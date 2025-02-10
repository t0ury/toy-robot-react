/** @format */

import "./App.css";
import { PageView } from "./components/PageView";

function App() {
  const [WIDTH, HEIGHT] = [5, 5];

  return (
    <>
      <PageView map_size={[WIDTH, HEIGHT]} />
    </>
  );
}

export default App;
