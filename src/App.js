import { useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
      return;
    }

    if (value === "=") {
      if (expression === "") {
        setResult("Error");
        return;
      }

      try {
        // eslint-disable-next-line no-eval
        const evalResult = eval(expression);
        setResult(String(evalResult));
      } catch {
        setResult("Error");
      }
      return;
    }

    setExpression((prev) => prev + value);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />

      <div>{result}</div>

      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          "C",
          "=",
          "+",
        ].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
