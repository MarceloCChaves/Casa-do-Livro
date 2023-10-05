import React from "react";

const Input = ({ placeholder, value, onchange, classes, type }) => {
  return (
    <input
      className={classes}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};

export default Input;
