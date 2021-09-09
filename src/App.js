import React, { useState } from "react";
import Fcard from "./components/Fcard";
import Scard from "./components/Scard";
import Tcard from "./components/Tcard";

import "./index.css";
function App() {
  const [Fone, setFone] = useState(14);
  const [Sone, setSone] = useState(74);
  const [Tone, setTone] = useState(140);

  const handleClick = () => {
    setFone(20);
    setSone(99);
    setTone(195);
  };
  const changeClick = () => {
    setFone(14);
    setSone(74);
    setTone(140);
  };
  return (
    <div className="App">
      <div className="header">
        <h1>Pricing Plans</h1>
        <p>Choose your best plan by switching between the different prices</p>
        <div className="btns">
          <button className="btn1" onClick={changeClick}>
            month
          </button>
          <button className="btn2" onClick={Fone ? handleClick : Fone}>
            yearly
          </button>
        </div>
      </div>
      <div className="cards">
        <Fcard Fone={Fone} />
        <Scard Sone={Sone} />
        <Tcard Tone={Tone} />
      </div>
    </div>
  );
}

export default App;
