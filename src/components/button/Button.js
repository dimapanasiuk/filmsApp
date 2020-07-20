import React from "./node_modules/react";
// import './button.css';

const Button = (props) => {
  console.log(props);
  return (
    <div data-testId="button" className="button-style">
      {props}
    </div>
  );
};

export default Button;

