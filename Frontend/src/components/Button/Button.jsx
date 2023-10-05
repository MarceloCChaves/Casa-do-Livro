import React from "react";

const Button = ({ text, disabled, type, classes }) => {
  return(
		<button disabled={disabled} type={type} className={classes}>
    	{text}
  	</button>
	)
};

export default Button;
