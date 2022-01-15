import  React  from "react";

export default function InputBar(props) {
  return (
    <div className="inputBar">
      <input type="text" value={props.state} />
    </div>
  );
}
