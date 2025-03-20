import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [topLight, setTopLight] = useState("circle red");
  const [middleLight, setMiddleLight] = useState("circle black");
  const [bottomLight, setBottomLight] = useState("circle black");
  const [light, setLight] = useState(0);

  const nextLight = () => {
    switch (light) {
      case 0:
        setTopLight("black");
        setBottomLight("green");
        setLight(1);
        break;
      case 1:
        setBottomLight("black");
        setMiddleLight("yellow");
        setLight(2);
        break;
      case 2:
        setMiddleLight("black");
        setTopLight("red");
        setLight(0);
        break;
    }
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${topLight}`}></div>
        <div className={`circle ${middleLight}`}></div>
        <div className={`circle ${bottomLight}`}></div>
      </div>
      <button className="next-state-button" onClick={nextLight}>
        Next State
      </button>
    </div>
  );
};
