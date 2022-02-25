import React, { useState } from "react";
import "./App.css"

function App() {
  const [result , setResult] = useState('')

  //handler click
  const clickHandler = (e) => {
    setResult(e.target?.name)
  }
  return (
    <>
      <div className="container">
        <h1 className="title">React Calculator</h1>
        <div className="calculator">
          <input type="text" className="calcNumbers" value={result} />
          <div className="buttons">
            <button className="btn clear span-2">C</button>
            <button className="btn orange">&larr;</button>
            <button name="/" className="btn orange">&divide;</button>
            <button onClick={clickHandler} name="7" className="btn">7</button>
            <button name="8" className="btn">8</button>
            <button name="9" className="btn">9</button>
            <button name="*" className="btn orange">x</button>
            <button name="4" className="btn">4</button>
            <button name="5" className="btn">5</button>
            <button name="6" className="btn">6</button>
            <button name="-" className="btn">-</button>
            <button name="1" className="btn">1</button>
            <button name="2" className="btn">2</button>
            <button name="3" className="btn">3</button>
            <button name="+" className="btn orange">+</button>
            <button name="0" className="btn span-3">0</button>
            <button className="btn orange equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
