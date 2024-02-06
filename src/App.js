import "./index.css";
import Circle from "./components/Circle";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  let colors = [
    "red",
    "blue",
    "green",
    "brown",
    "black",
    "grey",
    "yellow",
    "purple",
    "pink",
    "blue",
    "orange",
  ];
  let circles = [];

  for (let index = 0; index < 100; index++) {
    let randomWidth = Math.floor(Math.random() * 400);
    let randomHeight = Math.floor(Math.random() * 400);
    let randomTop = Math.floor(Math.random() * 500);
    let randomLeft = Math.floor(Math.random() * 1200);
    let randomZIndex = Math.floor(Math.random() * 100);
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    circles.push(
      <Circle
        width={randomWidth}
        height={randomHeight}
        top={randomTop}
        left={randomLeft}
        zIndex={randomZIndex}
        circleColor={randomColor}
      />
    );
  }

  console.log(circles);

  return (
    <div className="App">
      {circles.map((item) => {
        return item;
      })}

      <h3 onClick={() => setNumber(number + 1)}>update</h3>
    </div>
  );
}

export default App;
