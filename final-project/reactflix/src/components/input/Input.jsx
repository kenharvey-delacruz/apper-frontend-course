import React from "react";

import "./input.scss";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.input}
      onChange={props.onChange}
    />
  );
};

export default Input;
