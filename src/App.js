import React, { useState } from "react";

// Calculators
import Calculator from "./Components/Calculator";
import History from "./Components/History";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [calcToggle, setCalcToggle] = useState("");
  const [operation, setOperation] = useState("+");

  const inputHandler = (value) => {
    setInput(value);
  };

  const calcHandler = (operation) => {
    setOperation(operation);
  };
  const resultHandler = (e) => {
    try {
      setHistory([...history, input]);
      setInput(
        String(eval(input)).length > 3 && String(eval(input)).includes(".")
          ? String(eval(input).toFixed(4))
          : String(eval(input))
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="main-container">
      <History historyData={history} />
      <div className='calculators'>
        <h1>Calculators</h1>
        <div>
          <button onClick={() => calcHandler("+")}>Add</button>
          <button onClick={() => calcHandler("*")}>Multiply</button>
          <button onClick={() => calcHandler("/")}>Divide</button>
        </div>
        <Calculator
          resultHandler={resultHandler}
          input={input}
          inputHandler={inputHandler}
          operation={operation}
        />
      </div>
    </div>
  );
};

export default App;
