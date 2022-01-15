import React  from "react";
import "./styles.css";
import Border from "./components/Border";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");
  const obj = {
    handleClick: (e) => {
      console.log(e.target.name);
      setResult(result.concat(e.target.name));
    },

    clear: () => {
      setResult("");
    },

    backSpace: () => {
      setResult(result.slice(0, result.length - 1));
    },

    calculate: () => {
      try {
        setResult(eval(result).toString());
      } catch (err) {
        setResult("Error");
      }
    }
  };

  return (
    <div className="App">
      <Border state={result} fun={obj} />
    </div>
  );
}
