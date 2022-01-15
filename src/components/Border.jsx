import  React  from "react";
import InputBar from "./InputBar";
import Keypad from "./Keypad";

export default function Border(props) {
  return (
    <div>
      <div className="mainDiv">
        <div className="divTitle">
          <h1>Calculator</h1>
        </div>

        <InputBar state={props.state} fun={props.fun.handlerKey} />
        <Keypad fun={props.fun} />
      </div>
    </div>
  );
}
