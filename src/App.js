import React, { useState } from "react";
import "./App.css"

function App() {
  const [result , setResult] = useState('')

  //handler click
  const clickHandler = (e) => {
    setResult(result?.concat(e.target?.name))
  }
    //clear
    const clear = () => {
      setResult('')
    }
  
    //backspace
    const backspace = () => {
      setResult(result?.slice(0 , -1))
    }
  
    //calc
    const calc = () => {
      try {
        setResult(Number(eval(result).toString()).toFixed(2))
      } catch (error) {
        setResult('invalid format')
      }
    }



  return (
    <>
      <div className="container">
        <h1 className="title">React Calculator</h1>
        <div className="calculator">
          <input type="text" className="calcNumbers" value={result} />
          <div className="buttons">
            <button onClick={clear} className="btn clear span-2">C</button>
            <button onClick={backspace} className="btn orange">&larr;</button>
            <button onClick={clickHandler} name="/" className="btn orange">&divide;</button>
            <button onClick={clickHandler} name="7" className="btn">7</button>
            <button onClick={clickHandler} name="8" className="btn">8</button>
            <button onClick={clickHandler} name="9" className="btn">9</button>
            <button onClick={clickHandler} name="*" className="btn orange">x</button>
            <button onClick={clickHandler} name="4" className="btn">4</button>
            <button onClick={clickHandler} name="5" className="btn">5</button>
            <button onClick={clickHandler} name="6" className="btn">6</button>
            <button onClick={clickHandler} name="-" className="btn">-</button>
            <button onClick={clickHandler} name="1" className="btn">1</button>
            <button onClick={clickHandler} name="2" className="btn">2</button>
            <button onClick={clickHandler} name="3" className="btn">3</button>
            <button onClick={clickHandler} name="+" className="btn orange">+</button>
            <button onClick={clickHandler} name="0" className="btn span-3">0</button>
            <button onClick={calc} className="btn orange equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
