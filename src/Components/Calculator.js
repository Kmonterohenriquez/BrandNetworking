import React, { useState } from "react";
import "../App.sass";

const Calculator = ({
  name,
  operation,
  resultHandler,
  inputHandler,
  input,
}) => {
  const calcBtns = [];
  // Create new button with their own value
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach((item) => {
    calcBtns.push(
      <button
        onClick={(e) => {
          inputHandler(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {item}
      </button>
    );
  });
  return (
    <div className="App">
      <h1>{name} calculator</h1>
      <div className="calculator">
        <input className="operation" placeholder="0" value={input} />
        <div className="modifiers">
          <button
            onClick={() => inputHandler(input.substr(0, input.length - 1))}
          >
            Clear
          </button>
          <button onClick={() => inputHandler("")} value="">
            AC
          </button>
        </div>
        <div className="digits flex">{calcBtns}</div>
        <div className="operations">
          <button
            onClick={(e) => inputHandler(input + e.target.value)}
            value={operation}
          >
            {operation}
          </button>
          <button onClick={(e) => resultHandler(e)} value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
