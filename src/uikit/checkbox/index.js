import React from "react";

const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      {props.value} {props.name}
    </li>
  );
};

export default CheckBox;
