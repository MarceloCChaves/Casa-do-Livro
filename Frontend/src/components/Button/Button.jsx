import React from "react";

const Button = ({ text, disabled, type, classes, onclick }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classes}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
