import  React  from "react";

export default function Keypad(props) {
  return (
    <div className="Keypad">
      <button onClick={props.fun.clear} className="clear operation">
        Clear
      </button>
      <button onClick={props.fun.backSpace} className="backSpace operation">
        C
      </button>
      <button onClick={props.fun.handleClick} name="/" className="operation">
        &divide;
      </button>
      <button onClick={props.fun.handleClick} name="7">
        7
      </button>
      <button onClick={props.fun.handleClick} name="8">
        8
      </button>
      <button onClick={props.fun.handleClick} name="9">
        9
      </button>
      <button onClick={props.fun.handleClick} name="*" className="operation">
        &times;
      </button>
      <button onClick={props.fun.handleClick} name="4">
        4
      </button>
      <button onClick={props.fun.handleClick} name="5">
        5
      </button>
      <button onClick={props.fun.handleClick} name="6">
        6
      </button>
      <button onClick={props.fun.handleClick} name="-" className="operation">
        &ndash;
      </button>
      <button onClick={props.fun.handleClick} name="1">
        1
      </button>
      <button onClick={props.fun.handleClick} name="2">
        2
      </button>
      <button onClick={props.fun.handleClick} name="3">
        3
      </button>
      <button onClick={props.fun.handleClick} name="+" className="operation">
        +
      </button>
      <button onClick={props.fun.handleClick} name="0">
        0
      </button>
      <button onClick={props.fun.handleClick} name=".">
        .
      </button>
      <button onClick={props.fun.calculate} className="calculate operation">
        =
      </button>
    </div>
  );
}
